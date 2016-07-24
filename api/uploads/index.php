<?php
header('Content-Type: multipart/form-data;boundary=SOME_BOUNDARY');
header('Access-Control-Allow-Origin: *');
error_reporting(E_ALL | E_STRICT);


$result=move_uploaded_file($_FILES['file']['tmp_name'], time()."-".$_FILES['file']['name']);
// Just imitate that the file was stored.
echo json_encode([
    'success' => true,
    'name' => time()."-".$_FILES['file']['name'],
    //optional
]);