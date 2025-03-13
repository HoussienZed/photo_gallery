<?php

require("../connection/connection.php");

$query = ("CREATE TABLE photos IF NOT EXISTS(
            id INT(11) AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            tags VARCHAR(255) NOT NULL,
            image_path TEXT NOT NULL");

$start = $conn->prepare($query);
$start->execute();



?>