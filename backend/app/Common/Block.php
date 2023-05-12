<?php
namespace App\Common;

use DateTime;

class Block
{
    public $previousHash;
    public $timestamp;
    public $data;
    public $hash;
    public $nonce;

    public function __construct($data = '', $previousHash = '')
    {
        $this->previousHash = $previousHash;
        $this->timestamp = (new DateTime())->setTimestamp(time());
        $this->timestamp = $this->timestamp->format('Y-m-d H:i:s');
        $this->data = $data;
        $this->hash = $this->calculateHash();
        $this->nonce = 0;
    }

    public function calculateHash()
    {
        return hash('sha256', $this->previousHash . $this->timestamp . json_encode($this->data) . $this->nonce);
    }

    public function mineBlock()
    {
        $difficulty = env('DIFFICULTY_BLOCK');
        while (substr($this->hash, 0, $difficulty) !== str_repeat('0', $difficulty)) {
            $this->nonce++;
            $this->hash = $this->calculateHash();
        }
    }

    public function addDB($block)
    {
        $this->timestamp = $block->timestamp;
        $this->hash = $block->hash;
        $this->nonce =$block->nonce;
        $this->previousHash = $block->previousHash;
        $this->data = $block->data;
    }

    public function check($block)
    {
        // echo $block->hash;
        // echo "<br/>";
        $this->timestamp = $block->timestamp;
        $this->hash = $block->hash;
        $this->nonce =$block->nonce;
        $this->previousHash = $block->previousHash;
        $this->data = $block->data;
        // echo $this->calculateHash();
        // echo "<br/>";
        // echo json_encode($this);
        // echo "<br/>";
        if($block->hash == $this->calculateHash())
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
