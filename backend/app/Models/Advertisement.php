<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Advertisement extends Model
{
    use HasFactory;

    // 'carousel_banner_right' => 'carousel banner right',
    // 'banner_left'           => 'banner left',
    // 'seo_bettween'          => 'seo bettween',
    // 'carousel_bottom'       => 'carousel bottom',
    protected $fillable = [
        'name',
        'image',
        'location',
        'url',
        'order',
        'status',
    ];
}
