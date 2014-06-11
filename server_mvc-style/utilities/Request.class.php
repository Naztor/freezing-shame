<?php

class Request{

  public $uri; // $_SERVER['REQUEST_URI']; - base path
  public $tokens; // med '/' splittat uri 
  public $controller; // den första token
  public $params; // resterande tokens
  public $format; // sätta statiskt till 'json'

  function __construct(){
    $this->uri = $this->getUri();
    $this->tokens = $this->getTokens($this->uri);
    $this->controller = $this->getController($this->tokens);
    $this->params = $this->getParams($this->tokens);
    $this->format = 'json';
  }

  private function getUri(){
    $uri = str_replace(BASE_PATH, '', $_SERVER['REQUEST_URI']);
    return $uri;
  }

  private function getTokens($uri){
    $uri = rtrim($uri,'/-');
    $tokens = explode('/', $uri);
    return $tokens;
  }

  private function getController($tokens){
    if(isset($tokens[0]) && $tokens[0] !== ''){
      return ucfirst(strtolower($tokens[0]) . '_Controller');
    }
    return null;
  }

  private function getParams($tokens){
    if(isset($tokens[1]) && $tokens[1] !== ''){
      return array_splice($tokens, 1);
    }
    return array();
  }


}