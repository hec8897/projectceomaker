<?php
include("../inc/conn.php");
mysqli_set_charset($conn,"utf-8"); 
$data = json_decode(file_get_contents("php://input"),true);

$Date = $data['RequestDate'];
$mode = $data['mode'];
$limit = $data['limit'];
$idx = isset($data['idx'])?$data['idx']:"";
$shareDate = date('Y-m-d');
$result = array();

if($mode == "view"){
    $sql = "SELECT * FROM `works_tb` WHERE idx = '$idx'";
    $query = mysqli_query($conn,$sql);
    $row = mysqli_fetch_array($query);

    array_push($result, array(
        "idx"=>$row['idx'],
        "writer"=>$row['writer'],
        "title"=>$row['title'],
        "subTit"=>$row['sub_tit'],
        "projectDesc"=>$row['project_desc'],
        "reqinqr"=>$row['reqinqr'],
        "customer"=>$row['customer'],
        "Period"=>$row['Period'],
        "imgRoute"=>$row['img_route'],
        "mainRoute"=>$row['main_img_route'],
        "activation"=>$row['activation']
    ));

}

else{
    $sql = "SELECT * FROM `works_tb`";
    $query = mysqli_query($conn,$sql);

    while($row = mysqli_fetch_array($query)){ 
    array_push($result, array(
        "idx"=>$row['idx'],
        "writer"=>$row['writer'],
        "title"=>$row['title'],
        "subTit"=>$row['sub_tit'],
        "projectDesc"=>$row['project_desc'],
        "reqinqr"=>$row['reqinqr'],
        "customer"=>$row['customer'],
        "Period"=>$row['Period'],
        "imgRoute"=>$row['img_route'],
        "mainRoute"=>$row['main_img_route'],
        "activation"=>$row['activation']
    ));
}
}



$json =  json_encode(
    array(
        "result"=>$result,
        "sql"=>$sql
)); 

echo urldecode($json);


@Header('Content-Type: application/json');
@Header('Content-Type: text/html; charset=utf-8');



?>