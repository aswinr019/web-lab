<?php

$name = $email = $age = $address = $phone = '';
if(isset($_POST['submit'])){

    $name = $_POST['name'];
    $age = $_POST['age'];
    $address = $_POST['address'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

	$errors = array('name'=>'','age'=>'','address'=>'','email'=>'','phone'=>'');

    if(empty($name)){
        $errors['name'] = "Please enter a name!<br>";
}
else {
if(!preg_match('/^[a-zA-Z\s]+$/',$name)){
    $errors['name'] = "Name must be letters and spaces only!<br>";
}
}
    if(empty($age)){
        $errors['age'] = "Please enter an age!<br>";
}
else {
if(!preg_match('/^[0-9]{2}+$/',$age)){
    $errors['age'] = "Please enter a valid age!<br>";
}
}
    if(empty($address)){
        $errors['address'] = "Please enter an address<br>!";
}
else {
if(!preg_match('/^[a-zA-Z0-9\s]+$/',$address)){
    $errors['address'] = "Please enter a valid address!<br>";
}
}
    if(empty($email)){
        $errors['email'] = "Please enter an email!<br>";
}
else {
if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
    $errors['email'] = "Please enter a valid email<br>";
}
}
    if(empty($phone)){
        $errors['phone'] = "Please enter a phone number!<br>";
}
else {
if(!preg_match('/^[0-9]{10}+$/',$phone)){
    $errors['phone'] = "Please enter a valid phone number!<br>";
}
}
}
?>


<html>
<head>
    <title>Student Registration</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>Student Registration</h2>
    <form method="POST">
        <label for="name">Name</label><br>
	<input type="text" name="name" id="name" value="<?php echo $name ?>"><br>
        <span class="error"><?php echo $errors['name'] ?></span> <br>

        <label for="age">Age</label><br>
	<input type="text" name="age" id="age" value="<?php echo $age ?>"><br>
        <span class="error"><?php echo $errors['age'] ?></span> <br>

        <label for="address">Address</label><br>
	<textarea name="address" id="address" cols="30" rows="10"><?php echo $address ?></textarea><br>
        <span class="error"><?php echo $errors['address'] ?></span> <br>

        <label for="email">Email</label><br>
	<input type="text" name="email" id="email" value="<?php echo $email ?>"><br>
        <span class="error"><?php echo $errors['email'] ?></span> <br>

        <label for="phone">Phone</label><br>
	<input type="text" name="phone" id="phone" value="<?php echo $phone ?>"><br>
        <span class="error"><?php echo $errors['phone'] ?></span> <br>

        <input type="submit" value="submit" name="submit">

    </form>
</body>
</html>
