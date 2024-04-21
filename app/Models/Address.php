<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

/**
 * @property int $id
 * @property int $owner_id
 * @property string $owner_type
 * @property string $address_line_1
 * @property string|null $address_line_2
 * @property string|null $suburb
 * @property string $city
 * @property string|null $state
 * @property string $zip
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class Address extends Model
{
    use HasFactory;

    protected $table = 'addresses';

    protected $guarded = ['created_at', 'updated_at'];

    public function owner(): MorphTo
    {
        return $this->morphTo();
    }
}
