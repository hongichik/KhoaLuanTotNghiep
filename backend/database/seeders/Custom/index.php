<?php

namespace Database\Seeders\Custom;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
        $this->call([
            Seeders\AdvertisementSeeder::class,
            MenuPer\index::class,
            Bread\index::class
        ]);
    }
}
