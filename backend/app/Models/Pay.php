<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pay extends Model
{
    use HasFactory;
    protected $translatable = ['user_id', 'count', 'status', 'product_id', 'detail', 'address', 'type', 'phone', 'info_pay'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function getAdminPay($request)
    {
        $perPage = $request['perPage'] ?? 10;
        $page = $request['page'] ?? 1;
        $search = $request['search'] ?? '';
        $status = $request['status'] ?? 0;
        $order = $request['order'] ?? 0;

        $pays = $this->join('products', 'pays.product_id', '=', 'products.id')
            ->join('users', 'pays.user_id', '=', 'users.id')
            ->select('pays.*', 'products.title', 'users.name')
            ->where(function ($query) use ($search) {
                $query->where('products.title', 'like', '%' . $search . '%')
                    ->orWhere('users.name', 'like', '%' . $search . '%');
            })
            ->where('status',$status);
        if($order == 0)
        {
            $pays = $pays->orderBy('created_at', 'DESC');
        }
        else
        {
            $pays = $pays->orderBy('created_at', 'ASC');
        }
        $pays = $this->paginate($perPage, ['*'], 'page', $page);
        return $pays;
    }


    public function getPay($request)
    {
        $perPage = $request['perPage'] ?? 5;
        $status = $request['status'] ?? 0;

        $page = $request['page'] ?? 1;
        $query = $this->where('status',$status)->orderBy('id', 'DESC')->paginate($perPage, ['*'], 'page', $page);

        $pays = $query->items();
        foreach($pays as $pay)
        {
            $pay->product;
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
            'data' => $pays,
            'pagination' => $pagination,
        ];
    }
}
