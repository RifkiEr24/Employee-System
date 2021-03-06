<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    protected $primaryKey = 'id_akun';

    public function user() 
    { 
        return $this->belongsTo('App\User','id_akun'); 
    }   
    public function document()
    {
        return $this->hasMany('App\Document');
    }
    protected $fillable = [
        'id_akun','id_matpel','status','tanggal_bergabung','tanggal_pensiun','tgl_lahir', 'jen_kel', 'alamat','no_telp','is_mengajar'
    ];

}
