<?php
  include("../inc/conn.php");
  mysqli_set_charset($conn,"utf-8"); 
  header('Access-Control-Allow-Origin: *');  
  $data = json_decode(file_get_contents("php://input"),true);

    $subImg = $_FILES['subImg'];
    $MainImg = $_FILES['MainImg'];

    $reqWriter = $_POST['reqWriter'];
    $Activation = $_POST['Activation'];
    $reqCustomer = $_POST['reqCustomer'];
    $Class = $_POST['Class'];
    $reqTit = $_POST['reqTit'];
    $reqSubTit = $_POST['reqSubTit'];
    $reqProjectDesc = $_POST['reqProjectDesc'];
    $reqPeriod = $_POST['reqPeriod'];
    $mainDesc = $_POST['mainDesc'];
    $mode = $_POST['mode'];
    $port = $_POST['port'];
    $idx = $_POST['idx'];

    $fontColor = $_POST['fontColor'];
    $siteLink = $_POST['siteLink'];




    function FileUploader($files,$Result,$mode){
        $file = $files;
        $upload_directory = '../upload/';
        $time = date('YmdHi');

        $ext_str = "jpg,gif,png";
        $allowed_extensions = explode(',', $ext_str);
        $max_file_size = 5000000;
        //Byte 단위임..
        $ext = substr($file['name'], strrpos($file['name'], '.') + 1);
        $path = $file['name'];
        if($files == null){
            $Results = 'fileNo';
        }
        else if(!in_array($ext, $allowed_extensions)) {
            $Results = 'noExt';
        }
        else if($file['size'] >= $max_file_size){
            $Results = 'huge';
        }
        else if(move_uploaded_file($file['tmp_name'], $upload_directory.$time.$path)) {
                $Results = $upload_directory.$time.$path;
               
        }
        return $Result = $Results;
    }

    function FileRoutRetrun($UploadResult){
        if($UploadResult == 'fileNo'){
            $fileRoute = "";
        }
        else if($UploadResult == 'noExt'){
            $fileRoute = "";
        }
        else if($UploadResult == 'huge'){
            $fileRoute = "";
        }
        else{
            $fileRoute = $UploadResult;
        }
        return $fileRoute;
    }

    
  



    if($mode == 'new'){
        $UploadResult1 = FileUploader($subImg,$UploadResult1,'sub');
        $UploadResult2 = FileUploader($MainImg,$UploadResult2,'main');
        $fileRoute1 = FileRoutRetrun($UploadResult1);
        $fileRoute2 = FileRoutRetrun($UploadResult2);
        $sql = "INSERT INTO `works_tb` (writer,activation,port,customer,class,title,sub_tit,font_color,site_link,project,main_desc,period,img_route,main_img_route) 
        VALUES ('$reqWriter','0','0','$reqCustomer','$Class','$reqTit','$reqSubTit','$fontColor','$siteLink''$reqProjectDesc','$mainDesc','$reqPeriod',
        '$fileRoute1','$fileRoute2')";
    }
    else if($mode =='update'){
        $UploadResult1 = FileUploader($subImg,$UploadResult1,'sub');
        $UploadResult2 = FileUploader($MainImg,$UploadResult2,'main');

        $fileRoute1 = FileRoutRetrun($UploadResult1);
        $fileRoute2 = FileRoutRetrun($UploadResult2);

        if($fileRoute1 == ""){
            $fileQuery1 = "";

        }
        else{
            $fileQuery1 = "`img_route`='$fileRoute1',";

        }
        if($fileRoute2 == ""){
            $fileQuery2 = "";
        }
        else{
            $fileQuery2 = "`main_img_route`='$fileRoute2',";
        }
        $sql = "UPDATE `works_tb` SET `writer` ='$reqWriter', `activation` = '$Activation', `customer` ='$reqCustomer',
         `class` = '$Class', `title` = '$reqTit', `sub_tit` = '$reqSubTit', `font_color` = '$fontColor', `site_link` = '$siteLink', `project` = '$reqProjectDesc', `period` = '$reqPeriod',
         $fileQuery1 $fileQuery2 `port`='$port' WHERE idx = '$idx'";
    }
    else if($mode == 'Activation'){
        
    }

    $query = mysqli_query($conn,$sql);
    if(isset($query)){
        $phpResult = 'ok';
    }
    else{
        $phpResult = 'no';
    }

    $json =  json_encode(
        array(
            "file1"=>$fileRoute1,
            "file2"=>$fileRoute2,
            "phpResult"=>$phpResult,
            "test"=>$sql
    )); 
    echo urldecode($json);
    @Header('Content-Type: application/json');
    @Header('Content-Type: text/html; charset=utf-8');
  
?>