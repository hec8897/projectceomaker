<?php
include("../inc/conn.php");
mysqli_set_charset($conn,"utf-8"); 
$data = json_decode(file_get_contents("php://input"),true);

$Date = $data['RequestDate'];
$shareDate = date('Y-m-d');

$sql = "SELECT * FROM `Insert_tb`";
$query = mysqli_query($conn,$sql);
$result = array();


while($row = mysqli_fetch_array($query)){ 
    array_push($result, array(
        "idx"=>$row['idx'],
        "reqcompany"=>$row['reqcompany'],
        "reqname"=>$row['reqname'],
        "reqphone"=>$row['reqphone'],
        "reqemail"=>$row['reqemail'],
        "reqinqr"=>$row['reqinqr'],
        "reqpay"=>$row['reqpay'],
        "reqfilerout"=>$row['reqfilerout'],
        "reqmemo"=>$row['reqmemo'],
        "reqperson"=>$row['reqperson'],
        "reqtarget"=>$row['reqtarget'],
        "reqbordercate"=>$row['reqbordercate'],
        "time"=>$row['time'],
        "fileId"=>$row['fileId']
    ));
}

// array_push($result, array(
//     "idx"=>1,
//     "reqcompany"=>1,
//     "reqname"=>1,
//     "reqphone"=>1,
//     "reqemail"=>1,
//     "reqinqr"=>1,
//     "reqpay"=>1,
//     "reqfilerout"=>1,
//     "reqmemo"=>1,
//     "reqperson"=>1,
//     "reqtarget"=>1,
//     "reqbordercate"=>1,
//     "time"=>1,
//     "fileId"=>1,
// ));

$json =  json_encode(
    array(
        "result"=>$result,
        "sql"=>$sql
)); 

echo urldecode($json);


@Header('Content-Type: application/json');
@Header('Content-Type: text/html; charset=utf-8');



?>