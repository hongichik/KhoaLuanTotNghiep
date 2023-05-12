<?php
$dataType = $this->dataType('slug', 'pays');
if (!$dataType->exists) {
    $dataType->fill([
        'name'                  => 'pays',
        'display_name_singular' => 'Đặt hàng',
        'display_name_plural'   => 'Đặt hàng',
        'icon'                  => 'voyager-shop',
        'model_name'            => 'App\Models\Pay',
        'controller'            => 'App\Http\Controllers\voyager\Controllers\Custom\PayController',
        'generate_permissions'  => 1,
        'description'           => '',
    ])->save();
}

$dataType = TCG\Voyager\Models\DataType::where('slug', 'pays')->firstOrFail();

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

$dataRow = $this->dataRow($dataType, 'count');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'number',
        'display_name' => 'count',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 2,
    ])->save();
}

$dataRow = $this->dataRow($dataType, 'address');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'text',
        'display_name' => 'address',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 2,
    ])->save();
}

$dataRow = $this->dataRow($dataType, 'detail');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'text',
        'display_name' => 'detail',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 2,
    ])->save();
}
$dataRow = $this->dataRow($dataType, 'phone');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'text',
        'display_name' => 'phone',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 2,
    ])->save();
}

$dataRow = $this->dataRow($dataType, 'info_pay');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'text',
        'display_name' => 'info_pay',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 2,
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
        'edit'         => 1,
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
        'edit'         => 1,
        'add'          => 1,
        'delete'       => 1,
        'order'        => 2,
    ])->save();
}

$dataRow = $this->dataRow($dataType, 'pay_belongsto_user_relationship');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'relationship',
        'display_name' => 'users',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
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

$dataRow = $this->dataRow($dataType, 'pay_belongsto_product_relationship');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type'         => 'relationship',
        'display_name' => 'products',
        'required'     => 1,
        'browse'       => 1,
        'read'         => 1,
        'edit'         => 1,
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

$dataRow = $this->dataRow($dataType, 'status');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type' => 'radio_btn',
        'display_name' => 'Trạng thái',
        'required' => 1,
        'browse' => 1,
        'read' => 1,
        'edit' => 1,
        'add' => 1,
        'delete' => 0,
        'details'      => [
            "default" => "0",
            "options"=>[
                "0" => "Đang chờ duyệt",
                "1" => "Đã duyệt",
                "2" => "Đang giao hàng",
                "3" => "Giao thành công",
                "4" => "Đơn hàng bị hủy"
            ]

        ],
        'order' => 10,
    ])->save();
}
$dataRow = $this->dataRow($dataType, 'type');
if (!$dataRow->exists) {
    $dataRow->fill([
        'type' => 'checkbox',
        'display_name' => 'Loại thanh toán',
        'required' => 1,
        'browse' => 1,
        'read' => 1,
        'edit' => 1,
        'add' => 1,
        'delete' => 0,
        'details'      => [
            "on" => "TT ATM",
            "off" => "TT khi giao hàng",
            "checked" => true
        ],
        'order' => 10,
    ])->save();
}
