<?php

$hostname = 'localhost';
$username = 'root';
$password = '';
$db = 'inse7a';

try{
  $dbh= new PDO("mysql:host=$hostname;", $username,$password);
  $dbh->exec("CREATE DATABASE IF NOT EXISTS $db;");
  $dbh->exec("USE $db");

  $tasktable = "CREATE TABLE IF NOT EXISTS task(
  	task_id INT(11) NOT NULL AUTO_INCREMENT,
  	task_name VARCHAR(40) NOT NULL UNIQUE,
  	task_estart DATE NOT NULL,
  	task_efinish DATE NOT NULL,
  	PRIMARY KEY(task_id));";
    $dbh->exec($tasktable);
}
catch(PDOException $e)
  {
    echo $e->getMessage();
  }

?>
