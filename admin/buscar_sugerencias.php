<?php 
require('../constantes.php');

         $con = mysql_connect(DB_SERVER, DB_USER, DB_PASS);       
         mysql_select_db(DB_NAME, $con);   

         $tabla2=DB_BASE2;

         $sql = mysql_query("SELECT * FROM $tabla2 ORDER BY  titulo ASC ",$con); 
        

         $contar = mysql_num_rows($sql);
         $con1=0;  
         
         if($contar == 0){
               echo "No se han encontrado Sugerencias";           
         }else{
                  while($row=mysql_fetch_array($sql)){

                        $id = $row['id'];
                        $link = $row['link'];
                        $link_web = $row['link_web'];
                        $anio = $row['anio']; 
                        $favorito = $row['favorito'];

                        $nomco = $row['nombre_contribu'];
                        $emaco = $row['email_contribu'];

                        mb_ereg_search_init($link,'vimeo');
                        $vim = mb_ereg_search();
                        mb_ereg_search_init($link,'youtube');
                        $you = mb_ereg_search();

                        mb_ereg_search_init($link_web,'http://');
                        $web = mb_ereg_search();

                        $lin="iweb"; 
                        $lin2="0"; 
                        if($vim){$lin="ivid";}
                        if($you){$lin="ivid";}
                        if($web){$lin2="iweb2";}

$tipo2=DB_TIPO;                       
if($tipo2==1){
                        $titulo = $row['titulo'];           //web
                        $autores = $row['autores'];                        
                        $descripcion = $row['descripcion'];
                        $genero = $row['genero'];
                        $continente = $row['continente'];
                        $pais = $row['pais'];
                        $ubicacion = $row['ubicacion'];                                               
                        $datos = $row['datos'];
                        $otros = $row['otros'];                        

}else  if($tipo2==2){        
                        $titulo = utf8_encode($row['titulo']);       // localhost codifica para mostrar (ñ á é...
                        $autores = utf8_encode($row['autores']);                        
                        $descripcion = utf8_encode($row['descripcion']);
                        $genero = utf8_encode($row['genero']);
                        $continente = utf8_encode($row['continente']);
                        $pais = utf8_encode($row['pais']);
                        $ubicacion = utf8_encode($row['ubicacion']);                                               
                        $datos = utf8_encode($row['datos']);
                        $otros = utf8_encode($row['otros']);
}

                        $con1+=1;
                    
                      echo "<div class=\"lista\" id=\"lis_".$id."\" >
                              <div class=\"linkp2\" onclick=\"abrir_list('".$id."')\" onmouseover=\"list_over('".$id."')\"></div>
                              <div class=\"off22\" onclick=\"borrar('".$id."')\"></div>   
                              <ul class=\"noselect ul_list\">
                                    <li class=\"linkp\" onclick=\"perf('2','".$id."','".$titulo."','".$autores."','".$link."','".$link_web."','".$descripcion."','".$genero."','".$continente."','".$pais."','".$ubicacion."','".$anio."','".$datos."','".$otros."','".$favorito."','".$nomco."','".$emaco."');\"><img src='../imagenes/mas_list.png'/></li>
                                    <li class=\"off2\" onclick=\"borrar('".$id."')\"><img src='../imagenes/menos_list.png'/></li> 
                                    <li>".$con1."</li>
                                    <li>".$titulo."</li>
                                    <li>".$autores."</li>  
                                    <li>".$pais."</li>
                                    <li>".$anio."</li>  
                                    <li class=\"$lin\"></li>
                                    <li class=\"$lin2\"></li>
                                    <li style=\"float:right;\" class=\"baseid\">".$id."</li>
                              </ul>
                              <div class=\"info_list noselect\"> </div>
                              <span class=\"dat\">".
                              $id.';'.$titulo.';'.$autores.';'.$link.';'.$link_web.';'.
                              $descripcion.';'.$genero.';'.$continente.';'.$pais.';'.
                              $ubicacion.';'.$anio.';'.$datos.';'.$otros.';'.$nomco.';'.$emaco.';_'.$contar."\n</div>
                              </span>";
              

      

                  }//------while------
            }
              

      
?>

<?php mysql_close($con); ?>


