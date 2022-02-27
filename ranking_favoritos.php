<?php
 require('constantes.php');
$tipo1=DB_TIPO;


   //echo $g;echo $c;echo $p;echo $u;echo $a;

         $con = mysql_connect(DB_SERVER, DB_USER, DB_PASS);       
         mysql_select_db(DB_NAME, $con);  


$tabla1=DB_BASE1;

$vor="favorito";
$limt=10;
$inic=0;
$orden="az";


/*---------------paginacion-----------------------------*/

$query2 = "SELECT * FROM  $tabla1 ORDER by favorito DESC LIMIT $inic, $limt";    


$sql2 = mysql_query($query2,$con); 
$contar2 = mysql_num_rows($sql2);

 
/*----------------fin de paginacion busc limit---------------------------*/

                  while($row=mysql_fetch_array($sql2)){

                        $id = $row['id'];
                        $link = $row['link'];
                        $link_web = $row['link_web'];
                        $anio = $row['anio']; 
                        $favorito = $row['favorito'];
                        
                        
                        mb_ereg_search_init($link,'vimeo');
                        $vim = mb_ereg_search();
                        mb_ereg_search_init($link,'youtube');
                        $you = mb_ereg_search();
                        
                        mb_ereg_search_init($link_web,'http://');
                        $web1 = mb_ereg_search();
                        mb_ereg_search_init($link_web,'https://');
                        $web2 = mb_ereg_search();

                        $lin="0"; 
                        $lin2="0"; 

                        if($vim){$lin="ivid";}
                        if($you){$lin="ivid";}

                        if($web1){$lin2="iweb";}
                        if($web2){$lin2="iweb";}
                                           

                     
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

                        $nomco = $row['nombre_contribu'];
                        $emaco = $row['email_contribu'];
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

                        $nomco = utf8_encode($row['nombre_contribu']);
                        $emaco = utf8_encode($row['email_contribu']);
}


 
                      echo "<div class=\"perfil_rank\" id=\"lis_rank_".$id."\"> 
                      
                                    <div class=\"fav_ranking\">
                                      <p><b>".$favorito."</b></p>
                                      <img src=\"imagenes/star_iconb.png\" width=\"35px\" height=\"35px\">       
                                    </div>
                                   
                                    <h2>".$titulo."</h2>
                                    <h3>".$autores."</h3>
                                    <h1>".$anio."</h1>  
                                    ";
                                    
                        if($lin=="ivid"){
                          echo "<iframe class=\"vid\" src=".$link." frameborder=\"0\" allowfullscreen></iframe>";
                        }

                        if($lin2=="iweb"){
                          echo "<div class=\"ilink\" onclick=\"webiframe('".$link_web."')\">        
                                      <img src=\"imagenes/links.png\" width=\"25px\" height=\"25px\">
                                </div>";
                        }
                                   
                                   
                        echo "</div>";                                   


/*--------------------------------------------*/ 

 } //-----while----

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

