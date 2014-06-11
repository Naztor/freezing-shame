<?php

class Product_Controller extends Base_Controller{

  private function getModel(){
    if(!$this->model){
      $this->model = new Product_Model($this->db);
    }
    return $this->model;
  }

  protected function defaultMethod(){
    return $this->getlist();
  }

  protected function getlist(){
    $model = $this->getModel();
    $this->response->add('products', $model->getProductList());
  } 


}