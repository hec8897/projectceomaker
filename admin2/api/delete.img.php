<?php
  include("../inc/conn.php");
  mysqli_set_charset($conn,"utf-8"); 
  $data = json_decode(file_get_contents("php://input"),true);
  $idx = isset($data['idx'])?$data['idx']:"";
  $col = $data['col'];

  if($col == 'sub'){
    $colum = 'img_route';
  }
  else if($col == 'main'){
    $colum = 'main_img_route';
  }

  unlink($data['target']);

  $sql = "UPDATE `works_tb` SET $colum='' WHERE idx = '$idx'";
  $query = mysqli_query($conn,$sql);
  if(isset($query)){
        $phpResult = 'ok';
    }
    else{
        $phpResult = 'no';
    }
  
  $json =  json_encode(
      array(
          "result"=>$data,
          "phpResult"=>$phpResult
  )); 
  
  echo urldecode($json);
  
  @Header('Content-Type: application/json');
  @Header('Content-Type: text/html; charset=utf-8');


?>