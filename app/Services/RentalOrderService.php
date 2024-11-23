<?php

namespace App\Services;

use App\Models\Cat;
use App\Models\RentalOrder;
use Carbon\Carbon;

class RentalOrderService
{
    public function getRentalOrdersForCat(Cat $cat)
    {
        return RentalOrder::where('cat_id', $cat->id)
            ->where('start_time', ">", Carbon::now())
            ->where('end_time', '<', Carbon::now()->addDays(5)->setTimeFromTimeString('23:59:59'))
            ->orderBy('start_time')
            ->get();
    }
}
