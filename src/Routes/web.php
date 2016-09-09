<?php
/**
 * Package routing file specifies all of this package routes.
 */

use Illuminate\Support\Facades\View;
use SmthDiff\Azurite\Models\Menu;

Route::group([
    'namespace'  => 'SmthDiff\Azurite\Controllers',
    'middleware' => ['web', 'auth']
], function () {
    Route::get(config('azurite.homeRoute'), 'AzuriteController@index');
});