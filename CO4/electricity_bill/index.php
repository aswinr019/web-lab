<?php 

    if(isset($_POST['submit'])){
        $metno = $_POST['number'];
        $unit = $_POST['unit'];
        $tariff = $_POST['category'];
	$extra = 0;
	$price = 0;
	        
        switch($tariff){

            case "rural" :{
		echo "hai";
                if($unit>0 && $unit<=50) 
                { 
                    $extra=20; 
                    $price=(($unit*.25)+$extra); 
                } 
                if($unit>0 && $unit<=50) 
                { 
                    $extra=20; 
                    $price=(($unit*.25)+$extra); 
                } 
                if($unit>50 && $unit<=100) 
                { 
                    $extra=20; 
                    $price=(($unit*.5)+$extra); 
                } 
                if($unit>100 &&  $unit<=150)
                             
                { 
                    $extra=25; 
                    $price=(($unit*1)+$extra); 
                } 
                if($unit>150 && $unit<=250)  
                { 
                    $extra=30; 
                    $price=(($unit*1.5)+$extra); 
                } 
                if($unit>250 &&  $unit<=400)
 
                { 
                    $extra=35; 
                    $price=(($unit*2)+$extra); 
                } 
                if($unit>400) 
                { 
                    $extra=35; 
                    $price=(($unit*3)+$extra); 
                } 

                break;
            } 
            case "residential" :{

                if($unit>0 && $unit<=50) 
                { 
                    $extra=35; 
                    $price=(($unit*1.25)+$extra); 
                } 
                if($unit>50 && $unit<=100) 
                { 
                    $extra=35; 
                    $price=(($unit*1.5)+$extra); 
                } 
                if($unit>100 && $unit<=150) 
                { 
                    $extra=35; 
                    $price=(($unit*2)+$extra); 
                } 
                if($unit>150 && $unit<=250) 
                { 
                    $extra=40; 
                    $price=(($unit*2.5)+$extra); 
                } 
                if($unit>250 && $unit<=400) 
                { 
                    $extra=45; 
                    $price=(($unit*3)+$extra); 
                } 
                if($unit>400) 
                { 
                    $extra=45; 
                    $price=(($unit*3.5)+$extra); 
                } 
                break;
            } 
            case "commercial" :{

                        if($unit>0 && $unit<=50) 
                        { 
                            $extra=50; 
                            $price=(($unit*3)+$extra); 
                        } 
                        if($unit>50 && $unit<=100) 
                        { 
                            $extra=50; 
                            $price=(($unit*3)+$extra); 
                        } 
                        if($unit>100 && $unit<=150) 
                        { 
                            $extra=55; 
                            $price=(($unit*4)+$extra); 
                        } 
                        if($unit>150 && $unit<=250) 
                        { 
                             $extra=55; 
                            $price=(($unit*4.5)+$extra); 
                        } 
                        if($unit>250 && $unit<=400) 
                        { 
                            $extra=60; 
                            $price=(($unit*5)+$extra); 
                        } 
                        if($unit>400) 
                        { 
                            $extra=60; 
                            $price=(($unit*5)+$extra); 
                        }
                            break;
                        } 
        }
}


?>

<html >
<head>
    <title>Electiricty Bill</title>
</head>
<body>
    <h2>Electricity Bill</h2>
    <form method="POST">
        <label for="number">Enter Meter Number</label><br>
        <input type="text" name="number" ><br>

        <label for="unit">Enter Number of Units</label><br>
        <input type="text" name="unit" ><br>

        <label for="category">Select Category</label><br>
        <select name="category" >
            <option value="rural">Rural</option>
             <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
        </select>

        <input type="submit" value="submit" name="submit">

        <div>
            <?php
		
		echo "<br><br><h2>Bill</h2>";
                echo "Meter number : ".$metno."<br>";
                echo "Usage : ".$unit."  units<br>";
                echo "Extra charges : ".$extra."<br>";
                echo "Total : ".$price." ₹<br>"
            ?>
        </div>
    </form>
</body>
</html>
