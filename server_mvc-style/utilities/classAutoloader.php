<?php

function class_autoloader($class) {
  $classDirs = explode(',', CLASS_DIRS); 
  foreach($classDirs as $dir){
    $path = trim($dir) . '/' . $class . '.class.php';
    if(file_exists($path)){
      include($path);
    }
  }
}

spl_autoload_register('class_autoloader');
