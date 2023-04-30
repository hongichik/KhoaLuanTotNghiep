<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition()
    {
        $images = [];
        for ($i = 0; $i < 3; $i++) {
            $images[] = '/products/April2023/vzqRk2huAlUXPLqbslKY.jpeg';
        }
        $array = [
            [
                'key' => 'Size',
                'value' => ['M','L','XL','XXL'],
            ],
            [
                'key' => 'Color',
                'value' => ['Back','Blue','Red'],
            ],
        ];
        $categoryIds = Category::pluck('id')->toArray();
        return [
            'title' => $this->faker->sentence,
            'slug' => $this->faker->unique()->slug,
            'main_image' => '/products/April2023/vzqRk2huAlUXPLqbslKY.jpeg',
            'images' => json_encode($images),
            'price' => $this->faker->numberBetween(1000, 100000),
            'qty' => $this->faker->numberBetween(1, 100),
            'category_id' => $this->faker->randomElement($categoryIds),
            'detail' => $this->faker->boolean ? json_encode($array) : null,
            'discount' => $this->faker->numberBetween(1, 100),
            'order' => $this->faker->numberBetween(1, 100),
            'short_description' => $this->faker->text(200),
            'detail_description' => $this->faker->paragraphs(rand(3, 6), true)
        ];
    }
}
