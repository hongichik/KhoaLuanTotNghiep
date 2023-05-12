<?php

namespace Database\Seeders\Custom\Seeders;

use App\Models\Advertisement;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdvertisementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $file = base_path('database/seeders/sql/advertisements.sql');

        if (file_exists($file)) {
            $sql = file_get_contents($file);
            DB::unprepared($sql);
        } else {
            Advertisement::create([
                'name' => 'Quảng cáo 1',
                'image' => 'advertisements/April2023/B6hVgUFnA4hqY2KMfCQe.jpeg',
                'location' => 'carousel_banner_right',
                'url' => '/',
                'status' => true
            ]);
            Advertisement::create([
                'name' => 'Quảng cáo 2',
                'image' => 'advertisements/April2023/jL6HHP2eerlqzHTg1gix.jpeg',
                'location' => 'carousel_banner_right',
                'url' => '/',
                'status' => true
            ]);
            Advertisement::create([
                'name' => 'Quảng cáo 3',
                'image' => 'advertisements/April2023/l5LpY3lfBFVrX2Npq6M0.jpeg',
                'location' => 'carousel_banner_right',
                'url' => '/',
                'status' => true
            ]);
            Advertisement::create([
                'name' => 'Quảng cáo 4',
                'image' => 'advertisements/April2023/LySpP2XAcMFoD6ISCrwH.jpeg',
                'location' => 'carousel_banner_right',
                'url' => '/',
                'status' => true
            ]);
            Advertisement::create([
                'name' => 'Quảng cáo 2',
                'image' => 'advertisements/April2023/zkRJxX8t2XablXZfEVxq.jpeg',
                'location' => 'banner_left',
                'url' => '/',
            ]);

            Advertisement::create([
                'name' => 'Quảng cáo 2',
                'image' => 'advertisements/April2023/2l7jgeW38zAbmSn6D7Qu.jpeg',
                'location' => 'banner_left',
                'url' => '/',
            ]);
        }
    }
}
