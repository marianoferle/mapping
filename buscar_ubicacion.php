<?php
require('constantes.php');
        
$tipo_vista1=DB_TIPO;
if($tipo_vista1==1){  
         if (isset($_POST["c"])){ $c= $_POST['c']; }else{ $c=''; }  //web
         if (isset($_POST["p"])){ $p= $_POST['p']; }else{ $p=''; } //web
}else if($tipo_vista1==2){ 
         if (isset($_POST["c"])){ $c= utf8_decode($_POST['c']); }else{ $c=''; }  //localhost
         if (isset($_POST["p"])){ $p= utf8_decode($_POST['p']); }else{ $p=''; }  //localhost
}

         if($p=='todo'){ $p=''; }
         if($c=='todo'){ $c=''; }

         $con = mysql_connect(DB_SERVER, DB_USER, DB_PASS);       
         mysql_select_db(DB_NAME, $con); 
         
         $tabla1=DB_BASE1;

         $sql = mysql_query("SELECT DISTINCT ubicacion FROM $tabla1 WHERE pais LIKE '%$p%' AND continente LIKE '%$c%' ORDER BY  ubicacion ASC ",$con);       
         $contar = mysql_num_rows($sql);             
         if($contar == 0){
               echo "No se han encontrado resultados para '<b>".$p."</b>'.";           
         }else{
                  while($row=mysql_fetch_array($sql)){                   
                       

if($tipo_vista1==1){     
   $ubicacion = $row['ubicacion'];               //web
}else if($tipo_vista1==2){ 
   $ubicacion = utf8_encode($row['ubicacion']);  //localhost
}
                        echo "<option value=\"$ubicacion\">".$ubicacion."</option>";    
                  }
            }

        
 mysqli_close($con);  
       
?>




