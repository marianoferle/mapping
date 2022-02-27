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
                  while($row=mysql_fetch_array($sql)){        

                        $continente = utf8_encode($row['continente']); 
                        $pais =  utf8_encode($row['pais']);  
                        $anio =  utf8_encode($row['anio']);

                        echo $continente.";".$pais.";".$anio.":";    
                  }
            }
   
 
?>


