<?php
 require('constantes.php');
  
        $con = mysql_connect(DB_SERVER, DB_USER, DB_PASS);       
         mysql_select_db(DB_NAME, $con);  

    $tabla1=DB_BASE1; 

    $sql = mysql_query("SELECT * FROM $tabla1",$con);      


         $contar = mysql_num_rows($sql);
             
         if($contar == 0){
               echo "No se han encontrado resultados.";           
         }else{

                        echo $contar;    
        }
   
 
?>


