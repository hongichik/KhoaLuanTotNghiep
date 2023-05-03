<?php

// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
// header('Access-Control-Allow-Headers: Content-Type, X-Requested-With, Authorization');

use App\Http\Controllers\API\AdvertisementController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CartController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\MenuCoontroller;
use App\Http\Controllers\API\PayController;
use App\Http\Controllers\API\ProductController;
use Illuminate\Support\Facades\Hash;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware(['ForceJson'])->group(function () {
    Route::middleware(['auth:sanctum'])->group(function () {
        Route::post('/checkUser', [AuthController::class, 'checkUser']);
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::post('/refresh', [AuthController::class, 'refresh']);

        Route::prefix('/cart')->group(function () {
            Route::post('/{id}', [CartController::class, 'addCart']);
            Route::get('/', [CartController::class, 'getCart']);
            Route::delete('/{id}', [CartController::class, 'deleteCart']);
        });
        Route::prefix('/pay')->group(function () {
            Route::post('/create', [PayController::class, 'create']);
        });
    });
    Route::controller(AuthController::class)->group(function () {
        Route::post('login', 'login');
        Route::post('register', 'register');
    });

    Route::post('/menu', [MenuCoontroller::class, 'index']);

    Route::post('/advertisement/{name}', [AdvertisementController::class, 'index']);

    Route::post('/categories', [CategoryController::class, 'index']);

    Route::prefix('/product')->group(function () {
        Route::post('/discount', [ProductController::class, 'discount']);
        Route::get('/detailProduct/{slug}', [ProductController::class, 'detailProduct']);
        Route::post('', [ProductController::class, 'index']);
    });


});

Route::get('/test', function ()
{
    return Hash::make("U2FsdGVkX1/DO44Jhmoub0U0c2wOwcrK8U09pGIxPFNaZHfwdjH1PymOZRlV8vcxaqBV0mZNFPXofxXkJ+xIZQ==");
});
