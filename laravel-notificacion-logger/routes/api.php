<?php

use App\Http\Controllers\EmailController;
use App\Http\Controllers\logs\LogController;
use Illuminate\Support\Facades\Route;

Route::post('/logs', [LogController::class, 'store']);
Route::post('/send-email', [EmailController::class, 'sendNotification']);


