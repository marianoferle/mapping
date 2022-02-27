<?php 
require('constantes.php');

   $tipo=$_POST["t"];
   $id=$_POST["i"];

$tipo_vista1=DB_TIPO;
if($tipo_vista1==1){      //web

   $nomco= $_POST['n_co'];
   $emaco=  $_POST['e_co'];  
   $ct=  $_POST['c_t'];     
   $ca=  $_POST['c_a']; 
   $clw= $_POST['c_lw'];
   $clweb= $_POST['c_lwe'];
   $cd=  $_POST['c_d']; 
   $cg=  $_POST['c_g'];      
   $cc=  $_POST['c_c'];     
   $cp=  $_POST['c_p']; 
   $cu=  $_POST['c_u']; 
   if(is_numeric($_POST['c_an'])){ $can=$_POST['c_an']; }else{  $can=0; } 
   $cda= $_POST['c_da'];
   $co=  $_POST['c_o'];   

}else if($tipo_vista1==2){

   $nomco= utf8_decode($_POST['n_co']);   //localhost
   $emaco= utf8_decode($_POST['e_co']); 
   if(isset($_POST["c_t"])){  $ct= utf8_decode($_POST['c_t']); }else{   $ct=''; }   
   if(isset($_POST["c_a"])){  $ca= utf8_decode($_POST['c_a']); }else{   $ca=''; }  
   if(isset($_POST["c_lw"])){ $clw=utf8_decode($_POST['c_lw']); }else{  $clw=''; } 
   if(isset($_POST["c_lwe"])){ $clweb=utf8_decode($_POST['c_lwe']); }else{  $clweb=''; } 
   if(isset($_POST["c_d"])){  $cd= utf8_decode($_POST['c_d']); }else{   $cd=''; } 
   if(isset($_POST["c_g"])){  $cg= utf8_decode($_POST['c_g']); }else{   $cg=''; }      
   if(isset($_POST["c_c"])){  $cc= utf8_decode($_POST['c_c']);  }else{  $cc=''; }   
   if(isset($_POST["c_p"])){  $cp= utf8_decode($_POST['c_p']); }else{   $cp=''; } 
   if(isset($_POST["c_u"])){  $cu= utf8_decode($_POST['c_u']); }else{   $cu=''; } 
   if(is_numeric($_POST['c_an'])){ $can=$_POST['c_an']; }else{  $can=0; }
   if(isset($_POST["c_da"])){ $cda=utf8_decode($_POST['c_da']); }else{  $cda=''; } 
   if(isset($_POST["c_o"])){  $co= utf8_decode($_POST['c_o']); }else{   $co=''; }
}


   $con = mysql_connect(DB_SERVER, DB_USER, DB_PASS);       
   mysql_select_db(DB_NAME, $con);

$tabla2=DB_BASE2;

$query = mysql_query("SELECT MAX(id) FROM $tabla2",$con);
$results = mysql_fetch_array($query);
$r_id = $results['MAX(id)'] + 1;

$sql = mysql_query("INSERT INTO $tabla2 (id,titulo,autores,link,link_web,descripcion,genero,continente,pais,ubicacion,anio,datos,otros,nombre_contribu,email_contribu) 
VALUES ('{$r_id}','{$ct}','{$ca}','{$clw}','{$clweb}','{$cd}','{$cg}','{$cc}','{$cp}','{$cu}','{$can}','{$cda}','{$co}','{$nomco}','{$emaco}')",$con); 
     
  if($sql){    
    echo "Exitos";
  }else{
    echo "<p>Error al guardar</p>";
    echo "<p>".mysql_error()."</p>";
  }


?>

