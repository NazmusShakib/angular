<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('customer');
});

Route::post('auth', 'UserController@checkAuth');
Route::resource('users', 'UserController');
Route::resource('gallery', 'GalleryController');

Route::post('file-upload', function (\Illuminate\Http\Request $request) {
    return response($request->all(), 201);
});

Route::resource('customer', 'CustomerController');

Route::resource('items', 'ItemController');
/*Route::group(['middleware' => ['web']], function () {
    Route::resource('items', 'ItemController');
});
// Templates
Route::group(array('prefix'=>'/templates/'),function(){
    Route::get('{template}', array( function($template)
    {
        $template = str_replace(".html","",$template);
        View::addExtension('html','php');
        return View::make('templates.'.$template);
    }));
});*/
