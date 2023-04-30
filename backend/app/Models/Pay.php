<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pay extends Model
{
    use HasFactory;
    protected $translatable = ['user_id','count','status','product_id','detail','address','type','phone','info_pay'];
}
