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

    public function getProducts($perPage = 30, $page = 1, $withCart = true)
    {
        $query = self::where('discount', '!=', 0)
            ->orderBy('created_at', 'desc')
            ->paginate($perPage, ['*'], 'page', $page);
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

        // Thêm thông tin phân trang
        $pagination = [
            'total' => $query->total(),
            'per_page' => $query->perPage(),
            'current_page' => $query->currentPage(),
            'last_page' => $query->lastPage(),
            'prev_page_url' => $query->previousPageUrl(),
            'next_page_url' => $query->nextPageUrl(),
        ];

        return [
            'data' => $products,
            'pagination' => $pagination,
        ];
    }
}
