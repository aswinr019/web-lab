
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

        $number = mysqli_num_rows($result);

        echo '<table border"1">';
        echo '<tr><th>First Name</th><th>Last name</th><th>Age</th><th>Email</th><th>Address</th></tr>';
        if($number > 0){
            while( $row = mysqli_fetch_assoc($result)){
                // echo var_dump($row);
                // echo '<br>';

                echo '<tr><td>'.$row['fname'].'</td>';
                echo '<td>'.$row['lname'].'</td>';
                echo '<td>'.$row['ahe'].'</td>';
                echo '<td>'.$row['email'].'</td>';
                echo '<td>'.$row['address'].'</td></tr>';

            }
        }
        echo '</table>';
        
    }
    else {
        echo "Failed to insert row";
    }
}






}
?>