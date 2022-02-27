<?php
 require('constantes.php');
$tipo1=DB_TIPO;

  $orden= $_POST['orden'];        

if($tipo1==1){
   if (isset($_POST["v_c"])){ $vc= $_POST['v_c']; }else{ $vc=''; }                //web
   if (isset($_POST["v_p"])){ $vp= $_POST['v_p']; }else{ $vp=''; }  
   if (isset($_POST["v_u"])){ $vu= $_POST['v_u']; }else{ $vu=''; } 
   if (isset($_POST["v_a"])){ $va= $_POST['v_a']; }else{ $va=''; }   
   if (isset($_POST["v_an"])){ $van= $_POST['v_an']; }else{ $van=''; } 
   if (isset($_POST["v_g"])){ $vg= $_POST['v_g']; }else{ $vg=''; }      
   if (isset($_POST["b"])){   $bus= $_POST['b'];  }else{ $bus=''; }   
   if (isset($_POST["v_b"])){ $vb=  $_POST['v_b']; }else{ $vb=''; }  
   if (isset($_POST["v_or"])){ $vor= $_POST['v_or']; }else{ $vor=''; }  

   if (isset($_POST["vcant"])){ $limt= $_POST['vcant']; }else{ $limt=''; }  
   if (isset($_POST["vinic"])){ $inic= $_POST['vinic']; }else{ $inic=''; }  

 }else if($tipo1==2){
   if (isset($_POST["v_c"])){ $vc= utf8_decode($_POST['v_c']); }else{ $vc=''; }  //localhost
   if (isset($_POST["v_p"])){ $vp= utf8_decode($_POST['v_p']); }else{ $vp=''; }  
   if (isset($_POST["v_u"])){ $vu= utf8_decode($_POST['v_u']); }else{ $vu=''; } 
   if (isset($_POST["v_a"])){ $va= utf8_decode($_POST['v_a']); }else{ $va=''; }   
   if (isset($_POST["v_an"])){ $van= $_POST['v_an']; }else{ $van=''; } 
   if (isset($_POST["v_g"])){ $vg= utf8_decode($_POST['v_g']); }else{ $vg=''; }      
   if (isset($_POST["b"])){   $bus= $_POST['b'];  }else{ $bus=''; }   
   if (isset($_POST["v_b"])){ $vb=  $_POST['v_b']; }else{ $vb=''; }  
   if (isset($_POST["v_or"])){ $vor= $_POST['v_or']; }else{ $vor=''; } 

   if (isset($_POST["vcant"])){ $limt= $_POST['vcant']; }else{ $limt=''; }  
   if (isset($_POST["vinic"])){ $inic= $_POST['vinic']; }else{ $inic=''; }        
}

   if(!empty($bus)){
      buscar($bus,$vb,$vg,$vc,$vp,$vu,$va,$van,$vor,$limt,$inic,$orden);
   }else{
      buscar($bus,$vb,$vg,$vc,$vp,$vu,$va,$van,$vor,$limt,$inic,$orden);
   }

function buscar($b,$vb,$g,$c,$p,$u,$a,$an,$vor,$limt,$inic,$orden){
   
   //echo $g;echo $c;echo $p;echo $u;echo $a;

         $con = mysql_connect(DB_SERVER, DB_USER, DB_PASS);       
         mysql_select_db(DB_NAME, $con);  

         $g2=explode(',',$g);

         if($c=='todo'){ $c=''; }
         if($p=='todo'){ $p=''; }
         if($u=='todo'){ $u=''; }
         if($a=='todo'){ $a=''; }
         if($an=='todo'){ $an=''; }else if($an=='0'){ $an=''; }

         $tabla1=DB_BASE1;

         $lnumbus=strlen($b);


//------------------------------------

if($vb==="id"&&is_numeric($b)){ 
  $query = "SELECT * FROM  $tabla1 
           WHERE  $vb LIKE $b
           AND     genero LIKE '%$g2[0]%'
           AND  continente LIKE '%$c%' 
           AND        pais LIKE '%$p%'
           AND   ubicacion LIKE '%$u%' 
           AND     autores LIKE '%$a%' 
           AND        anio LIKE '%$an%'";
}else{
  $query = "SELECT * FROM  $tabla1
           WHERE  $vb LIKE '%$b%'
           AND     genero LIKE '%$g2[0]%'
           AND  continente LIKE '%$c%' 
           AND        pais LIKE '%$p%'
           AND   ubicacion LIKE '%$u%' 
           AND     autores LIKE '%$a%' 
           AND        anio LIKE '%$an%'";
}

if($orden=="az"){  
  $query .="ORDER BY $vor ASC";  
}else if($orden=="za"){
  $query .="ORDER BY $vor DESC";  
}

$sql = mysql_query($query,$con); 
  


//------------------------------------------
   
         $contar = mysql_num_rows($sql);
         $con1=0; 
         if($inic>0){$con1+=$inic;}

                      
         if($contar <= 0){
               echo "No se han encontrado resultados para '<b>".$b."</b>'.";           
         }else{

/*---------------paginacion-----------------------------*/

if($vb==="id"&&is_numeric($b)){ 
   $query2 = "SELECT * FROM  $tabla1
           WHERE  $vb LIKE $b 
           AND     genero LIKE '%$g2[0]%'
           AND  continente LIKE '%$c%' 
           AND        pais LIKE '%$p%'
           AND   ubicacion LIKE '%$u%' 
           AND     autores LIKE '%$a%' 
           AND        anio LIKE '%$an%'";    
}else{ 
   $query2 = "SELECT * FROM  $tabla1
          WHERE  $vb LIKE '%$b%'
           AND     genero LIKE '%$g2[0]%'
           AND  continente LIKE '%$c%' 
           AND        pais LIKE '%$p%'
           AND   ubicacion LIKE '%$u%' 
           AND     autores LIKE '%$a%' 
           AND        anio LIKE '%$an%'"; 
}


if($orden=="az"){  
  $query2 .= "ORDER by $vor ASC LIMIT $inic, $limt"; 
}else if($orden=="za"){
  $query2 .= "ORDER by $vor DESC LIMIT $inic, $limt"; 
}

 $sql2 = mysql_query($query2,$con); 

$contar2 = mysql_num_rows($sql2);



 
/*----------------fin de paginacion busc limit---------------------------*/

                  while($row=mysql_fetch_array($sql2)){

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

                        $lin="0"; 
                        $lin2="0"; 

                        if($vim){$lin="ivid";}
                        if($you){$lin="ivid";}
                        if($web){$lin2="iweb2";}


$tipo2=DB_TIPO;                      
if($tipo2==1){
                        $titulo = $row['titulo'];                      //Web
                        $autores = $row['autores'];                        
                        $descripcion = $row['descripcion'];
                        $genero = $row['genero'];
                        $continente = $row['continente'];
                        $pais = $row['pais'];
                        $ubicacion = $row['ubicacion'];                                               
                        $datos = $row['datos'];
                        $otros = $row['otros'];
                        
}else  if($tipo2==2){
                        $titulo = utf8_encode($row['titulo']);         //localhost
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

                       /*?><script>console.log(<?php echo $tipo ?>);</script><?php                  
                        ?> <script> var pp= "<?php echo $pais ?>"; console.log(cod_pais(pp)); </script> <?php                        
                        $ppais= "<script> document.write(cod_pais(pp)); </script>"; */ 



                      echo "<div class=\"lista\" id=\"lis_".$id."\">
          <div class=\"linkp2\" onclick=\"abrir_list('".$id."')\" onmouseover=\"list_over('".$id."')\"></div>
          <div class=\"off22\" onclick=\"borrar('".$id."')\"></div>   
          
                              <ul class=\"noselect ul_list\">  
                                    <li class=\"linkp\" onclick=\"perf('1','".$id."','".$titulo."','".$autores."','".$link."','".$link_web."','".$descripcion."','".$genero."','".$continente."','".$pais."','".$ubicacion."','".$anio."','".$datos."','".$otros."','".$favorito."','".$nomco."','".$emaco."');\"><img src='imagenes/mas_list.png'/></li>
                                    <li class=\"off2\" onclick=\"borrar('".$id."')\"><img src='imagenes/menos_list.png'/></li>    
                                    <li>".$con1."</li>
                                    <li>".$titulo."</li>
                                    <li>".$autores."</li>  
                                    <li>".$pais."</li>
                                    <li>".$anio."</li>
                                    <li class=\"$lin\"></li>
                                    <li class=\"$lin2\"></li>
                                    <li>".$favorito."</li>
                                    <li style=\"float:right;\" class=\"baseid\">".$id."</li>
                              </ul>         
                              <div class=\"info_list noselect\"></div>
                              <span class=\"dat\">".
                              $id.';'.$titulo.';'.$autores.';'.$link.';'.$link_web.';'.
                              $descripcion.';'.$genero.';'.$continente.';'.$pais.';'.
                              $ubicacion.';'.$anio.';'.$datos.';'.$otros.';'.$favorito.';'.$nomco.';'.$emaco.';_'.$contar."\n</div>
                              </span>";         
                              


/*--------------------------------------------*/ 

                  } //-----while----
           }  //--------if--/else----------------

 }


 



?>





<?php 
/*
  $pdo = new PDO('mysql:host=localhost;dbname=sitepoint', 'root', '*****');
  $opts = $_POST['filterOpts'];
  $qMarks = str_repeat('?,', count($opts) - 1) . '?';
  $statement = $pdo->prepare("SELECT mobile_phone.id, name, model, price FROM mobile_phone INNER JOIN brand ON brand_id = brand.id WHERE name IN ($qMarks)");
  $statement -> execute($opts);
  $results = $statement -> fetchAll(PDO::FETCH_ASSOC);
  $json = json_encode($results);
  echo($json);

  $pdo = new PDO('mysql:host=localhost;dbname=test_database', 'root', '');

  $select = 'SELECT * FROM mobile_phones WHERE TRUE';
  $opts = if(isset($_POST['filterOpts']))? $_POST['filterOpts'] : array('');
   
  if (in_array('samsung', $opts)){ $where .= " AND samsung = 1 "; } 
  if (in_array('iphone', $opts)){  $where .= " AND iphone = 1 "; }
  if (in_array('htc', $opts)){     $where .= " AND htc = 1 ";  }
  if (in_array('lg', $opts)){      $where .= " AND lg = 1 ";  }
  if (in_array('nokia', $opts)){   $where .= " AND nokia = 1 ";  }
 
 
  $sql = $select;
  $statement = $pdo->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll(PDO::FETCH_ASSOC);
  $json = json_encode($results);
  echo($json);
  */
?>

