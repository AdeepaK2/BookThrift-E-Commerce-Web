<?php

$host = 'localhost';      // Host name
$dbname = 'bookthrift';       // Database name
$username = 'root';       // Database username
$password = '';           // Database password


$dsn = "mysql:host=$host;dbname=$dbname";

try {

    $pdo = new PDO($dsn, $username, $password);

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {

    echo  "Error Connecting to Database-".$e->getMessage();
}
?>