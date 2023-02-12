<html>
<head>
<title>Database Connection</title>
<link rel="stylesheet" href="./styles.css">
</head>
<body>
	<h2>Database Connection</h2>
<form method="POST">
<label for="name">Name</label><br>
<input type="text" name="name" id="name" > <br>
<span id="namErr" ></span> <br>

<label for="email">Email</label> <br>
<input type="text" name="email" id="email"><br>
<span id="emailErr" ></span>
<br>

<label for="password">Password</label> <br>
<input type="password" name="password" id="password" > <br>
<span id="passwordErr"></span> <br>

<input type="submit" value="add records" id="btn" name="submit">
<input type="submit" value="show records" id="btn" name="show">
</form>
<script>
	const nameInput = document.getElementById("name");
	const emailInpt = document.getElementById("email");
	const passwordInpt = document.getElementById("password");
	const btn = document.getElementById("btn");
	const nameErr = document.getElementById("nameErr");
	const emailErr = document.getElementById("emailErr");
	const passwordErr = document.getElementById("passwordErr");

	btn.addEventListener("click",function(e){
		console.log("clicked!");
		let isErr = false;
		nameErr.textContent = "";
		emailErr.textContent = "";
		passwordErr.textContent = "";

		if(!nameInput.value){
			nameErr.textContent = "Please enter a name";
			isErr = true;
		}
		if(!emailInpt.value){
			emailErr.textContent = "Please enter an email";
			isErr = true;
		}
		if(!passwordInpt.value){
			passwordErr.textContent = "Please enter a password!";
			isErr = true;
		}
		if(isErr){
			e.preventDefault();
		}
		
	});
	
</script>
</body>
<?php 
	
	$server = "localhost";
	$user = "root";
	$password = "";
	$database = "testdb";
	
	$connection = mysqli_connect($server,$user,$password,$database);
	
	if(!$connection){
		echo "<p>Connection failed!</p><br>";
	}
	else {
		echo "<p>Connection was successful</p><br>";

		if(isset($_POST['submit'])){

			$name = $_POST['name'];
			$email = $_POST['email'];
			$password = $_POST['password'];
			
			$sql = "INSERT INTO testtable VALUES('$name','$email','$password')";

			$result = mysqli_query($connection,$sql);

			if($result){
				echo "<p>Records added successfully</p><br>";
			}
			else {
				echo "<p>Failed to add records!</p><br>";
			}
		
		}


		if(isset($_POST['show'])){
	
		
			$sql = "SELECT * FROM testtable";
			$result = mysqli_query($connection,$sql);
			
			echo "<br><br><br>";
			echo "<table border='1'>";
			echo "<tr><th>Name</th><th>Email</th><th>Password</th></tr>";
			foreach($result as $row){
				echo "<tr><td>".$row['name']."</td><td>".$row['email']."</td><td>".$row['password']."</td></tr>";
			}
			echo "</table>";
		}
	}

?>
</html>
