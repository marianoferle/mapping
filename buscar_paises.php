<?php 
require('constantes.php');
$tipo_vista1=DB_TIPO;
if($tipo_vista1==1){ 
    if(isset($_POST["c"])){ $c= $_POST['c']; }else{ $c=''; }              //web
}else if($tipo_vista1==2){ 
    if(isset($_POST["c"])){ $c=utf8_decode($_POST['c']); }else{ $c=''; } //localhost
}

        if($c=='todo'){ $c=''; }

        $con = mysql_connect(DB_SERVER, DB_USER, DB_PASS);       
        mysql_select_db(DB_NAME, $con);   

        $tabla1=DB_BASE1;       
        
         $sql = mysql_query("SELECT DISTINCT pais FROM $tabla1 WHERE continente LIKE '%$c%' ORDER BY  pais ASC ",$con); 
            
         $contar = mysql_num_rows($sql);  

         if($contar == 0){
               echo "No se han encontrado resultados.";           
         }else{
                 
                  while($row=mysql_fetch_array($sql)){   

if($tipo_vista1==1){ 
    $pais = $row['pais'];              //web  
}else if($tipo_vista1==2){ 
    $pais = utf8_encode($row['pais']); //localhost  }    
}
            
                  echo $pais.";";             


            
          }//----while
      } //----if


       
?>




