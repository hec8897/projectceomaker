<?php
include('../inc/conn.php');
mysqli_set_charset($conn,"utf8");
$data = json_decode(stripslashes($_POST['data']));


$sql = "SELECT * FROM Insert_tb inner join upload_file ON Insert_tb.fileId = upload_fil e.file_id  COLLATE utf8_general_ci";

?>