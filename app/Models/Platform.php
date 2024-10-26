<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Platform extends Model
{
    use HasFactory, hasUuids;

    protected $fillable = [
        'name',
        'display_name',
        'color'
    ];
}
