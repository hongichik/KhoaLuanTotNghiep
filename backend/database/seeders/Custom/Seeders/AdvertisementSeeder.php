<?php

namespace Database\Seeders\Custom\Seeders;

use App\Models\Advertisement;
use Illuminate\Database\Seeder;

class AdvertisementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Advertisement::create([
            'name' => 'Quảng cáo 1',
            'image' => 'https://source.unsplash.com/random',
            'location' => 'carousel_banner_right',
            'url' => '/',
            'status' => false
        ]);

        Advertisement::create([
            'name' => 'Quảng cáo 2',
            'image' => 'https://source.unsplash.com/random',
            'location' => 'banner_left',
            'url' => '/',
        ]);
    }
}
