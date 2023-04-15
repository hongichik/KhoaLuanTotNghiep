<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\auth\LoginRequest;
use App\Http\Requests\API\auth\RegisterRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function checkUser(Request $request)
    {
        return $request->user();
    }
    public function login(LoginRequest $request)
    {
        // // Kiểm tra xem thư mục certs có tồn tại hay không
        // if (!Storage::exists('certs')) {
        //     // Nếu không tồn tại thì tạo mới
        //     Storage::makeDirectory('certs');
        // }

        // // Kiểm tra xem file iv.key đã tồn tại hay chưa
        // if (!Storage::exists('certs/iv.key')) {
        //     // Tạo một initialization vector ngẫu nhiên
        //     $iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length('aes-256-cbc'));
        //     // Lưu initialization vector vào file iv.key
        //     Storage::put('certs/iv.key', $iv);
        // } else {
        //     // Đọc initialization vector từ file iv.key
        //     $iv = Storage::get('certs/iv.key');
        // }


        // $credentials = $request->only('email', 'password');
        // $token = auth('api')->attempt($credentials);
        // $key = '123456789'; // Chuỗi ký tự key

        // $encrypted = openssl_encrypt($token, 'aes-256-cbc', $key, 0, $iv); // Mã hóa token

        // // Đọc initialization vector từ file iv.key
        // $iv = file_get_contents(Storage::path('certs/iv.key'));

        // $decrypted = openssl_decrypt($encrypted, 'aes-256-cbc', $key, 0, $iv); // Giải mã token

        // if ($token == $decrypted) {
        //     return response()->json([
        //         '1' => $token,
        //         '2' => $encrypted,
        //         '3' => $decrypted,
        //     ], 401);
        // } else {
        //     dd("loi");
        // }
        // if (!$token) {
        //     return response()->json([
        //         'status' => 'error',
        //         'message' => 'Unauthorized',
        //     ], 401);
        // }

        $credentials = $request->only('email', 'password');
        $token = auth('api')->attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = auth('api')->user();
        return response()->json([
            'status' => 'success',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function register(RegisterRequest $request)
    {
        if ($request->hasFile('avatar')) {
            if ($request->file('avatar')->isValid()) {
                $date = date('Y-m-d');
                $path = $request->file('avatar')->store('public/avatar/' . $date);
                $url = substr(Storage::url($path), strlen('/storage/'));

                $user = User::create([
                    'name' => $request->name,
                    'email' => $request->email,
                    'password' => Hash::make($request->password),
                    'avatar'    => $url,
                    'phone'     => $request->phone,
                    'address'   => $request->address
                ]);

                $credentials = $request->only('email', 'password');
                $token = auth('api')->attempt($credentials);
                return response()->json([
                    'status' => 'success',
                    'message' => 'User created successfully',
                    'user' => $user,
                    'authorisation' => [
                        'token' => $token,
                        'type' => 'bearer',
                    ]
                ]);
            } else {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Invalid file',
                ], 400);
            }
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'File not found',
            ], 400);
        }
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }
}
