<?php
//Menu Item
$menu = TCG\Voyager\Models\Menu::where('name', 'admin')->firstOrFail();
$menuItem = TCG\Voyager\Models\MenuItem::firstOrNew([
    'menu_id' => $menu->id,
    'title'   => "Bình luận",
    'url'     => '',
    'route'   => 'voyager.comments.index',
]);
if (!$menuItem->exists) {
    $menuItem->fill([
        'target'     => '_self',
        'icon_class' => 'voyager-chat',
        'color'      => null,
        'parent_id'  => null,
        'order'      => 2,
    ])->save();
}

//Permissions
TCG\Voyager\Models\Permission::generateFor('comments');
