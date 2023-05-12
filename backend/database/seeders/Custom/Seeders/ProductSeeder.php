<?php

namespace Database\Seeders\Custom\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $file = base_path('database/seeders/sql/products.sql');

        if (file_exists($file)) {
            $sql = file_get_contents($file);
            DB::unprepared($sql);
        } else {
            Product::factory()->count(50)->create();
        }


    }
}
