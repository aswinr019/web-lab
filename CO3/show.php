<html>

<body>

<?php 
	$conn = mysqli_connect("localhost","root","","testdb");

	if(!$conn){
		echo "Connection failed!<br>";
	}
	else {

			$sql = "SELECT * FROM tbl";

			$result = mysqli_query($conn,$sql);

			echo "<table border='1'>";
			echo "<tr><th>Email</th><th>Password</th></tr>";
			foreach($result as $row){
				echo "<tr><td>".$row['email']."</td><td>".$row['password']."</td></tr>";
			}
			echo "</table>";
		}

?>
</body>
</html>
