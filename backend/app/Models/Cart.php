<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class Cart extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'product_id',
        'detail',
        'count'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function getCart()
    {
        if (Auth::guard('sanctum')->check()) {
            $user = Auth::guard('sanctum')->user();
            $carts = $this->where('user_id', $user->id)->get();
            foreach($carts as $cart)
            {
                $cart->detail = json_decode($cart->detail);
                $cart->productTitle = $cart->product->title;
                $cart->productPrice = $cart->product->price;
                $cart->productDiscount = $cart->product->discount;
                $cart->productSlug = $cart->product->slug;
                $cart->isChoose = false;
                unset($cart->product);
                unset($cart->user_id);
                unset($cart->created_at);
                unset($cart->updated_at);
            }
            return $carts;
        }
        return;
    }
}
