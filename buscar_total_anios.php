<?php
require('constantes.php');

         $con = mysql_connect(DB_SERVER, DB_USER, DB_PASS);       
         mysql_select_db(DB_NAME, $con);  

         $tabla1=DB_BASE1;

         $sql = mysql_query("SELECT DISTINCT anio FROM $tabla1 ORDER BY anio ASC",$con);  
        
         $sql2 = mysql_query("SELECT anio FROM $tabla1 ORDER BY anio ASC",$con);        

         $contar = mysql_num_rows($sql2);
             

          while($row=mysql_fetch_array($sql)){ 
            $anio = $row['anio'];   
            echo $anio."_,";   
          }
         while($row2=mysql_fetch_array($sql2)){ 
            $anio2 = $row2['anio'];   
            echo $anio2.";";   
          }

     


  
?>

