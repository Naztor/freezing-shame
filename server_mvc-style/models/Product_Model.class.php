<?php

class Product_Model extends Base_Model{

  public function getProductList(){
    $statement = $this->db->prepare("SELECT * FROM products");
    $statement->execute(); // array('name' => $name)
    $result = $statement->fetchAll(PDO::FETCH_ASSOC);
    return $result;
  }

}