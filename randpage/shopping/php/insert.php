<?php
include('../../admin/inc/conn.php');
mysqli_set_charset($conn,"utf8");
$data = json_decode($_POST['data']);

$reqName = $data->reqName;
$reqPhone = $data->reqPhone;

$time = date('Y-m-d H:i:s');

$sql = "INSERT INTO `Insert_tb` (`idx`, `reqcompany`, `reqname`, `reqphone`, `reqemail`, `reqinqr`, `reqpay`, `reqfilerout`, `reqmemo`, `reqperson`, `reqtarget`, `reqbordercate`, `time`, `fileId`) 
VALUES (NULL, '', '', '$reqName', '$reqPhone', '', '', '', '', '', '', 'shopping', '$time', NULL)";

$conn = mysqli_query($conn,$sql);
if(isset($conn)){$phpresult = 'ok';}
else{$phpresult = 'no';}

$json = json_encode(
    array("datas" => $sql, "phpresult"=>$phpresult)
);
echo urldecode($json);
header('Content-Type: application/json');
header('Content-Type: text/html; charset=utf-8');

?>