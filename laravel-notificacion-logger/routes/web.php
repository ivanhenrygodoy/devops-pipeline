<?php

use App\Http\Controllers\EmailController;
use App\Http\Controllers\logs\LogController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Rutas de la API Laravel-notificacion-logger
Route::middleware('api')->group(function () {
    Route::post('/logs', [LogController::class, 'store']);
    Route::post('/send-email', [EmailController::class, 'sendNotification']);
});
