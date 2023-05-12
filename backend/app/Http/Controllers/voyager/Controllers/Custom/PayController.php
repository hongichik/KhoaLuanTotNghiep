<?php

namespace App\Http\Controllers\voyager\Controllers\Custom;

use Illuminate\Http\Request;
use TCG\Voyager\Facades\Voyager;
use App\Http\Controllers\voyager\Controllers\VoyagerBaseController;
use App\Models\Notification;
use App\Models\Pay;
use App\Models\User;
use App\Common\Block;
use App\Models\Blockchain;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Auth;

class PayController extends VoyagerBaseController
{

    public function index(Request $request)
    {
        // Check permission
        $modelPay = new Pay();
        $this->authorize('browse', app($modelPay::class));

        $content = new Pay();
        $content = $content->getAdminPay($request);

        $view = 'voyager::bread.browse';

        if (view()->exists("voyager::pays.browse")) {
            $view = "voyager::pays.browse";
        }

        return Voyager::view($view, compact(
            'content'
        ));
    }


    public function destroy(Request $request, $id)
    {
        $modelPay = new Pay();
        $this->authorize('browse', app($modelPay::class));

        $pay = Pay::where('id', $id)->delete();

        // Còn thiếu 1 cái xóa hàng loạt nữa


        $data = $pay
            ? [
                'message'    => "Đã xóa đơn đặt hàng thành công",
                'alert-type' => 'success',
            ]
            : [
                'message'    => "Xóa đơn đặt hàng thất bại",
                'alert-type' => 'error',
            ];

        return redirect()->route("voyager.pays.index")->with($data);
    }
    public function status($id, $status)
    {
        $pay = Pay::find($id);
        $pay->status = $status;

        $pay->save();
        if($status != 4 && $status != 0)
        {
            $notification = new Notification();
            $contentNotification = "Đơn hàng " . $pay->product->title . " ";
            if ($status == 1)
            {
                $content ="Đơn hàng ". $pay->product->title ." đã được quản trị viên xác nhận là đã thanh toán.";
                $last_block = User::where('id',$pay->user_id)->first()->last_block;
                $block1 = new Block($content);
                $block1->previousHash = $last_block;
                $block1->mineBlock();
                $blockChain = new Blockchain();
                $blockChain->newBlock($block1);
                $contentNotification = $contentNotification."đã được xác nhận.";
            }
            if ($status == 2)
                $contentNotification = $contentNotification."đang được giao.";
            if ($status == 3)
                $contentNotification = $contentNotification."đã giao thành công.";
            $notification->content = $contentNotification;
            $notification->user_id = $pay->user_id;
            $notification->status = 0;
            $notification->type = $status + 1;
            $notification->save();
        }

        $data = $pay
            ? [
                'message'    => "Thay đổi trạng thái thành công",
                'alert-type' => 'success',
            ]
            : [
                'message'    => "Thay đổi trạng thái thất bại",
                'alert-type' => 'error',
            ];

        // $client = new Client();
        // $res = $client->request('POST', env('APP_NODE_URL').'/products', [
        //     'query' => [
        //         'message' => 'Đây là tin nhắn thử nghiệm thử nghiệm 2',
        //         'slug' => '2',
        //         'room' => '/comment',
        //         'to'   => 'RoomResponse',
        //     ]
        // ]);
        // dd($res->getStatusCode());
        return back()->withInput()->with($data);
    }
}
