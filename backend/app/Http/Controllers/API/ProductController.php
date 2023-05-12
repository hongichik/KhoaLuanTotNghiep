<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function discount()
    {
        $product = new Product();
        $discountedProducts = $product->getDiscountedProducts();
        return $discountedProducts;
    }

    public function index(Request $request)
    {
        $products = new Product();
        return $products->getProducts(30,$request,true);
    }

    public function detailProduct($slug)
    {
        $product = new Product();
        return $product->getProduct($slug);
    }
}
