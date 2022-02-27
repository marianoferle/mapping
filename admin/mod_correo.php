<?php 
require('../constantes.php');
if (isset($_POST['em'])){ $email2 = $_POST['em']; }else{ $email2="";}

   $con = mysql_connect(DB_SERVER, DB_USER, DB_PASS);       
   mysql_select_db(DB_NAME, $con);
$ids=2;
$sql = mysql_query("UPDATE user SET email=$email2 WHERE id=$ids",$con); 

  if($sql){    
    echo $email2;
  }else{
    echo "<p>la petici&oacute; ha fallado.</p>";
    echo "<p>".mysql_error()."</p>";
  }

?>

<?php mysql_close($con); ?>
  

