<?php

if (isset($_POST['n'])){ $nombre = $_POST['n']; }else{ $nombre="";}
if (isset($_POST['e'])){ $email = $_POST['e']; }else{ $email="";}
if (isset($_POST['m'])){ $mensaje = $_POST['m']; }else{ $mensaje="";}
if (isset($_POST['em'])){ $email2 = $_POST['em']; }else{ $email2="";}


$mail=$email2;


$message = 
"nombre: ".$nombre.
"\n email: ".$email.
"\n mensaje: ".$mensaje.
"."; 


mail($mail,"LUMEN",$message);
 
echo "Consulta enviada con &eacute;xito!"
?> 






