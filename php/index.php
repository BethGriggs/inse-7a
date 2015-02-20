<?php


echo '<form id="add_task" onsubmit="return false;"">'.
     '<label for="tName">Task Name</label>'.
                '<input type="text" id="tName" name="tName" >'.
                '<label for="eStart">Earliest Start</label>'.
                '<input type="date" id="eStart" class="datepicker" name="eStart" >'.
                '<p id="isDateValid"></p>'.
                '<label for="eFinish">Earliest Finish</label>'.
                '<input type="date" id="eFinish" class="datepicker" name="eFinish" >'.
                '<input type="button" onclick="PostData()" value="Add Task">'.
            '</form>';
?>
