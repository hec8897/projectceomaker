<?php
include("../admin/inc/conn.php");
mysqli_set_charset($conn,"utf-8"); 

$data = json_decode($_POST['data']);
$result = array();
$mode = $data->mode;


if(isset($mode)){
    $idx  = $data->id;
    $sql = "SELECT * FROM `works_tb` WHERE `activation` = 1 AND idx = $idx";
    $query = mysqli_query($conn,$sql);
    $row = mysqli_fetch_array($query);

    array_push($result, array(
        "idx"=>$row['idx'],
        "activation"=>$row['activation'],
        "port"=>$row['port'],
        "company"=>$row['customer'],
        "class"=>$row['class'],
        "mainTit"=>$row['title'],
        "subTit"=>$row['sub_tit'],
        "fontColor"=>$row['font_color'],
        "project"=>$row['project'],
        "Period"=>$row['period'],
        "background"=>$row['img_route'],
        "mainRoute"=>$row['main_img_route']
    ));

}
else{

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
            "fontColor"=>$row['font_color'],
            "project"=>$row['project'],
            "Period"=>$row['period'],
            "background"=>$row['img_route'],
            "mainRoute"=>$row['main_img_route']
        ));
    }
}

    $json =  json_encode(
        array(
            "result"=>$result,
            "mode"=>$sql
    )); 
    
    echo urldecode($json);
    
    
    @Header('Content-Type: application/json');
    @Header('Content-Type: text/html; charset=utf-8');
    
?>