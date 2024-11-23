<?php

namespace App\Services;

use App\Models\Cat;
use Carbon\Carbon;

class CatService
{
    public function getAvailableCats()
    {
        return Cat::whereDoesntHave('rentalOrders', function ($query) {

            return $query->where('start_time', '<=', Carbon::now()->subHour())
                ->where('end_time', '>=', Carbon::now());
        })->get();
    }
}
