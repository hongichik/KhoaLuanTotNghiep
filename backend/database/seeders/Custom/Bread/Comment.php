<?php
$dataType = $this->dataType('slug', 'comments');
if (!$dataType->exists) {
    $dataType->fill([
        'name'                  => 'comments',
        'display_name_singular' => 'Bình luận',
        'display_name_plural'   => 'Bình luận',
        'icon'                  => 'voyager-chat',
        'model_name'            => 'App\Models\Comment',
        'controller'            => '',
        'generate_permissions'  => 1,
        'description'           => '',
    ])->save();
}

$dataType = TCG\Voyager\Models\DataType::where('slug', 'comments')->firstOrFail();

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


$dataRow = $this->dataRow($dataType, 'product_id');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'text',
        'display_name' => 'product_id',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 0,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 2,
    ])->save();
}
$dataRow = $this->dataRow($dataType, 'user_id');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'text',
        'display_name' => 'user_id',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 0,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 2,
    ])->save();
}

$dataRow = $this->dataRow($dataType, 'comment_belongsto_user_relationship');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'relationship',
        'display_name' => 'users',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 0,
        'add'          => 1,
        'delete'       => 0,
        'order'        => 9,
        'details'      => [
            'model'         => 'App\Models\User',
            'table'         => 'users',
            'type'          => 'belongsTo',
            'column'        => 'user_id',
            'key'           => 'id',
            'label'         => 'name',
            "pivot_table"=>"pays",
            "pivot" => 0,
            'taggable'      => null,
        ],
    ])->save();
}

$dataRow = $this->dataRow($dataType, 'comment_belongsto_product_relationship');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'relationship',
        'display_name' => 'products',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 0,
        'add'          => 1,
        'delete'       => 0,
        'order'        => 9,
        'details'      => [
            'model'         => 'App\Models\Product',
            'table'         => 'products',
            'type'          => 'belongsTo',
            'column'        => 'product_id',
            'key'           => 'id',
            'label'         => 'title',
            "pivot_table"=>"pays",
            "pivot" => 0,
            'taggable'      => null,
        ],
    ])->save();
}
$dataRow = $this->dataRow($dataType, 'content');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'text',
        'display_name' => 'bình luận',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 0,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 2,
    ])->save();
}
