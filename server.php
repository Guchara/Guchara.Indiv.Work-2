<?php

require_once 'config.php';

$inp_ProductName = $_POST['ProductName_'];
$inp_ProductNumber = $_POST['ProductNumber_'];
$inp_ProductQuantity = $_POST['ProductQuantity_'];
$inp_ProductImage = $_POST['ProductImage_'];


if($inp_ProductNumber){
    echo json_encode($inp_ProductNumber) ;
    
}

$conn = mysqli_connect(SERVERNAME, USERNAME, PASSWORD, DBNAME);

$selectStar;
if($selectStar = $_POST['select_']){

  $sql = "SELECT * FROM data";
  $result = mysqli_query($conn, $sql);

  $mass = array();

  if (mysqli_num_rows($result) > 0) {
      // output data of each row
      while($row = mysqli_fetch_assoc($result)) {
          $mass[] = $row;
      }
  } else {
      echo "0 results";
  }

  echo json_encode($mass);
  if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
  }
}




?>