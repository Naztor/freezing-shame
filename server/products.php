<?php

$products = array(
  array('artnr'=> 'a1', 'name' => 'Mjukisdjur', 'brand' => 'Fluffe', 'price' => 100),
  array('artnr'=> 'a2', 'name' => 'Nallebjörn', 'brand' => 'Miffo', 'price' => 120),
  array('artnr'=> 'a3', 'name' => 'Knätoffs', 'brand' => 'Mora', 'price' => 110),
  array('artnr'=> 'a4', 'name' => 'Filt', 'brand' => 'Mora', 'price' => 130),
  array('artnr'=> 'a5', 'name' => 'Vantar', 'brand' => 'Henkes', 'price' => 140),
  array('artnr'=> 'a6', 'name' => 'Mössa', 'brand' => 'Henkes', 'price' => 200)
);

$json = json_encode($products);

header('Content-type: application/json; charset: utf-8');
print($json);