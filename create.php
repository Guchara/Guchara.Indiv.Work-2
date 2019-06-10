<?php

require_once 'config.php';

$name = $_POST['name_'];
$number = $_POST['number_'];
$kol = $_POST['kol_'];
$img = $_POST['img_'];

// echo json_encode($_POST);
$conn = mysqli_connect(SERVERNAME, USERNAME, PASSWORD, DBNAME);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$mass = [];
$sql2;

$sql = "SELECT * FROM data";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
        $mass[] = $row;
    }
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    
    $sql2 = "UPDATE data SET name='".$name."',number = '".$number."',kol = '.$kol.',img = '".$img"' WHERE id=2 ";
    
    if ($conn->query($sql2) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }
    

} else {
    echo "0 results";
}
echo '<pre>';
print_r($mass);
echo '<pre>';
$conn->close();

?>
