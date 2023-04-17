<?php

$dataType = $this->dataType('slug', 'products');
if (!$dataType->exists) {
    $dataType->fill([
        'name'                  => 'products',
        'display_name_singular' => 'products',
        'display_name_plural'   => 'products',
        'icon'                  => 'voyager-archive',
        'model_name'            => 'App\Models\Product',
        'controller'            => 'App\Http\Controllers\voyager\Controllers\Custom\ProductController',
        'generate_permissions'  => 1,
        'description'           => '',
    ])->save();
}