<?php 
require('../constantes.php');
   $tipo=$_POST['t'];
   $id=  $_POST['i_d'];

$tipo_vista1=DB_TIPO;
if($tipo_vista1==1){
   $ct=  $_POST['c_t'];    //web
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
   $ct=  utf8_decode($_POST['c_t']);    //localhost decodifica a iso8859 para guardar (ñ á é...
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

if($tipo=='1'){
$sql = mysql_query("UPDATE $tabla1 SET titulo='{$ct}',autores='{$ca}',link='{$clw}',link_web='{$clweb}',descripcion='{$cd}',genero='{$cg}',continente='{$cc}',pais='{$cp}',ubicacion='{$cu}',anio='{$can}',datos='{$cda}',otros='{$co}',nombre_contribu='{$nomco}',email_contribu='{$emaco}' WHERE id=$id",$con); 
}else if($tipo=='2'){
$sql = mysql_query("UPDATE $tabla2 SET titulo='{$ct}',autores='{$ca}',link='{$clw}',link_web='{$clweb}',descripcion='{$cd}',genero='{$cg}',continente='{$cc}',pais='{$cp}',ubicacion='{$cu}',anio='{$can}',datos='{$cda}',otros='{$co}',nombre_contribu='{$nomco}',email_contribu='{$emaco}' WHERE id=$id",$con); 
}

  if($sql){    
    echo "Exitos";
  }else{
    echo "<p>la petici&oacute; ha fallado.</p>";
    echo "<p>".mysql_error()."</p>";
  }


?>

<?php mysql_close($con); ?>
  






