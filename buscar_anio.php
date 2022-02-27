<?php
require('constantes.php');

         $con = mysql_connect(DB_SERVER, DB_USER, DB_PASS);       
         mysql_select_db(DB_NAME, $con);  

         $tabla1=DB_BASE1;

         $sql = mysql_query("SELECT DISTINCT anio FROM $tabla1 ORDER BY anio ASC",$con);       

         $contar = mysql_num_rows($sql);
             
         if($contar == 0){
               echo "No se han encontrado resultados.";           
         }else{
                  while($row=mysql_fetch_array($sql)){
                        
   $tipo_vista1=DB_TIPO;

      $anio = $row['anio'];   //localhost
                        
                        echo "<option value=\"$anio\">".$anio."</option>";    
                  }
            }


       
?>




