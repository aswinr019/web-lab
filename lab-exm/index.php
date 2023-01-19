<!DOCTYPE html>
<html lang="en">
<head>
    <title>Registration</title>
    <style>
        .error{
            font-size: 15px;
            color: #ff0000;
        }
        .success{
            color:#00fa00;
        }
    </style>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
   
    <form method="POST">
    <h2>Student Registration</h2>
        Name <br>
        <input type="text" name="name" id="name"><br>
        <span id="nameErr" class="error"></span> <br>

          Age <br>
        <input type="text" name="age" id="age"><br>
        <span id="ageErr" class="error"></span> <br>

          Email <br>
        <input type="text" name="email" id="email"><br>
        <span id="emailErr" class="error"></span> <br>

         Contact No <br>
        <input type="text" name="phn" id="phn"><br>
        <span id="phnErr" class="error"></span> <br>

         Address <br>
        <textarea name="address" id="address" cols="30" rows="10"></textarea> <br>
        <span id="addressErr" class="error"></span> <br>

        SSLC Percentage <br>
        <input type="text" name="sslc" id="sslc"><br>
        <span id="sslcErr" class="error"></span> <br>

        
        +2 Percentage <br>
        <input type="text" name="plustwo" id="plustwo"><br>
        <span id="plustwoErr" class="error"></span> <br>

        <input type="submit" value="Register" id="btn" class="btn" name="submit">
        <a href="./show.php">Search student</a>

    </form>
    <?php


        if(isset($_POST['submit'])){

            $conn =  mysqli_connect("localhost","root","","student");

            if(!$conn){
                echo "Connection failed!";
            }
            else {
                $name = $_POST['name'];
                $age = $_POST['age'];
                $email = $_POST['email'];
                $phn = $_POST['phn'];
                $address = $_POST['address'];
                $sslc = $_POST['sslc'];
                $plustwo = $_POST['plustwo'];

                // echo $name."<br>";
                // echo $age."<br>";
                // echo $email."<br>";
                // echo $phn."<br>";
                // echo $address."<br>";
                // echo $sslc."<br>";
                // echo $plustwo."<br>";


                $query = "INSERT INTO reg VALUES('$name','$age','$email','$phn','$address','$sslc','$plustwo')";

                $result = mysqli_query($conn,$query);

                if($result){
                    echo "<span class='success'>Resistration successful</span>";
                }
                else {
                    echo "<span class='error'>Resistration failed</span><br>";
                    echo "<span class='error'>".mysqli_error($conn)."</span><br>";

                }
            }
        }
       


    ?>
</body>
<script>

        console.log("hai");
        const name = document.getElementById("name");
        const age = document.getElementById("age");
        const email = document.getElementById("email");
        const phn = document.getElementById("phn");
        const address = document.getElementById("address");
        const sslc = document.getElementById("sslc");
        const plustwo = document.getElementById("plustwo");


        const btn = document.getElementById("btn");


        const nameErr = document.getElementById("nameErr");
        const ageErr = document.getElementById("ageErr");
        const emailErr = document.getElementById("emailErr");
        const phnErr = document.getElementById("phnErr");
        const addressErr = document.getElementById("addressErr");
        const sslcErr = document.getElementById("sslcErr");
        const plustwoErr = document.getElementById("plustwoErr");


        btn.addEventListener("click",function(e){
            nameErr.textContent = "";
            ageErr.textContent = "";
            emailErr.textContent = "";
            phnErr.textContent = "";
            addressErr.textContent = "";
            sslcErr.textContent = "";
            plustwoErr.textContent = "";


            let isErr = false;

            //name
            if(!name.value.match(/[a-zA-Z]/g)){
                nameErr.textContent = "Please enter a valid name";
                isErr = true;
            }

            if(!name.value){
                nameErr.textContent = "Please enter a name";
                isErr = true;
            }

            //age
            if(isNaN(age.value)){
                ageErr.textContent = "Please enter a valid  age";
                isErr = true;
            }

            if(!age.value){
                ageErr.textContent = "Please enter a age";
                isErr = true;
            }

            //email
            if(!email.value.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]/g)){
                emailErr.textContent = "Please enter a valid email";
                isErr = true;
            }

            if(!email.value){
                emailErr.textContent = "Please enter an email";
                isErr = true;
            }

            //phn
             
            

            if(isNaN(phn.value)){
                phnErr.textContent = "Please enter a valid  phone number";
                isErr = true;
            }
            if(!(phn.value.length > 9) || !(phn.value.length < 11 )){
                phnErr.textContent = "Phone number should  contain 10 numbers";
                isErr = true;
            }

            if(!phn.value){
                phnErr.textContent = "Please enter a phone number";
                isErr = true;
            }

            //address

            if(address.value.length < 10 ){
                addressErr.textContent = "Address should  contain atleast 10 characters";
                isErr = true;
            }

            if(!address.value){
                addressErr.textContent = "Please enter an address";
                isErr = true;
            }

            //sslc
            

            if(!sslc.value){
                sslcErr.textContent = "Please enter sslc percentage";
                isErr = true;
            }
            else {

                if(Number(sslc.value) < 45){

                    alert("You are not eligible for registration");
                    isErr = true;
                }
            }

            //+2

           

            if(!plustwo.value){
                plustwoErr.textContent = "Please enter +2 percentage";
                isErr = true;
            }
            else {

                if(Number(plustwo.value) < 45){
                    alert("You are not eligible for registration");
                    isErr = true;
            }
            }

            if(isErr){

                e.preventDefault();
            }

        });
</script>
</html>