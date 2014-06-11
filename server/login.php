<?php

// php://input

$json = file_get_contents('php://input');

// packa upp och tvinga associativ array
$data = json_decode($json, true);

$response = array();

// jämför sparat användarnamn och lösenord mellan session och databas, om det går bra, skicka auth true

if($data['username'] == 'Ben' && $data['password'] == '12345'){
  $response['authenticated'] = true;
  $response['username'] = $data['username'];
}else{
  $response['authenticated'] = false;
}

$json = json_encode($response);

header('Content-type: application/json; charset=utf-8');
print($json);










