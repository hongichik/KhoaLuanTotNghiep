<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
   public function addCart(Request $request, $id)
   {
      $request->validate([
         'count' => 'required',
     ]);
 
      $cart = Cart::where('product_id', $id)
         ->where('user_id', Auth::guard('sanctum')->user()->id)
         ->first();

      if ($cart) {
         // Bản ghi đã tồn tại, cập nhật thông tin
         $cart->detail = $request['detail'];
         $cart->count = $request['count'];
         $cart->save();
      } else {
         // Bản ghi chưa tồn tại, tạo mới bản ghi
         $cart = Cart::create([
            'product_id' => $id,
            'detail' => $request['detail'],
            'count' => $request['count'],
            'user_id' => Auth::guard('sanctum')->user()->id,
         ]);
      }
   }
   public function deleteCart($id)
   {
      return Cart::where('product_id', $id)
      ->where('user_id', Auth::guard('sanctum')->user()->id)
      ->delete();
   }
}
