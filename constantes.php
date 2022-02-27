<?php

//Constantes de base de datos
$tip=2;
if($tip==1){
	define("DB_SERVER", "ns16.nkserver.com");
    define("DB_USER", "mapping");
    define("DB_PASS", "mapping1");
    define("DB_NAME", "mapping");
}else if($tip==2){
    define("DB_SERVER", "localhost");
	define("DB_USER", "root");
	define("DB_PASS", "");
	define("DB_NAME", "base_mapping2");
}

/*else if($tip==3){
    //Constantes de video-mapping.comuf.com
	define("DB_SERVER","mysql5.000webhost.com");
	define("DB_USER", "a8230019_mariano");
	define("DB_PASS", "mariano123");
	define("DB_NAME", "a8230019_mariano");
}*/

/*define("DB_SERVER", "mysql14.000webhost.com");
define("DB_USER", "a8305122_mariano");
define("DB_PASS", "mariano123");
define("DB_NAME", "a8305122_mariano");*/

define("DB_BASE1", "base1b");
define("DB_BASE2", "base2");
define("DB_BASE3", "base3");
define("DB_TIPO",2);

?>