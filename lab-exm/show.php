<!DOCTYPE html>
<html lang="en">
<head>
    
    <title>Student Details</title>
    <style>
           .error{
            font-size: 15px;
            color: #ff0000;
        }
    </style>

    <link rel="stylesheet" href="styles.css">
</head>
<body>


    <form method="POST">
    <h2 class="title">Search Student</h2>
    <input type="text" name="search" id="search" placeholder="Enter Email"> <br>
    <span class="error" id="searchErr"></span> <br>
    <input type="submit" value="search" id="btn" class="btn" name="find"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="submit" value="clear" id="clear" class="btn" name="clear">
    </form>
    <script>
      
        const search = document.getElementById("search");
        const searchErr = document.getElementById("searchErr");
        const result = document.querySelector("div");
        const btn = document.getElementById("btn");
        

        clear.addEventListener("click",function(){
            result.textContent = "";
        });
        btn.addEventListener("click",function(e){

           
            searchErr.textContent = "";
            let isErr = false;

            if(!search.value){
                searchErr.textContent = "Please enter an email to search";
                isErr = true;
            }

            if(isErr){
                e.preventDefault();
            }
        });
    </script>
    <?php


if(isset($_POST['search'])){

    $conn =  mysqli_connect("localhost","root","","student");

    if(!$conn){
        echo "Connection failed!";
    }
    else {

        if(isset($_POST['find'])){

        
        $search = $_POST['search'];
     


        $query = "SELECT * FROM `reg` WHERE email='$search'";

        $result = mysqli_query($conn,$query);
       
       
        if($result){

            $row = mysqli_fetch_assoc($result);
           
            // echo var_dump($row);
            echo "<div>";
            foreach($result as $row){
                   
                
                    echo "<br>Name : ".$row['name']."<br>";
                    echo "<br>Age : ".$row['age']."<br>";
                    echo "<br>Email : ".$row['email']."<br>";
                    echo "<br>Phone : ".$row['phn']."<br>";
                    echo "<br>Address : ".$row['address']."<br>";
                    echo "<br>SSLC Percentage : ".$row['sslc']."<br>";
                    echo "<br>Plus Two Percentage : ".$row['plustwo']."<br>";
            }
            echo "</div>";
        }
        else {
            echo "failed";
        }
    }
      
    }
}

?>

</body>
</html>