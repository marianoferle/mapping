<?php 

require('constantes.php');

       $p= $_POST['p'];    

       $con = mysql_connect(DB_SERVER, DB_USER, DB_PASS);       
       mysql_select_db(DB_NAME, $con);   

       $tabla1=DB_BASE1;       
        
       $sql = mysql_query("SELECT pais FROM $tabla1 WHERE pais LIKE '%$p%' ",$con); 
            
       $contar = mysql_num_rows($sql);  
       
       echo json_encode($contar);             

       
?>




