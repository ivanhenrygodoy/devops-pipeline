<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Facade;
use Illuminate\Support\Facades\App;

/**
 * Laravel - A PHP Framework For Web Artisans
 *
 * @package  Laravel
 * @author   Taylor Otwell <taylor@laravel.com>
 */

$startTime = microtime(true);

/**
 * Error Reporting
 */
error_reporting(E_ALL);

/**
 * Define The Application Path
 *
 * Get the full path to the application.
 */
$appPath = __DIR__.'/../';

/**
 * Require The Composer Autoload File
 */
require $appPath.'vendor/autoload.php';

/**
 * Turn On The Lights
 */
$app = require_once $appPath.'bootstrap/app.php';

/**
 * Run The Application
 */
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

$response->send();

$kernel->terminate($request, $response);
