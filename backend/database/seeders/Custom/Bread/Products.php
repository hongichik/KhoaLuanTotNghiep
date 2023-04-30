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

// Lấy data type 'products'
$dataType = TCG\Voyager\Models\DataType::where('slug', 'products')->firstOrFail();

// Thêm data row cho 'id'
$dataRow = $this->dataRow($dataType, 'id');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'number',
        'display_name' => 'ID',
        'required'     => 1,
        'browse'       => 0,
        'read'         => 0,
        'edit'         => 0,
        'add'          => 0,
        'delete'       => 0,
        'order'        => 1,
    ])->save();
}

// Thêm data row cho 'title'
$dataRow = $this->dataRow($dataType, 'title');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'text',
        'display_name' => 'Title',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 2,
    ])->save();
}

// Thêm data row cho 'slug'
$dataRow = $this->dataRow($dataType, 'slug');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'text',
        'display_name' => 'Slug',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 3,
        'details'      => [
            'slugify' => [
                'origin' => 'title',
                'forceUpdate' => true
            ]
        ]
    ])->save();
}
// Thêm data row cho 'main images'
$dataRow = $this->dataRow($dataType, 'main_image');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'image',
        'display_name' => 'Main images',
        'required'     => 0,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 4,
    ])->save();
}

// Thêm data row cho 'images'
$dataRow = $this->dataRow($dataType, 'images');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'multiple_images',
        'display_name' => 'Images',
        'required'     => 0,
        'browse'       => 0,
        'read'         => 1,
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 4,
    ])->save();
}


// Thêm data row cho 'price'
$dataRow = $this->dataRow($dataType, 'price');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'number',
        'display_name' => 'Price',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 5,
    ])->save();
}
$dataRow = $this->dataRow($dataType, 'qty');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'number',
        'display_name' => 'Qty',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 5,
    ])->save();
}


$dataRow = $this->dataRow($dataType, 'discount');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'number',
        'display_name' => 'discount',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 5,
    ])->save();
}

$dataRow = $this->dataRow($dataType, 'order');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'number',
        'display_name' => 'order',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 5,
    ])->save();
}


$dataRow = $this->dataRow($dataType, 'product_belongsto_category_relationship');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'relationship',
        'display_name' => 'categories',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 0,
        'order'        => 9,
        'details'      => [
            'model'         => 'App\Models\Category',
            'table'         => 'categories',
            'type'          => 'belongsTo',
            'column'        => 'category_id',
            'key'           => 'id',
            'label'         => 'name',
            "pivot_table"=>"advertisements",
            "pivot" => 0,
            'taggable'      => null,
        ],
    ])->save();
}

$dataRow = $this->dataRow($dataType, 'description');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'          => 'rich_text_box',
        'display_name'  => 'Description',
        'required'      => 0,
        'browse'        => 0,
        'read'          => 1,
        'edit'          => 1,
        'add'           => 1,
        'delete'        => 0,
        'order'         => 8,
    ])->save();
}

$dataRow = $this->dataRow($dataType, 'detail');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'          => 'text_area',
        'display_name'  => 'Detail',
        'required'      => 0,
        'browse'        => 0,
        'read'          => 1,
        'edit'          => 1,
        'add'           => 1,
        'delete'        => 0,
        'order'         => 9,
        'details'       => [
            'default' => json_encode([
                [
                    "key" => "Size",
                    "value" => "M"
                ],
                [
                    "key" => "Coler",
                    "value" => "Back"
                ],
            ]),
        ],
    ])->save();
}



$dataRow = $this->dataRow($dataType, 'status');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type' => 'checkbox',
        'display_name' => 'Status',
        'required' => 1,
        'browse' => 1,
        'read' => 1,
        'edit' => 1,
        'add' => 1,
        'delete' => 0,
        'details'      => [
            "on" => "Hiện",
            "off" => "Ẩn",
            "checked" => true
        ],
        'order' => 10,
    ])->save();
}
