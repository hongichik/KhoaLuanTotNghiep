<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MenuCoontroller extends Controller
{
    public function index()
    {
        return  menu('User_header','_json');
    }
}
