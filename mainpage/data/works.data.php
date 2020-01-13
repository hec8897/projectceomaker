<?php
include("../admin/inc/conn.php");
mysqli_set_charset($conn,"utf-8"); 

$result = array();

$sql = "SELECT * FROM `works_tb` WHERE `activation` = 1";
$query = mysqli_query($conn,$sql);

while($row = mysqli_fetch_array($query)){ 
    array_push($result, array(
        "idx"=>$row['idx'],
        "activation"=>$row['activation'],
        "port"=>$row['port'],
        "company"=>$row['customer'],
        "class"=>$row['class'],
        "mainTit"=>$row['title'],
        "subTit"=>$row['sub_tit'],
        "project"=>$row['project'],
        "Period"=>$row['period'],
        "background"=>$row['img_route'],
        "mainRoute"=>$row['main_img_route']
        ));
    }

    $json =  json_encode(
        array(
            "result"=>$result,
            "sql"=>$sql,
    )); 
    
    echo urldecode($json);
    
    
    @Header('Content-Type: application/json');
    @Header('Content-Type: text/html; charset=utf-8');
    
?>