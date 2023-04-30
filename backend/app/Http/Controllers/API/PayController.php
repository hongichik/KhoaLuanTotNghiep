<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\PayRequest;
use App\Models\Pay;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PayController extends Controller
{
    public function create(PayRequest $request)
    {
        $pay = new Pay();
        $pay->user_id = Auth::guard('sanctum')->user()->id;
        $pay->product_id = $request->product_id;
        $pay->count = $request->count;
        $pay->status = $request->status;
        $pay->address = $request->address;
        $pay->detail = $request->detail;
        $pay->type = $request->type;
        $pay->phone = $request->phone;
        $pay->info_pay = $request->info_pay;
        $pay->save();

        return $pay;
    }
}
