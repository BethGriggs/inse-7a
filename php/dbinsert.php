<?php
require ("dbcon.php");

$tName = $_POST["tName"];
$eStart = $_POST["eStart"];
$eFinish = $_POST["eFinish"];


try{
  $dbh= new PDO("mysql:host=$hostname;", $username,$password);
  $dbh->exec("CREATE DATABASE IF NOT EXISTS $db;");
  $dbh->exec("USE $db");

  if ($tName !== NULL) {
  $insert1 = "INSERT INTO task(task_name,task_estart,task_efinish)
  VALUES('$tName','$eStart','$eFinish');";

  $dbh->exec($insert1);
  echo "Successfully added!\n";
  echo '<input type=button onclick="getPage(\'index.php\')" value="Add New Task">';
    }

  else{
  echo "Must specify a task name!";
  }
}

catch(PDOException $e)
  {
    echo $e->getMessage();
  }

?>
