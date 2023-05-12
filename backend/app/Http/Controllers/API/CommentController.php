<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class CommentController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'content' => 'required',
            'product_id' => ['required', Rule::exists('products', 'id')]
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Thông tin không hợp lệ.',
                'errors' => $validator->errors()
            ], 422);
        }

        $comment = new Comment();
        $comment->user_id = Auth::user()->id;
        $comment->product_id = $request->product_id;
        $comment->content = $request->content;
        $comment->save();
        $comment->userName = Auth::user()->name;
        $comment->userAvatar = Auth::user()->avatar;
        return $comment;
    }

    public function index($id)
    {
        $comment = new Comment();
        return $comment->get($id);
    }
}
