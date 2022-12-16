<?php
  $country = $_REQUEST['country'];
  $language = $_REQUEST['lang'];

  //feed data entered from the get array to cURl to submit a url request
  ini_set('display_errors', 'On'); //Sets display_errors on so errors are displayed to the screen
  error_reporting(E_ALL); //Shows all errors

  $curl = curl_init(); //Creating and initialising curl (a data type) resource
  $url = "http://api.geonames.org/countryInfoJSON?formatted=true&lang=" . $language . "&country=" . $country . "&username=qltzj&style=full";
  curl_setopt($curl, CURLOPT_URL, $url);
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

  $result = curl_exec($curl);

  curl_close($curl);
  $decode = json_decode($result, true);

  $output = $decode['geonames'];

  header('Content-type: application/json; charset=UTF-8;');
  echo json_encode($output);

?>
