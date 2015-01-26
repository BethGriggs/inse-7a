<?php

$hostname = 'localhost';
$username = 'root';
$password = '';
$db = 'inse7a';
$tName = $_POST["tName"];
$eStart = $_POST["eStart"];
$eFinish = $_POST["eFinish"];


try{
  $dbh= new PDO("mysql:host=$hostname;", $username,$password);
  $dbh->exec("CREATE DATABASE IF NOT EXISTS $db;");
  $dbh->exec("USE $db");

  $insert1 = "INSERT INTO task(task_name,task_estart,task_efinish)
  VALUES('$tName','$eStart','$eFinish');";

  $dbh->exec($insert1);
  echo "Successfully added!";

}

catch(PDOException $e)
  {
    echo $e->getMessage();
  }

?>