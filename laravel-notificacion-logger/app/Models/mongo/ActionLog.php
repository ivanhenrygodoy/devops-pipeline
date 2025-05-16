<?php

namespace App\Models\mongo;

use MongoDB\Laravel\Eloquent\Model;

class ActionLog extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'logs_action'; 
    protected $guarded = [];    

  
}