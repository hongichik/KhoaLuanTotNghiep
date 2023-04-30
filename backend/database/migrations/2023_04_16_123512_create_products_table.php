<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('main_image')->nullable();
            $table->string('images')->nullable();
            $table->integer('price')->nullable();
            $table->integer('discount')->nullable()->default(0);
            $table->integer('qty')->nullable()->default(0);
            $table->boolean('status')->nullable()->default(true);
            $table->integer('category_id')->unsigned()->nullable()->default(null);
            $table->foreign('category_id')->references('id')->on('categories');
            $table->integer('order')->nullable();
            $table->text('short_description')->nullable();
            $table->text('detail_description')->nullable();
            $table->text('detail')->nullable();
            $table->timestamps();            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
