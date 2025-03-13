<?php

$host = "localhost:3307";
$user = "root";
$password = "";
$db_name = "photo_gallery";

$conn = new mysqli ($host, $user, $password, $db_name);

if($conn->connect_error) {
    http_response_code(400);
    echo "connection error";
}

?>