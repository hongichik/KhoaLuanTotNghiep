<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blockchain extends Model
{
    use HasFactory;
    protected $primaryKey = 'previousHash';

    protected $fillable = [
        'previousHash', 'timestamp', 'data', 'hash', 'nonce'
    ];

    protected $casts = [
        'previousHash' => 'string',
    ];

    public function newBlock($block)
    {
        // dd($this->where('previousHash', $block->previousHash)->first());
        // $blockchain = $this->where('previousHash', $block->previousHash)->first();
        if (!$this->where('previousHash', $block->previousHash)->exists()) {
            $blockchain =  $this->create([
                'previousHash' => $block->previousHash,
                'timestamp'    => $block->timestamp,
                'data'         => $block->data,
                'hash'         => $block->hash,
                'nonce'        => $block->nonce
            ]);
            $blockchain->save();

            $user = User::where('last_block', $block->previousHash)->first();
            if ($user == null) {
                return $blockchain->hash;
            }
            else
            {
                $user->last_block = $blockchain->hash;
                $user->save();
            }

        } else {
            return false;
        }
    }

}
