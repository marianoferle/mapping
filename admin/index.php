<?php
include_once 'admin-class.php';
$admin = new itg_admin();
$admin->_authenticate();
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Administrador</title>
        <link href="../css/public.css" media="all" rel="stylesheet" type="text/css" />
        <link href="style_log.css" media="all" rel="stylesheet" type="text/css" />

        <script type="text/javascript" src="../js/pjs/processing.js"></script>

        <script language="javascript" src="../js/jquery-2.1.1.js"></script>  
        <script language="javascript" src="jquery-nuevo-perfil.js"></script>
        <script language="javascript" src="../js/paises_cod.js"></script>

        <script language="javascript" src="../js/jquery2.js"></script>
        <script language="javascript" src="jquery-bus-admin.js"></script>

    <script type="text/javascript">
         $('#list_continente').removeClass("novista");
         $('#list_anio').removeClass("novista");
    </script>

   </head>
<body>
<div id="contenedor">
<div id="perfiles"></div>
<div id="contf">
<!--  ................................... -->
<nav><div id="navv">
  <img id="img_logo" src="../imagenes/lumen_logo2.png" width='180' height='50'/>
<ul>
<li><a href="../index.php" alt="">INTRODUCCI&Oacute;N</a></li>
<li>INFORME</li>
<li>DATOS</li>
<li>CREDITOS</li>
<li class="nav_click"><a href="#" alt="">ADMIN</a></li>
</ul>
</div></nav>
<section>    

<div id="datos_admin">
<fieldset>
    <legend><?php echo $admin->get_nicename(); ?></legend>
    <p>Username: <?php echo $_SESSION['admin_login']; ?></p>
    <p>Email: <?php echo $admin->get_email(); ?></p>
    <input type="button" onclick="javascript:window.location.href='logout.php'" value="logout" />
</fieldset>
</div>


<div id="buscador2">    
<?php include '../incluhtml/form_bus.php'; ?>
<!--<canvas id="pjs2" data-processing-sources="../js/pjs/pjs2.pde" width="500" height="400"></canvas>-->
<ul id="correo_class">
<li>Email para Env&iacute;o de correos electronicos:</li>
<li><input type='text' name="email_para_envio" id='email_envio' value="marianoferle@gmail.com"/></li>
<li><input type='button' name='guardar_correo' value='Guardar' id="guardar_correo" onclick="modificar_correo();" /></li>
</ul>
<!-- ............/busca1......... -->

<div id="busca2">
<div id="admin_sugerencias" class="bot_admin" onclick="buscar_sugerencias_nuevas();">Sugeridos</div>
<div id="admin_nuevo_perfil" class="bot_admin" onclick="perfil_nuevo(2);">Nuevo</div>
</div>

</div><!--  ................................... -->


<?php include '../incluhtml/div_result.php'; ?> 
 <!--  /resultado -->

 </section>       


<footer>
</footer>

<!--  ................................... -->

</div>
</div>
</body>
</html>
