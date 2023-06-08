<?php

namespace Database\Seeders;

use App\Common\Block;
use App\Models\Blockchain;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use stdClass;
use TCG\Voyager\Models\Role;
use TCG\Voyager\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     *
     * @return void
     */
    public function run()
    {
        if (User::count() == 0) {
            $role = Role::where('name', 'admin')->firstOrFail();
            $nameAdmin = 'Admin';
            $gmailAdmin ='admin@admin.com';
            $addressAdmin ='cty demo';
            $phoneAdmin = '0987654321';

            $block1 = new Block("Bạn đã tạo tài khoản");
            $block1->previousHash = 1;
            $block1->mineBlock();
            $blockChain = new Blockchain();
            $last_block = $blockChain->newBlock($block1);
            User::create([
                'name'           => $nameAdmin,
                'email'          => $gmailAdmin,
                'address'        => $addressAdmin,
                'phone'          =>  $phoneAdmin,
                'last_block'     =>  $last_block,
                'password'       => bcrypt('password'),
                'remember_token' => Str::random(60),
                'role_id'        => $role->id,
            ]);
        }
    }
}
