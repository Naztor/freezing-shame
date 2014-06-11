<?php

$data = array(
  array('href' => 'home', 'text' => 'Hem'),
  array('href' => 'login', 'text' => 'Logga in'),
  array('href' => 'register', 'text' => 'Registrera eder'),
  array('href' => 'products', 'text' => 'Våra produkter')
);

$json = json_encode($data);

header('Content-type: application/json; charset: utf-8');
print($json);