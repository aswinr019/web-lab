<html>
	<head>
		<title>Student Names</title>
	</head>
	<body>
		<h2>Student Names</h2>

<?php

    $names = array("Anu","Krishna","Naveena","Abhijith","Keerthana","Aravind");

        echo "Array elements are : <br>";
        print_r($names);
        echo "<br>";

        echo "Array elements in ascending order : <br>";
        asort($names);
        print_r($names);
        echo "<br>";
    
        echo "Array elements in descending order: <br>";
        arsort($names);
        print_r($names);
        echo "<br>";
    
?>

	</body>
</html>
