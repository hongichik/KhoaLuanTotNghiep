<?php

namespace App\Http\Controllers\API;

use App\Common\Block;
use App\Common\Blockchain;
use App\Http\Controllers\Controller;
use App\Models\Blockchain as ModelsBlockchain;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BlockChainController extends Controller
{
    public function index(Request $request)
    {
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
