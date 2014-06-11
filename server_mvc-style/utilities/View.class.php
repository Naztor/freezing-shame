<?php

class View{

  public function dressTemplate($templateName, array $data = array()){
    // takes first array level of data and generates variables with that key name
    extract($data);
    // capture all templating output using a buffer
    ob_start();
    require('templates/' . $templateName . '.tpl.php');
    $htmlString = ob_get_clean();
    return $htmlString;
  }

}