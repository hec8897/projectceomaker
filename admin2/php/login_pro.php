<?php
include('../inc/conn.php');
mysqli_set_charset($conn,"utf8");
// $data = json_decode(stripslashes($_POST['data']));
$data = json_decode($_POST['data']);

// $memid = $data->userId;
// $sql = "SELECT * FROM user_tb WHERE `user_id`='$memid'";
// $check =  mysqli_query($conn,$sql);     

// $row = mysqli_fetch_assoc($check);

// $check_DB =  count($row);
// $mempw = $data->userPw;
// $test = password_verify($mempw,$row['mem_pw']);
// if($check_DB == 0){
//     $check = 'noresult';
// }
// else{
//     if($mempw == $row['user_pw']){
//         $check ='ok';
//     }
//     else{
//         $check ='pwno';
//     }
// }
    // $memId = $row['user_id'];
    // $memName = $row['user_name'];

    $json =  json_encode(   
        array("test"=>123)
        // array("DateData"=>$data,"memId"=>$memId,"name"=>$memName,"result"=>$check
    )); 

echo urldecode($json);
header('Content-Type: application/json');
header('Content-Type: text/html; charset=utf-8');
?>  

