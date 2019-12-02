<?php
include('../inc/conn.php');
mysqli_set_charset($conn,"utf8");
$data = json_decode(stripslashes($_POST['data']));
$memid = $data->userId;
$sql = "SELECT * FROM user_tb WHERE 'user_id'='$memid'";
$test = "SELECT * FROM user_tb";
$check =  mysqli_query($conn,$test);     


$row = mysqli_fetch_assoc($check);
$test = mysqli_fetch_assoc($check);

$check_DB =  count($row);
$mempw = $data->userPw;
// $test = password_verify($mempw,$row['mem_pw']);
if($check_DB == 0){
    $check = 'noresult';
}
else{
    if($mempw == $row['user_pw']){
        $check ='ok';
    }
    else{
        $check ='pwno';
    }
}
$Login_info = json_encode(
    array("memId"=>$row['user_id'], 
          "memPw"=>$row['user_pw'],
          "memName"=>$row['user_name']
));

    $json =  json_encode(
        array("DateData"=>$data,"sql"=>$test['user_id']

    )); 

echo urldecode($json);
@header('Content-Type: application/json');
@header('Content-Type: text/html; charset=utf-8');
?>  

