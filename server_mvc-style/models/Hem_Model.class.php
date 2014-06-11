<?php

class Hem_Model extends Base_Model{

    public function getPage($name){
      $statement = $this->db->prepare("SELECT * FROM pages WHERE name = :name");
      $statement->execute(array('name' => $name));
      $result = $statement->fetch(PDO::FETCH_ASSOC);
      return $result;
    }
    
}