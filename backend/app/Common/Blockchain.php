<?php

namespace App\Common;
use App\Common\Block;

class Blockchain
{
    public $chain;
    public $difficulty;

    public function __construct($difficulty, $block)
    {
        $this->chain = [$block];
        $this->difficulty = $difficulty;
    }

    public function createGenesisBlock()
    {
        return new Block('Block đầu tiên', '0');
    }

    public function getLatestBlock()
    {
        return $this->chain[count($this->chain) - 1];
    }

    public function addBlock($newBlock)
    {
        $newBlock->previousHash = $this->getLatestBlock()->hash;
        $newBlock->mineBlock($this->difficulty);
        $this->chain[] = $newBlock;
    }

    public function isChainValid()
    {
        for ($i = 1; $i < count($this->chain); $i++) {
            $currentBlock = $this->chain[$i];
            $previousBlock = $this->chain[$i - 1];

            if ($currentBlock->hash !== $currentBlock->calculateHash()) {
                return false;
            }

            if ($currentBlock->previousHash !== $previousBlock->hash) {
                return false;
            }
        }

        return true;
    }
}
