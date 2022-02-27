<?php
/**
 * The db.php file which initiates a connection to the database
 * and gives a global $db variable for access
 * @author Swashata <swashata@intechgrity.com>
 * @uses ezSQL MySQL
 */
/** ------------localhost------------------ */
$dbuser = 'root';
$dbname = 'base_mapping2';
$dbpassword = '';
$dbhost = 'localhost';


//-----------www.video-mapping.com.ar--------------
/*$dbuser = 'mapping';
$dbname = 'mapping';
$dbpassword = 'mapping1';
$dbhost = 'ns16.nkserver.com';*/

//--------------video-mapping.comuf.com----------
/*$dbuser = 'a8230019_mariano';
$dbname = 'a8230019_mariano';
$dbpassword = 'mariano123';
$dbhost = 'mysql5.000webhost.com';*/

//Constantes de video-mapping.comuf.com


/** Stop editing from here, else you know what you are doing ;) */

/** defined the root for the db */
if(!defined('ADMIN_DB_DIR'))
    define('ADMIN_DB_DIR', dirname(__FILE__));

require_once ADMIN_DB_DIR . '/ez_sql_core.php';
require_once ADMIN_DB_DIR . '/ez_sql_mysql.php';
global $db;
$db = new ezSQL_mysql($dbuser, $dbpassword, $dbname, $dbhost);


/*



CREATE DATABASE login_test;
USE login_test;
 
CREATE TABLE `user` (
`id` INT NOT NULL auto_increment,
`username` VARCHAR(50) NOT NULL default '',
`nicename` VARCHAR(255) NOT NULL default '',
`email` VARCHAR(255) NOT NULL default '',
`password` VARCHAR(255) NOT NULL default '',
UNIQUE KEY `user_n` (`username`),
UNIQUE KEY `user_e` (`email`),
    PRIMARY KEY (`id`)
);
 
INSERT INTO `user` (`username`, `nicename`, `email`, `password`)
VALUES (
'swashata', 'Swashata Ghosh', 'abc@domain.com', SHA1('pass')
);







*/

?>