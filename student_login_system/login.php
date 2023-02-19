<?php

include('header.php');

   if($connection){
    if(isset($_POST['submit'])){

        $email = $_POST['email'];
        $password = $_POST['password'];

        $query = "SELECT * FROM student WHERE email ='$email'";

	$result = mysqli_query($connection,$query);

	if($result){
		$user = mysqli_fetch_assoc($result);
		if($user['password'] == $password){
			echo "Login successful";
			$_SESSION['userid'] = $user['id'];
			header('Location: index.php');
		}
		else {
			echo "Wrong password!<br>";
		}
	}else {
		echo "User not found!<br>";
	}

    }
   }
?>

<html>
<head>
    <title>Student Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<div id="form">
    <h2>Student Login</h2>
<form  method="POST">
        Email <br>
        <input type="text" name="email" id="email"><br>
        <span id="emailErr" class="error"></span> <br>
        Password <br>
        <input type="password" name="password" id="password"> <br>
        <span id="passwordErr" class="error"></span> <br>
        <input type="submit" value="Login" name="submit" id="btn">
</div>
<script>
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const btn = document.getElementById("btn");

        const emailErr = document.getElementById("emailErr");
        const passwordErr = document.getElementById("passwordErr");

       btn.addEventListener("click",function(e){

        let isErr = false;
        emailErr.textContent = "";
        passwordErr.textContent = "";

         if(!email.value.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]/g)){
            emailErr.textContent = "Invalid email!";
            isErr = true;
         }
         if(!email.value){
            emailErr.textContent = "Email must not be empty!";
            isErr = true;

         }


         if(password.value.length < 6){
            passwordErr.textContent = "Password must be greater than six chars!";
            isErr = true;
         }

         if(!password.value){
            passwordErr.textContent = "Password must not be empty!";
            isErr = true;

         }

         if(isErr){ e.preventDefault(); }
       });
    </script>

</body>
</html>
