<?php

namespace Database\Seeders\Custom\MenuPer;

use Illuminate\Database\Seeder;

class index extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        require_once(database_path('seeders/Custom/MenuPer/Advertisement.php'));
        require_once(database_path('seeders/Custom/MenuPer/Products.php'));
    }
}
