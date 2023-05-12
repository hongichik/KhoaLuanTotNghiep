<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = ['content', 'user_id', 'product_id'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function get($id)
    {

        $comments =  $this->where('product_id',$id)->orderBy('id', 'DESC')->get();
        foreach($comments as $comment)
        {
            $comment->userName = $comment->user->name;
            $comment->userAvatar = $comment->user->avatar;
            unset($comment->user);
        }
        return $comments;
    }
}
