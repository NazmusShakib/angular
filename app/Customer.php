<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table ='customers';
    protected $fillable = array('id','customerName','customerEmail','customerContact','customerAddress');
}
