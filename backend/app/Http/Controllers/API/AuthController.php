<?php

namespace App\Http\Controllers\API;

use App\Common\Block;
use App\Http\Controllers\Controller;
use App\Http\Requests\API\auth\LoginRequest;
use App\Http\Requests\API\auth\RegisterRequest;
use App\Models\Blockchain;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AuthController extends Controller
{


    public function checkUser(Request $request)
    {
        return $request->user();
    }
    public function login(LoginRequest $request)
    {
        // $credentials = $request->only('email', 'password');
        // $token = auth('api')->attempt($credentials);
        // if (!$token) {
        //     return response()->json([
        //         'status' => 'error',
        //         'message' => 'Unauthorized',
        //     ], 401);
        // }

        // $user = auth('api')->user();
        // return response()->json([
        //     'status' => 'success',
        //     'user' => $user,
        //     'authorisation' => [
        //         'token' => $token,
        //         'type' => 'bearer',
        //     ]
        // ]);


        try {

            $credentials = request(['email', 'password']);

            if (!Auth::attempt($credentials)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Unauthorized',
                ], 401);
            }

            $user = User::where('email', $request->email)->first();

            if (!Hash::check($request->password, $user->password, [])) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Unauthorized',
                ], 401);
            }

            $tokenResult = $user->createToken('authToken')->plainTextToken;
            return response()->json([
                'status' => 'success',
                'user' => $user,
                'authorisation' => [
                    'token' => $tokenResult,
                    'type' => 'bearer',
                ]
            ]);
        } catch (\Exception $error) {
            return response()->json([
                'status' => 'error',
                'message' => $error,
            ], 401);
        }
    }

    public function register(RegisterRequest $request)
    {
        if ($request->hasFile('avatar')) {
            if ($request->file('avatar')->isValid()) {
                $date = date('Y-m-d');
                $path = $request->file('avatar')->store('public/avatar/' . $date);
                $url = substr(Storage::url($path), strlen('/storage/'));

                $block1 = new Block("Bạn đã tạo tài khoản");
                $block1->previousHash = 1;
                $block1->mineBlock();
                $blockChain = new Blockchain();
                $last_block = $blockChain->newBlock($block1);
                $user = User::create([
                    'name' => $request->name,
                    'email' => $request->email,
                    'password' => Hash::make($request->password),
                    'avatar'    => $url,
                    'phone'     => $request->phone,
                    'address'   => $request->address,
                    'last_block'     =>  $last_block,
                ]);

                $tokenResult = $user->createToken('authToken')->plainTextToken;
                return response()->json([
                    'status' => 'success',
                    'message' => 'User created successfully',
                    'user' => $user,
                    'authorisation' => [
                        'token' => $tokenResult,
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

    public function logout(Request $request)
    {
        if (!$request->bearerToken()) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $request->user()->currentAccessToken()->delete();

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
