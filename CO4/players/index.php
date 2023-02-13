<html>
<head>
    <title>Player Names</title>
</head>
<body>
    <h2>Indian Cricket Team</h2>
<?php

    $i = 1;
    $names = array("Rohit Sharma","KL Rahul","Virat Kohli","Ravindra Jadeja","R Ashwin");

        echo "<table border='1'>";
        echo "<tr><th>No</th><th>Player names</th></tr>";
        foreach($names as $name){
            echo "<tr><td>".$i."</td>";
            echo "<td>".$name." </td></tr>";
            $i++;
        }
        echo "</table>";

?>
</body>
</html>
