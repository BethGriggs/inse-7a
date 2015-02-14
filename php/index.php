<?php


echo '<form id="add_task" onsubmit="return false;">'.
     '<label for="tName">Task Name</label>'.
                '<input type="text" id="tName" name="tName" >'.
                '<label for="eStart">Earliest Start</label>'.
                '<input type="date" id="eStart" class="datepicker" name="eStart" >'.
                '<p id="isDateValid"></p>'.
                '<label for="eFinish">Earliest Finish</label>'.
                '<input type="date" id="eFinish" class="datepicker" name="eFinish" >'.
                '<input type="button" onclick="PostData()" value="Add Task">'.
            '</form>';

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
  	task_name VARCHAR(40) NOT NULL,
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