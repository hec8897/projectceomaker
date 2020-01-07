<?php
include('../admin/inc/conn.php');
mysqli_set_charset($conn,"utf8");
$data = json_decode($_POST['data']);
$reqCompany = $data[0]->reqCompany;
$reqPhone = $data[0]->reqPhone;
$reqEmail = $data[0]->reqEmail;
$reqMemo = $data[0]->reqMemo;
$reqMode = $data[0]->mode;

$reqInq = (isset($data[0]->reqInqr)?$reqInq=$data[0]->reqInqr:"");
$payInq = (isset($data[0]->payInqr)?$payInq=$data[0]->payInqr:"");
$reqTarget = (isset($data[0]->reqTargetr)?$reqTarget=$data[0]->reqTargetr:"");
$reqPerson = (isset($data[0]->reqPersonr)?$reqPerson= $data[0]->reqPersonr:"");
$reqName = (isset($data[0]->reqNamer)?$reqName=$data[0]->reqNamer:"");
$fileNamer = (isset($data[0]->fileNamer)?$fileNamer=$data[0]->fileNamer:"");
$time = date('Y-m-d H:i:s');


$sql = "INSERT INTO `Insert_tb` 
(reqcompany, reqname, reqphone, reqemail, reqinqr, reqpay, reqfilerout, reqmemo, reqperson, reqtarget,time, reqbordercate) 
VALUES ('$reqCompany','$reqName','$reqPhone','$reqEmail','$reqInq','$payInq','$fileNamer','$reqMemo','$reqPerson','$reqTarget','$time','$reqMode')";

$conn = mysqli_query($conn,$sql);
if(isset($conn)){$phpresult = 'ok';}
else{$phpresult = 'no';}

$json = json_encode(
    array("datas" => $data, "phpresult"=>$phpresult,'sql'=>$sql)
);
echo urldecode($json);
header('Content-Type: application/json');
header('Content-Type: text/html; charset=utf-8');

?>