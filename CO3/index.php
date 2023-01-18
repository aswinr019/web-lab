<html>

<head>
<title>Test Project</title>
</head>
<body>
<form method="POST">
Email<br>
<input type="text" name="email" id="email"><br>
<span id="emailErr" ></span>
<br>
Password<br>
<input type="password" name="password" id="password" > <br>
<span id="passwordErr"></span> <br>
<input type="submit" value="Click me" id="btn" name="submit">
<a href="show.php">Show</a>
</form>
<script>

	const emailInpt = document.getElementById("email");
	const passwordInpt = document.getElementById("password");
	const btn = document.getElementById("btn");
	const emailErr = document.getElementById("emailErr");
	const passwordErr = document.getElementById("passwordErr");

	btn.addEventListener("click",function(e){
		console.log("clicked!");
		let isErr = false;
		emailErr.textContent = "";
		passwordErr.textContent = "";

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
	$conn = mysqli_connect("localhost","root","","testdb");

	if(!$conn){

		echo "Connection failed!";
	}
	else {
		echo "Connection was successful<br>";

		if($_SERVER['REQUEST_METHOD'] == "POST" ){
			$email = $_POST['email'];
			$password = $_POST['password'];
			
			echo $email;	
			echo $password;	

			$sql = "INSERT INTO tbl VALUES('$email','$password')";

			$result = mysqli_query($conn,$sql);

			if($result){
				echo "Succesfull";
			}
			else {
				echo "Failed!";
			}
		
		}
	}

?>
</html>
