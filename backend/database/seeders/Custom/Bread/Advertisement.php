<?php

// Data Type
$dataType = $this->dataType('slug', 'advertisements');
if (!$dataType->exists) {
    $dataType->fill([
        'name'                  => 'advertisements',
        'display_name_singular' => 'Advertisement',
        'display_name_plural'   => 'Advertisements',
        'icon'                  => 'voyager-dollar',
        'model_name'            => 'App\Models\Advertisement',
        'controller'            => '',
        'generate_permissions'  => 1,
        'description'           => '',
    ])->save();
}

// Data Rows
$dataType = TCG\Voyager\Models\DataType::where('slug', 'advertisements')->firstOrFail();

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

$dataRow = $this->dataRow($dataType, 'name');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'text',
        'display_name' => 'Name',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 2,
    ])->save();
}

$dataRow = $this->dataRow($dataType, 'image');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'image',
        'display_name' => 'Image',
        'required'     => 0,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 3,
    ])->save();
}
$dataRow = $this->dataRow($dataType, 'location');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'select_dropdown',
        'display_name' => 'vị trí',
        'required'     => 0,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 4,
        'details'      => [
            'default'      => 'carousel_banner_right',
            'options'      => [
                'carousel_banner_right' => 'carousel banner right',
                'banner_left'           => 'banner left',
                'seo_bettween'          => 'seo bettween',
                'carousel_bottom'       => 'carousel bottom',
            ],
        ],
    ])->save();
}

$dataRow = $this->dataRow($dataType, 'url');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'text',
        'display_name' => 'Url',
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
        'display_name' => 'Vị trí',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 6,
    ])->save();
}
$dataRow = $this->dataRow($dataType, 'status');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'checkbox',
        'display_name' => 'Trạng thái',
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 7,
        'details'      => [
            "on" => "Hiện",
            "off" => "Ẩn",
            "checked" => true
        ],
    ])->save();
}
