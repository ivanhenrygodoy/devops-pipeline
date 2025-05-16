<?php

namespace App\Models\mongo;

use MongoDB\Laravel\Eloquent\Model;

class ErrorLog extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'logs_error'; 
    protected $guarded = [];    

  
}
