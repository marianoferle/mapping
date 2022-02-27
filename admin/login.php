<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Login</title>

        <link href="../css/public.css" media="all" rel="stylesheet" type="text/css" />
        <link href="style_log.css" media="all" rel="stylesheet" type="text/css" />

        <script language="javascript" src="../js/jquery-2.1.1.js"></script>    
        <script language="javascript" src="jquery-bus-admin.js"></script>

    </head>
<body>
    <body>
    <div id="contenedor">
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
<!--  ................................... -->
<section>
   <form action="login-action.php" method="post" id="form_log">
    <fieldset>
      <legend>Acreditaci&oacute;n</legend>
      <p><label for="username">Username:</label><input type="text" name="username" id="username" value="" /></p>
      <p><label for="password">Password:</label><input type="password" name="password" id="password" value="" /></p>
      <input type="submit" value="Submit" />
      <p><label for="remember"><input type="checkbox" name="remember" id="remember" value="1" />Recordar</label></p>
    </fieldset>
   </form>
</section>       
<!--  ................................... -->
<footer>
</footer>
<!--  ................................... -->
</div>
</div>
</body>
</html>