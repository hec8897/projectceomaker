<?php
    $conn = mysqli_connect('localhost','ceoksmi','bb3603','ceoksmi');
    $test = "SELECT * FROM user_tb";
    $check =  mysqli_query($conn,$test);     
    $row = mysqli_fetch_assoc($check);

    if(isset($conn)){
        echo "연결";
        echo $row['user_id'];
    }
    else{
        echo "노";
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>