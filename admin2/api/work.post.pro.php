<?php
  include("../inc/conn.php");
  mysqli_set_charset($conn,"utf-8"); 
  header('Access-Control-Allow-Origin: *');  

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

    $UploadResult1 = FileUploader($subImg,$UploadResult1,'sub');
    $UploadResult2 = FileUploader($MainImg,$UploadResult2,'main');


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
    
    $fileRoute1 = FileRoutRetrun($UploadResult1);
    $fileRoute2 = FileRoutRetrun($UploadResult2);

    $sql = "INSERT INTO `works_tb` (writer,activation,customer,class,title,sub_tit,project,main_desc,period,img_route,main_img_route) 
    VALUES ('$reqWriter','$Activation','$reqCustomer','$Class','$reqTit','$reqSubTit','$reqProjectDesc','$mainDesc','$reqPeriod',
    '$fileRoute1','$fileRoute2')";

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
    )); 
    echo urldecode($json);
    @Header('Content-Type: application/json');
    @Header('Content-Type: text/html; charset=utf-8');
  
?>