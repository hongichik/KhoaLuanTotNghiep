<?php
//Menu Item
$menu = TCG\Voyager\Models\Menu::where('name', 'admin')->firstOrFail();
$menuItem = TCG\Voyager\Models\MenuItem::firstOrNew([
    'menu_id' => $menu->id,
    'title'   => "Banner quảng cáo",
    'url'     => '',
    'route'   => 'voyager.advertisements.index',
]);
if (!$menuItem->exists) {
    $menuItem->fill([
        'target'     => '_self',
        'icon_class' => 'voyager-buy',
        'color'      => null,
        'parent_id'  => null,
        'order'      => 2,
    ])->save();
}

//Permissions
TCG\Voyager\Models\Permission::generateFor('advertisements');
