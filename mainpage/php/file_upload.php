<?php

include('../admin/inc/conn.php');

$reqName = $_POST['reqname'];

if(isset($_FILES['file']) && $_FILES['file']['name'] != "") {
    $file = $_FILES['file'];
    $upload_directory = '../admin/upload/';
    $ext_str = "hwp,xls,doc,xlsx,docx,pdf,jpg,gif,png,txt,ppt,pptx";
    $allowed_extensions = explode(',', $ext_str);
    $max_file_size = 3072000;
    $ext = substr($file['name'], strrpos($file['name'], '.') + 1);
    // 확장자 체크
    $path = md5(microtime()) . '.' . $ext;

    if(!in_array($ext, $allowed_extensions)) {
        ?>
        <script>
            alert('업로드할 수 없는 확장자 입니다.')
            history.back();
        </script>
        <?php
    }
    // 파일 크기 체크
    else if($file['size'] >= $max_file_size) {

        ?>
        <script>
            alert('3MB 까지만 업로드 가능합니다.')
            history.back();
        </script>
        <?php       

    }

    else if(move_uploaded_file($file['tmp_name'], $upload_directory.$path)) {
        $file_id = md5(uniqid(rand(), true));
        $name_orig = $file['name'];
        $name_save = $path;
        $query = "INSERT INTO upload_file (reqcompany,file_id, name_orig, name_save, reg_time) VALUES('$reqCompany','$file_id','$name_orig','$name_save',now())";
        $query = "UPDATE `Insert_tb` SET `fileId` = '$file_id' WHERE `Insert_tb`.`reqname` = '$reqName'";

        $stmt = mysqli_prepare($conn, $query);

        $bind = mysqli_stmt_bind_param($stmt, "sss", $file_id, $name_orig, $name_save);

        $exec = mysqli_stmt_execute($stmt);

      

        mysqli_stmt_close($stmt);
        ?>
        <script>
            alert('상담신청이 완료 되었습니다. 빠른시일안에 연락 드리겠습니다');
            history.back();
        </script>
        <?php

        

    }

} else {
    ?>
    <script>
        alert('파일이 업로드 되지 않았습니다. 파일을 확인후 다시 업로드해주세요')
    </script>
    <?php
}

mysqli_close($conn);

?>

