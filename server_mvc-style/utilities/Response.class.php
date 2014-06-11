<?php

class Response{

  private $content = array();
  private $format;

  function __construct($format){
    $this->format = $format;
  }

  public function add($key, $val){
    $this->content[$key] = $val; 
  }

  public function send(){
    switch($this->format){
      case 'html':
        $this->sendHtml();
      break;
      case 'json':
        $this->sendJson();
      break;
      case 'xml':
        $this->sendXml();
      break;
    }
  }

  private function sendHtml(){
    header('Content-type: text/html; charset=utf-8');
    print(implode("\n", $this->content));
  }

  private function sendJson(){
    header('Content-type: application/json; charset=utf-8');
    $json = json_encode($this->content);
    print($json);
  }

  private function sendXml(){
    header('Content-type: text/xml; charset=utf-8');
    print('Not implemented yet');
  }


}



