<?php

class Base_Model{

  protected $db;

  function __construct($db){
    $this->db = $db;
  }

  public function get($prop){
    return $this->$prop;
  }

}