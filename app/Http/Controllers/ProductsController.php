<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    public function addProduct(Request $request)
    {
        $name = $request->get('name');
        $desc = $request->get('desc');
        $price = $request->get('price');
        $image = $request->get('image');
        $type = $request->get('type');
        $weight = $request->get('weight');

        $product = new Product();
        $product->title = $name;
        $product->description = $desc;
        $product->url_img = $image;
        $product->price = (int)$price;
        $product->mass = $weight;
        $product->type_product = $type;
        $product->save();

        return response()->json($product);
    }

    public function editProduct(Request $request){
        $id = $request->get('id');
        $product = Product::find($id);
        $product->name = 'sas';
        $product->save();
    }

    public function getProducts(): JsonResponse
    {
        return response()->json(Product::all());
    }
}

