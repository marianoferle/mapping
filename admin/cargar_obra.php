<?php 
require('../constantes.php');
   $tipo=$_POST["t"];
   $id=$_POST["i"];

$tipo_vista1=DB_TIPO;
if($tipo_vista1==1){
   $ct=  $_POST['c_t'];  //web 
   $ca=  $_POST['c_a']; 
   $clw= $_POST['c_lw'];
   $clweb= $_POST['c_lwe'];
   $cd=  $_POST['c_d']; 
   $cg=  $_POST['c_g'];      
   $cc=  $_POST['c_c'];     
   $cp=  $_POST['c_p']; 
   $cu=  $_POST['c_u']; 
   $can= $_POST['c_an']; 
   $cda= $_POST['c_da'];
   $co=  $_POST['c_o'];

   $nomco= $_POST['n_co'];
   $emaco=  $_POST['e_co'];

}else if($tipo_vista1==2){
   $ct=  utf8_decode($_POST['c_t']);    //localhost
   $ca=  utf8_decode($_POST['c_a']); 
   $clw= utf8_decode($_POST['c_lw']);
   $clweb= utf8_decode($_POST['c_lwe']);
   $cd=  utf8_decode($_POST['c_d']); 
   $cg=  utf8_decode($_POST['c_g']);      
   $cc=  utf8_decode($_POST['c_c']);     
   $cp=  utf8_decode($_POST['c_p']); 
   $cu=  utf8_decode($_POST['c_u']); 
   $can= utf8_decode($_POST['c_an']); 
   $cda= utf8_decode($_POST['c_da']);
   $co=  utf8_decode($_POST['c_o']);

   $nomco= utf8_decode($_POST['n_co']);
   $emaco=  utf8_decode($_POST['e_co']);
 }



   $con = mysql_connect(DB_SERVER, DB_USER, DB_PASS);       
   mysql_select_db(DB_NAME, $con);

$tabla1=DB_BASE1;
$tabla2=DB_BASE2;
//$tabla3=DB_BASE3;

$query = mysql_query("SELECT MAX(id) FROM $tabla1",$con);
$results = mysql_fetch_array($query);
$r_id = $results['MAX(id)'] + 1;

if($tipo=='2'){ $delet=mysql_query("DELETE FROM $tabla2 WHERE id=$id",$con); }

/*-------sql contribuciones--------*/
/*
$query_contribu = mysql_query("SELECT MAX(id) FROM $tabla3",$con);
$results_contribu = mysql_fetch_array($query_contribu);
$r_id_contribu = $results_contribu['MAX(id)'] + 1;

$sql_contribu = mysql_query("INSERT INTO $tabla3 (id,nombre_contribu,email_contribu,obra_contribu) 
VALUES ('{$r_id_contribu}','{$nomco}','{$emaco}','{$r_id}')",$con); 
*/
/*---------------*/

$sql = mysql_query("INSERT INTO $tabla1 (id,titulo,autores,link,link_web,descripcion,genero,continente,pais,ubicacion,anio,datos,otros,nombre_contribu,email_contribu) 
VALUES ('{$r_id}','{$ct}','{$ca}','{$clw}','{$clweb}','{$cd}','{$cg}','{$cc}','{$cp}','{$cu}','{$can}','{$cda}','{$co}','{$nomco}','{$emaco}')",$con); 


  if($sql){    
    echo "Exitos".$r_id;
  }else{
    echo "<p>La creación del tema ha fallado.</p>";
    echo "<p>".mysql_error()."</p>";
  }


?>

<?php mysql_close($con); ?>
  