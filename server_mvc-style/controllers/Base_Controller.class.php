<?php

abstract class Base_Controller{

  protected $view;
  protected $response;
  protected $title;
  protected $text;
  protected $model;
  public $db;

  function __construct(Request $request, View $view, Response $response, $db){
    $this->db = $db;
    $this->view = $view;
    $this->response = $response;    
    $this->routeToMethod($request->params);
  }

  protected function routeToMethod($params){
    if(count($params)>0){
      $method = array_shift($params);
    }else{
      $method = 'defaultMethod';
    }
    if(method_exists($this, $method)){
      $this->$method($params);
    }
  }

}





