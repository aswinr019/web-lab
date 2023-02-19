<?php
$connection = mysqli_connect('localhost','root','','student');

if(!$connection){
	echo $connection."<br>";
    echo "Connection failed! <br><br>";
}
else{
    echo "Connected to database!!<br><br>";

    session_start();

}
?>
