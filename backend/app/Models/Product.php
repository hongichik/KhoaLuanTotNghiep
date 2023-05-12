<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Product extends Model
{
    use HasFactory;
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function carts()
    {
        return $this->belongsToMany(Cart::class)->withTimestamps();
    }
    protected $fillable = [
        'title',
        'slug',
        'main_image',
        'images',
        'price',
        'qty',
        'detail',
        'order',
        'discount'
    ];

    public function getDiscountedProducts($limit = 30, $withCart = true)
    {
        $query = $this->where('discount', '!=', 0)
            ->where('qty', '!=', 0)
            ->orderBy('order', 'desc')
            ->limit($limit);
        $products = $query->get();
        if ($withCart && Auth::guard('sanctum')->check()) {
            $carts = Auth::guard('sanctum')->user()->cart;
            foreach ($products as $product) {
                $product->images = json_decode($product->images);
                $product->detail = json_decode($product->detail);
                $productIds = array_column(json_decode($carts), 'product_id');
                if (in_array($product->id, $productIds)) {
                    $product->cart = true;
                } else {
                    $product->cart = false;
                }
            }
        } else {
            foreach ($products as $product) {
                $product->images = json_decode($product->images);
                $product->detail = json_decode($product->detail);
                $product->cart = false;
            }
        }

        return $products;
    }

    public function getProducts($perPage = 30, $request, $withCart = true)
    {
        // dd($request['page']);
        if (isset($request['perPage'])) {
            $perPage = $request['perPage'];
        }
        $page = $request['page'] ?? 1;
        $order = $request['order'] ?? 0;
        $categoryRequet = explode(",", $request['category']);
        $arrayCategory = Category::whereIn('slug', array_map("urldecode", $categoryRequet))->pluck('id')->toArray();
        $query = $this::where('discount', '!=', 0);
        if (count($arrayCategory) > 0) {
            $query = $query->whereIn('category_id', $arrayCategory);
        }
        if ($order == 0) {
            $query = $query->orderBy('created_at', 'DESC');
        }
        if ($order == 1) {
            $query = $query->orderByRaw('(price - (price * (discount / 100))) ASC');
        }

        if ($order == 2) {
            $query = $query->orderByRaw('(price - (price * (discount / 100))) DESC');
        }

        if (isset($request['from']) && $request['from'] != "") {
            $query = $query->where('price', '>=', $request['from']);
        }
        if (isset($request['to']) && $request['to'] != "") {
            $query = $query->where('price', '<=', $request['to']);
        }
        if (isset($request['search'])) {
            $query = $query->where('title',  'LIKE', "%{$request['search']}%");
        }

        $query = $query->paginate($perPage, ['*'], 'page', $page);
        $products = $query->items();


        // Thêm thông tin cart cho từng sản phẩm
        if ($withCart && Auth::guard('sanctum')->check()) {
            $carts = Auth::guard('sanctum')->user()->cart;
            foreach ($products as $product) {
                $product->images = json_decode($product->images);
                $product->detail = json_decode($product->detail);
                $productIds = array_column(json_decode($carts), 'product_id');

                if (in_array($product->id, $productIds)) {
                    $product->cart = true;
                } else {
                    $product->cart = false;
                }
            }
        } else {
            foreach ($products as $product) {
                $product->images = json_decode($product->images);
                $product->detail = json_decode($product->detail);
                $product->cart = false;
            }
        }

        $sumPage = ceil($query->total() / $query->perPage());
        $previousPage = $query->currentPage() - 1;
        if ($query->currentPage() == $sumPage) {
            $nextPage = 0;
        } else {
            $nextPage = $query->currentPage() + 1;
        }

        $from = ($query->currentPage() - 1) * $query->perPage();
        if ($from <= 0)
            $from = 1;
        $to = $from + $query->perPage() - 1;
        if ($to > $query->total())
            $to = $query->total();
        // Thêm thông tin phân trang
        $pagination = [
            'total' => $query->total(),
            'from' => $from,
            'to' => $to,
            'per_page' => $query->perPage(),
            'current_page' => $query->currentPage(),
            'last_page' => $query->lastPage(),
            'prev_page_url' => $previousPage,
            'next_page_url' => $nextPage,
        ];

        return [
            'data' => $products,
            'pagination' => $pagination,
        ];
    }

    public function getProduct($slug)
    {
        $product = Product::where('slug', $slug)->first();
        $product->images = json_decode($product->images);
        $product->detail = json_decode($product->detail);
        return $product;
    }
}
