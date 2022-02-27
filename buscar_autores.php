<?php
require('constantes.php');
      
$tipo_vista1=DB_TIPO;
if($tipo_vista1==1){ 
    if (isset($_POST["c"])){ $c= $_POST['c']; }else{ $c=''; }  //web
    if (isset($_POST["p"])){ $p= $_POST['p']; }else{ $p=''; } 
    if (isset($_POST["u"])){ $u= $_POST['u']; }else{ $u=''; } 

}else if($tipo_vista1==2){       
    if (isset($_POST["c"])){ $c= utf8_decode($_POST['c']); }else{ $c=''; } //localhost
    if (isset($_POST["p"])){ $p= utf8_decode($_POST['p']); }else{ $p=''; } 
    if (isset($_POST["u"])){ $u= utf8_decode($_POST['u']); }else{ $u=''; } 
}

         $con = mysql_connect(DB_SERVER, DB_USER, DB_PASS);       
         mysql_select_db(DB_NAME, $con);    

           if($c=='todo'){ $c=''; }
           if($p=='todo'){ $p=''; }
           if($u=='todo'){ $u=''; }

          $tabla1=DB_BASE1;
 
         $sql = mysql_query("SELECT DISTINCT autores FROM $tabla1
                               WHERE continente LIKE '%$c%'
                                AND        pais LIKE '%$p%'  
                                AND   ubicacion LIKE '%$u%' 
                                ORDER BY  autores ASC ",$con);    

         $contar = mysql_num_rows($sql);
             
         if($contar == 0){
               echo "No se han encontrado resultados para '<b></b>'.";           
         }else{
                  while($row=mysql_fetch_array($sql)){    
                        
            
if($tipo_vista1==1){ 
   $autores = $row['autores']; }              //web
else if($tipo_vista1==2){ 
    $autores = utf8_encode($row['autores']);  //localhost
}                        
                        echo "<option value=\"$autores\">".$autores."</option>";    
                  }
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

