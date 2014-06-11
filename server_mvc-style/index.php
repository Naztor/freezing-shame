<?php
// application base
define('BASE_PATH', '/wupu/angular-gear-site/server/');

// db config
define('DB_HOST','localhost');
define('DB_DB','angular-gear-site');
define('DB_USER','root');
define('DB_PASS','bb5825');

// class autoloader
define('CLASS_DIRS', 'utilities, models, controllers');
include('utilities/classAutoloader.php');

$request = new Request;
$response = new Response($request->format);
$view = new View;
$db = new Db;

if($request->controller && class_exists($request->controller)){
  $pageObj = new $request->controller($request, $view, $response, $db->getConnection());
}else{
  header("HTTP/1.0 404 Not Found");
  $response->add('message', 'Page <strong>' . $request->controller . '</strong> was not found. ');
}

$response->send();










