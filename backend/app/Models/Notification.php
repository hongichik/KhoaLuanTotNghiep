<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;
    protected $fillable = ['content', 'user_id', 'status', 'type'];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getNotification($request)
    {
        $perPage = $request['perPage'] ?? 15;

        $page = $request['page'] ?? 1;
        $query = $this->orderBy('id', 'DESC')->paginate($perPage, ['*'], 'page', $page);

        $notification = $query->items();
        $notificationStatus = $notification;
        foreach($notificationStatus as $item)
        {
            $notifi = $this->where('id',$item->id)->first();
            $notifi->update(['status' => 1]);
        }

        $sumPage = ceil($query->total() / $query->perPage());
        $previousPage = $query->currentPage() - 1;
        if ($query->currentPage() == $sumPage) {
            $nextPage = 0;
        } else {
            $nextPage = $query->currentPage() + 1;
        }

        $from = ($query->currentPage() - 1) * $query->perPage();
        if ($from <= 0)
            $from = 1;
        $to = $from + $query->perPage() - 1;
        if ($to > $query->total())
            $to = $query->total();
        // Thêm thông tin phân trang
        $pagination = [
            'total' => $query->total(),
            'from' => $from,
            'to' => $to,
            'per_page' => $query->perPage(),
            'current_page' => $query->currentPage(),
            'last_page' => $query->lastPage(),
            'prev_page_url' => $previousPage,
            'next_page_url' => $nextPage,
        ];
        return [
            'data' => $notification,
            'pagination' => $pagination,
        ];
    }
}
