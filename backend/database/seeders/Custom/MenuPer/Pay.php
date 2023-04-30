<?php
//Menu Item
$menu = TCG\Voyager\Models\Menu::where('name', 'admin')->firstOrFail();
$menuItem = TCG\Voyager\Models\MenuItem::firstOrNew([
    'menu_id' => $menu->id,
    'title'   => "Đặt hàng",
    'url'     => '',
    'route'   => 'voyager.pays.index',
]);
if (!$menuItem->exists) {
    $menuItem->fill([
        'target'     => '_self',
        'icon_class' => 'voyager-shop',
        'color'      => null,
        'parent_id'  => null,
        'order'      => 2,
    ])->save();
}

//Permissions
TCG\Voyager\Models\Permission::generateFor('pays');
