 <?php 
require('../constantes.php');

   $id=$_POST['i'];  

   $con = mysql_connect(DB_SERVER, DB_USER, DB_PASS);       
   mysql_select_db(DB_NAME, $con);

  $tabla2=DB_BASE2;
  $sql=mysql_query("DELETE FROM $tabla2 WHERE id=$id",$con);

  if($sql){    
    echo "Exitos";
  }else{
    echo "<p>La eliminacion a Fallado.</p>";
    echo "<p>".mysql_error()."</p>";
  }


?>

<?php mysql_close($con); ?>
  