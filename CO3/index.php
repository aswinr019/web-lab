
<?php

if($_SERVER['REQUEST_METHOD'] =='POST'){


$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];


$servername = "localhost";
$username = "root";
$password = "";
$database = "";

$connection = mysqli_connect($servername,$username,$password,$database);


if(!$connection){
    die("Failed to connect : ".mysqli_connect_error());
}
else {
    echo "Connected succesfully";
}


$sql = "INSERT INTO `dbname` (`fname`,`lname`,`email`) VALUES ('$fname','$lname','$email') ";

$result = mysqli_query($connection,$sql);

if($result){
    echo "Records was inserted succesfully";
}
else {
    echo "Unable to insert records ".mysqli_error($connection);
}



}
?>