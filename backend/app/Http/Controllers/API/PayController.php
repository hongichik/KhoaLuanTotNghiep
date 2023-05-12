<?php

namespace App\Http\Controllers\API;

use App\Common\Block;
use App\Http\Controllers\Controller;
use App\Http\Requests\API\PayRequest;
use App\Models\Blockchain;
use App\Models\Pay;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PayController extends Controller
{
    public function create(PayRequest $request)
    {
        $i = 0;
        $type = 0;
        while (true) {
            if (isset($request['product_id'][$i])) {
                $pay = new Pay();
                $pay->user_id = Auth::guard('sanctum')->user()->id;
                $pay->product_id = $request->product_id[$i];
                $pay->count = $request->count[$i];
                $pay->status = $request->status[$i];
                $pay->address = $request->address[$i];
                $pay->detail = $request->detail[$i] ?? '';
                $pay->type = $request->type[$i];
                $pay->phone = $request->phone[$i];
                $pay->info_pay = $request->info_pay[$i];
                $pay->save();
                $type = $request->type[$i];
            } else
                break;
            $i++;
        }

        if (isset($request['sumPrice'])) {
            $content ="Bạn đã thanh toán bằng hình thức ATM với số tiền là " . $request['sumPrice'] . " hãy chờ quản trị viên xác nhận lại.";
            $last_block = Auth::user()->last_block;
            $block1 = new Block($content);
            $block1->previousHash = $last_block;
            $block1->mineBlock();
            $blockChain = new Blockchain();
            $blockChain->newBlock($block1);
        }
        // $client = new Client();
        // $res = $client->request('POST', env('APP_NODE_URL') . '/products', [
        //     'query' => [
        //         'message' => 'Bạn đã đặt hàng thành công',
        //         'slug' => Auth::user()->id,
        //         'room' => '/notification',
        //         'to'   => 'notification',
        //     ]
        // ]);
        // dd($res->getStatusCode());
        return true;
    }

    public function get(Request $request)
    {

        $pays = new Pay();
        return $pays->getPay($request);
    }
}
