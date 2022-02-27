<?php 
require('constantes.php');

 $tipo_vista1=DB_TIPO;


         $con = mysql_connect(DB_SERVER, DB_USER, DB_PASS);       
         mysql_select_db(DB_NAME, $con);   
         
         $tabla1=DB_BASE1;

         $c="";
         $sql = mysql_query("SELECT * FROM $tabla1 WHERE continente LIKE '%$c%' ORDER BY id ASC",$con);  

         $c1="africa";
         $sql1 = mysql_query("SELECT * FROM $tabla1 WHERE continente LIKE '%$c1%' ORDER BY id ASC",$con);

         $c2="america";
         $sql2 = mysql_query("SELECT * FROM $tabla1 WHERE continente LIKE '%$c2%' ORDER BY id ASC",$con); 

         $c3="asia";
         $sql3 = mysql_query("SELECT * FROM $tabla1 WHERE continente LIKE '%$c3%' ORDER BY id ASC",$con); 

         $c4="europa";
         $sql4 = mysql_query("SELECT * FROM $tabla1 WHERE continente LIKE '%$c4%' ORDER BY id ASC",$con); 

         $c5="oceania";
         $sql5 = mysql_query("SELECT * FROM $tabla1 WHERE continente LIKE '%$c5%' ORDER BY id ASC",$con);       
   
 
         $contar = mysql_num_rows($sql);
         $contar1 = mysql_num_rows($sql1);
         $contar2 = mysql_num_rows($sql2);
         $contar3 = mysql_num_rows($sql3);
         $contar4 = mysql_num_rows($sql4);
         $contar5 = mysql_num_rows($sql5);



if($contar == 0){
               echo "No se han encontrado resultados";           
}else{
 
   echo $contar.";".$contar1.";".$contar2.";".$contar3.";".$contar4.";".$contar5.";";   
 


}//-----------if/else------------
?>
