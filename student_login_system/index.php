<?php
    include('header.php');

    $userid = $_SESSION['userid'];

    if($connection){
	$query = "SELECT * FROM student WHERE id='$userid'";

    	$result = mysqli_query($connection,$query);

	if($result){
		$user = mysqli_fetch_assoc($result);

		echo $user['id']."<br>";
		echo $user['name']."<br>";
		echo $user['email']."<br>";
	}
	}
?>
