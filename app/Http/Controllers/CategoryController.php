<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function missingdata(Request $request){
        $iduser = $request->validate([
            'iduser' => ['required', 'integer'],
        ]);
        $categorycount= DB::table('categories')->count();
        $integers = range(1, $categorycount);

    $document= [];
    for($x= 1; $x <= $categorycount; $x++){
        $data= DB::table('documents')->where('id_akun', $iduser)->where('id_category', $x)->get()->toArray();  
        array_push($document, $data);
    }
     
    return  json_encode($document);
    }

    public function search(Request $request)
	{
    $idcategory = $request->validate([
        'idcategory' => ['required', 'integer'],
    ]);
    $posts = DB::table('categories')->where('id_category',$idcategory)-> get();

    return response()->json($posts);
	}
}
