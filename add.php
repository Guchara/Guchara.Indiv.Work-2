<?php
require_once 'config.php';


$inp_ProductName = $_POST['ProductName_'];
$inp_ProductNumber = $_POST['ProductNumber_'];
$inp_ProductQuantity = $_POST['ProductQuantity_'];
$inp_ProductImage = $_POST['ProductImage_'];

$arr = array(
    'name' => $inp_ProductName,
    'number' => $inp_ProductNumber,
    'quantity' => $inp_ProductQuantity,
    'image'=> $inp_ProductImage
);
    


$conn = mysqli_connect(SERVERNAME, USERNAME, PASSWORD, DBNAME);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO data (name, number, kol,img)
VALUES ('".$arr['name']."', '".$arr['number']."',".$arr['quantity'].",'".$arr['image']."')";

if ($conn->query($sql) === TRUE) {
    echo json_encode($arr) ;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


?>