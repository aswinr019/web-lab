
<?php

if(isset($_POST['submit'])){


$fname = $_POST['fname'];
$lname = $_POST['lname'];
$age = $_POST['age'];
$email = $_POST['email'];
$address = $_POST['address'];

$servername = "localhost";
$username = "root";
$password = "";
$database = "new_db";

$connection = mysqli_connect($servername,$username,$password,$database);


if(!$connection){
    die("Failed to connect : ".mysqli_connect_error());
}
else {

    echo "Connected succesfully";
    
    $sql = "INSER INTO student VALUES('$fname','$lname','$age','$email','$address')";

    $result = mysqli_query($connection,$sql);

    if($result){
        echo "Succesfully inserted";

        $sql = "SELECT * FROM student";

        $result = mysqli_query($connection,$sql);

        
    }
    else {
        echo "Failed to insert row";
    }
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