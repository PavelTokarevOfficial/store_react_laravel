<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string $title
 * @property string $description
 * @property int $price
 * @property string $url_img
 * @property string $type_product
 * @property string $mass
 */
class Product extends Model
{
    use HasFactory;

    protected $table = "products";
    protected $primaryKey = "id_products";
    protected $fillable = ['title'];
    public $timestamps = false;
}
