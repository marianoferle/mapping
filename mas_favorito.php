<?php 

function getRealIP() {
 foreach (array('HTTP_CLIENT_IP',
                   'HTTP_X_FORWARDED_FOR',
                   'HTTP_X_FORWARDED',
                   'HTTP_X_CLUSTER_CLIENT_IP',
                   'HTTP_FORWARDED_FOR',
                   'HTTP_FORWARDED',
                   'REMOTE_ADDR') as $key){
        if (array_key_exists($key, $_SERVER) === true){
            foreach (explode(',', $_SERVER[$key]) as $IPaddress){
                $IPaddress = trim($IPaddress); // Just to be safe

                if (filter_var($IPaddress,
                               FILTER_VALIDATE_IP,
                               FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)
                    !== false) {

                    return $IPaddress;
                }
            }
        }
    }
}


require('constantes.php');

   $id=$_POST["id"];
   $valor=$_POST["val"];

    $ip=getRealIP();

   $con = mysql_connect(DB_SERVER, DB_USER, DB_PASS);       
   mysql_select_db(DB_NAME, $con);

$tabla1=DB_BASE1;

$query=mysql_query("SELECT * FROM $tabla1 WHERE id=$id ",$con);

while($row=mysql_fetch_array($query)){   
      
      $favorito = $row['favorito'];
      $fav_ip = $row['favorito_ips'];  

     $ips = explode(",", $fav_ip);
     $repet=false;

     for($i=0;$i<count($ips);$i++){
         if($ip==$ips[$i]){ $repet=true; }
     }

     if($repet){
        echo " Gracias, ya h&aacute; votado.&nbsp;&nbsp;&nbsp;<b>".$favorito."</b>";
     }else{         
        $val = $favorito+1; 
        $ip2=$ip.",".$fav_ip;  
        $query2 = mysql_query("UPDATE $tabla1 SET favorito='{$val}',favorito_ips='{$ip2}' WHERE id=$id",$con); 
        if($query2){ echo "Gracias por su voto! &nbsp;&nbsp;&nbsp; <b>".$val."</b>"; }
     }
  
}

?>

