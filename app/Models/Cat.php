<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property string $name
 * @property string $breed
 * @property int $friendliness_level
 * @property string $suitable_for
 * @property string $description
 * @property bool $has_owner
 * @property int|null $owner_id
 */
class Cat extends Model
{
    use HasFactory;

    protected $guarded = [
        'created_at',
        'updated_at'
    ];

    public function owner(): BelongsTo
    {
        return $this->belongsTo(Owner::class);
    }

    public function rentalOrders(): HasMany
    {
        return $this->hasMany(RentalOrder::class);
    }
}
