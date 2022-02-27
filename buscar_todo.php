<?php
 require('constantes.php');

 $tipo_vista1=DB_TIPO;
if($tipo_vista1==1){ 
  if (isset($_POST["v_c"])){  $vc= $_POST['v_c']; }else{  $vc=''; }              //web
   if (isset($_POST["v_p"])){  $vp= $_POST['v_p']; }else{ $vp=''; }  
   if (isset($_POST["v_u"])){  $vu= $_POST['v_u']; }else{  $vu=''; } 
   if (isset($_POST["v_a"])){  $va= $_POST['v_a']; }else{  $va=''; }   
   if (isset($_POST["v_an"])){ $van= $_POST['v_an']; }else{$van=''; } 
}else if($tipo_vista1==2){ 
   if (isset($_POST["v_c"])){ $vc= utf8_decode($_POST['v_c']); }else{ $vc=''; }  //localhost
   if (isset($_POST["v_p"])){ $vp= utf8_decode($_POST['v_p']); }else{ $vp=''; }  
   if (isset($_POST["v_u"])){ $vu= utf8_decode($_POST['v_u']); }else{ $vu=''; } 
   if (isset($_POST["v_a"])){ $va= utf8_decode($_POST['v_a']); }else{ $va=''; }   
   if (isset($_POST["v_an"])){ $van= utf8_decode($_POST['v_an']); }else{ $van=''; } 
}   
         $con = mysql_connect(DB_SERVER, DB_USER, DB_PASS);       
         mysql_select_db(DB_NAME, $con);  

         if($vc=='todo'){ $vc=''; }
         if($vp=='todo'){ $vp=''; }
         if($vu=='todo'){ $vu=''; }
         if($va=='todo'){ $va=''; }
         if($van=='todo'){ $van=''; }

         $tabla1=DB_BASE1;

         $sql = mysql_query("SELECT * FROM $tabla1",$con);  
         $contar = mysql_num_rows($sql);
             
         if($contar == 0){
               echo "";           
         }else{
                  while($row=mysql_fetch_array($sql)){
                    
                    $id = $row['id'];
                    $favoritos = $row['favoritos'];
                    $link = $row['link'];
                    $anio = $row['anio'];                        

if($tipo_vista1==1){                         
                        $titulo = $row['titulo'];
                        $autores = $row['autores'];
                        $descripcion = $row['descripcion'];
                        $genero = $row['genero'];
                        $continente = $row['continente'];
                        $pais = $row['pais'];
                        $ubicacion = $row['ubicacion'];
                        $datos = $row['datos'];
                        $otros = $row['otros'];
                        
}else if($tipo_vista1==2){ 
                        $titulo = utf8_encode($row['titulo']);
                        $autores = utf8_encode($row['autores']);
                        $descripcion = utf8_encode($row['descripcion']);
                        $genero = utf8_encode($row['genero']);
                        $continente = utf8_encode($row['continente']);
                        $pais = utf8_encode($row['pais']);
                        $ubicacion = utf8_encode($row['ubicacion']);
                        $datos = utf8_encode($row['datos']);
                        $otros = utf8_encode($row['otros']);
                      
                        /*$titulo = utf8_decode($titulo);
                        $autores = utf8_decode($autores);
                        $descripcion = utf8_decode($descripcion);
                        $genero = utf8_decode($genero);
                        $continente = utf8_decode($continente);
                        $pais = utf8_decode($pais);
                        $ubicacion = utf8_decode($ubicacion);               
                        $datos = utf8_decode($datos);
                        $otros = utf8_decode($otros);*/
}
                                  
                        //$result = "<script> document.write(result) </script>";
                        //echo "result = $result";  
 


                        echo 
                        $id.";".
                        $titulo.";".
                        $autores.";".
                        $link.";".
                        $descripcion.";".
                        $genero.";".
                        $continente.";".
                        $pais.";".
                        $ubicacion.";".
                        $anio.";".
                        $datos.";".
                        $otros.";".
                        $favoritos."\n";  



                  }
      }
   


    
       
?>

