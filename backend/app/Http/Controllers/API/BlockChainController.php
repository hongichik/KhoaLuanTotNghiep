<?php

namespace App\Http\Controllers\API;

use App\Common\Block;
use App\Common\Blockchain;
use App\Http\Controllers\Controller;
use App\Models\Blockchain as ModelsBlockchain;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BlockChainController extends Controller
{
    public function index(Request $request)
    {
        if(Auth::user()->last_block == null)
        {
            $last_block = false;
            while(!$last_block)
            {
                $block1 = new Block("Bạn đã tạo tài khoản");
                $block1->previousHash = Auth::user()->email;
                $block1->mineBlock();
                $blockChain = new ModelsBlockchain();
                $last_block = $blockChain->newBlock($block1);
                if(!$last_block)
                {
                    ModelsBlockchain::where('previousHash',Auth::user()->email)->delete();
                }
            }
            $user = User::where('id',Auth::user()->id)->update([
                'last_block'     =>  $last_block,
            ]);

            Auth::user()->last_block = $last_block;
        }
        $get = $request['get'] ?? 5;
        $blockCheck = new Block();
        $blockLast = ModelsBlockchain::where('hash', Auth::user()->last_block)->first();
        if (!$blockCheck->check($blockLast)) {
            return false;
        }
        $arrayBlock[] = $blockLast;

        if ($get != 1) {
            for ($i = 1; $i < $get; $i++) {
                if(isset($blockLast->previousHash))
                {
                    $blockLast = ModelsBlockchain::where('hash', $blockLast->previousHash)->first();
                    if ($blockLast !== null) {
                        if (!$blockCheck->check($blockLast)) {
                            return false;
                        }
                        array_push($arrayBlock, $blockLast);
                    }
                }
                else
                {
                    break;
                }

            }
        }

        return $arrayBlock;
    }
}
