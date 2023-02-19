<?php

include('header.php');
if($connection){
    if(isset($_POST['submit'])){

        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $dept = $_POST['department'];

        $query = "INSERT INTO student(name,email,password,department) VALUES('$name','$email','$password','$dept')";
	
        $result = mysqli_query($connection,$query);

        if($result) { 
		echo "Records added succesfully";
		header('Location: login.php');
        }
        else { echo "Failed to add records".mysqli_error($connection); }
    }
}
?>

<html>
<head>
    <title>Student Registration</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <div id="form">
	
	<h2>Student Registration</h2>
    <form  method="POST">
        Name <br>
        <input type="text" name="name" id="name"> <br>
        <span id="nameErr" class="error"></span> <br>
        Email <br>
        <input type="text" name="email" id="email"><br>
        <span id="emailErr" class="error"></span> <br>
        Password <br>
        <input type="password" name="password" id="password"> <br>
        <span id="passwordErr" class="error"></span> <br>
        Department <br>
        <select name="department" id="department">
            <option value="1">CS</option>
            <option value="2">Mech</option>
            <option value="3">EC</option>
        </select><br>
        <span id="departmentErr" class="error"></span> <br>


        <input type="submit" value="Register" name="submit" id="btn">
    </form>
    </div>
    <script>
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const department = document.getElementById("department");
        const btn = document.getElementById("btn");

        const nameErr = document.getElementById("nameErr");
        const emailErr = document.getElementById("emailErr");
        const passwordErr = document.getElementById("passwordErr");
        const departmentErr = document.getElementById("departmentErr"); 

       btn.addEventListener("click",function(e){

        let isErr = false;
        nameErr.textContent = "";
        emailErr.textContent = "";
        passwordErr.textContent = "";

        if(!name.value.match(/[a-zA-Z]/g)){
            nameErr.textContent = "Invalid name!";
            isErr = true;
         }
         if(!name.value){
            nameErr.textContent = "Name must not be empty!";
            isErr = true;
         }


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

         if(department.value == '0' ){
            departmentErr.textContent = "Please select a department";
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
