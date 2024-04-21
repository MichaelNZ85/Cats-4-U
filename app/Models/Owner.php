<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Carbon\Carbon;

/**
 * @property int $id
 * @property string $email
 * @property string $given_name
 * @property string $surname
 * @property string $phone_number
 * @property int $address_id
 * @property Carbon $created_at
 * @property Carbon $created_at
 */
class Owner extends Model
{
    use HasFactory;

    protected $guarded = [
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function address(): MorphOne
    {
        return $this->morphOne(Address::class, 'owner');
    }
}
