<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
 <title>Video-Mapping</title>
  
<!-- .-.-.-.-.-.-.-.-.-.-.-.-.-.css.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-. -->
  <link href="css/animation.css" media="all" rel="stylesheet" type="text/css" />
  <link href="css/public.css" media="all" rel="stylesheet" type="text/css" />
  <link href="admin/style_log.css" media="all" rel="stylesheet" type="text/css" />

<!-- .-.-.-.-.-.-.-.-.-.-.-.-.-.processingjs y p5js-.-.-.-.-.-.-.-.-.-.-.-. -->
  <script type="text/javascript" src="js/pjs/processing.js"></script>
  <script language="javascript" src="js/p5/p5.js"></script>
  <!--<script language="javascript" src="../addons/p5.sound.js"></script>-->
  <script language="javascript" src="js/p5/p5.dom.js"></script>
  <script language="javascript" src="js/sketch.js"></script> 
<!-- .-.-.-.-.-.-.-.-.-.-.-.-.-.jquery-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-. -->
  <script language="javascript" src="js/jquery-2.1.1.js"></script>    
  <script language="javascript" src="js/jquery2.js"></script>
  <script language="javascript" src="js/jquery.js"></script>
  <script language="javascript" src="js/paises_cod.js"></script>
  <script language="javascript" src="admin/jquery-nuevo-perfil.js"></script>
 <!-- ........................................................................ -->

<!-- .-.-.-.-.-.-.-.-.-.-.-.-.-.jquery mapa-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- -->
  <link href="jqvmap/jqvmap.css" media="screen" rel="stylesheet" type="text/css" />   
  <script src="jqvmap/data/jquery.vmap.sampledata.js" type="text/javascript"></script>
  <script src="jqvmap/jquery.vmap.js" type="text/javascript"></script>
  <script src="jqvmap/maps/jquery.vmap.world.js" type="text/javascript"></script>
  <script src="jqvmap/maps/continents/jquery.vmap.africa.js" type="text/javascript"></script>
  <script src="jqvmap/maps/continents/jquery.vmap.asia.js" type="text/javascript"></script>
  <script src="jqvmap/maps/continents/jquery.vmap.australia.js" type="text/javascript"></script>
  <script src="jqvmap/maps/continents/jquery.vmap.europe.js" type="text/javascript"></script>
  <script src="jqvmap/maps/continents/jquery.vmap.north-america.js" type="text/javascript"></script>
  <script src="jqvmap/maps/continents/jquery.vmap.south-america.js" type="text/javascript"></script>
  
  <script src="js/jquery.transit.min.js" type="text/javascript"></script>

  
<?php  
if(isset($_GET['m'])){  $maps=$_GET['m'];  }else{  $maps='"world_es"'; }
if(isset($_GET['t'])){  $tips=$_GET['t'];  }else{  $tips='0'; }
$maps2="0";
$mm=0;
if($maps=="america"){ $mm=1; $maps='"south-america_en"'; $maps2='"north-america_en"';}
?>

<script type="text/javascript">
$(document).ready(function(){
  function getProcessingSketchId () { return 'pjs'; }

  $('#list_continente').addClass("novista");
  //$('#list_anio').addClass("novista");

//$.each(sample_data, function(index, value){ sample_data['ar']="0.0"; });

/*var s_data={};
$.each(sample_data, function(index,value){    
   var vals="";
   var Datu={p:index};
   $.ajax({type:"POST",url:"buscar_total_por_pais.php",data:Datu,dataType:"json",
      beforeSend:function(){}, error:function(){}, success:function(data){  
           s_data[index]=data;           
      }
   });
});*/

$("#vmap").css({width:'500px'});

if(<?php echo $mm; ?>==1){

  $("#vmap").css({width:'250px'});
  $("#vmap2").css({width:'250px',display:"block"});

jQuery('#vmap2').vectorMap({
    map: <?php echo $maps2; ?>,
    backgroundColor: '#000',
    borderColor: '#ffffff',
    borderOpacity: 1.0,
    borderWidth: 0.5,
    color: '#ffffff',
    enableZoom: true,
    hoverColor: '#ffffff',
    hoverOpacity: 0.7,
    normalizeFunction: 'polynomial',    
    selectedColor: '#ffffff',
    scaleColors: ['#5769BF','#031155'],
    selectedRegion:false,
    showTooltip: true,
    values:sample_data,
    onRegionClick: function(element, code, region){code=code.toUpperCase(); sel_region(code); }
});  
}

jQuery('#vmap').vectorMap({
    map: <?php echo $maps; ?> ,
    backgroundColor: '#000',
    borderColor: '#ffffff',
    borderOpacity: 1.0,
    borderWidth: 0.5,
    color: '#ffffff',
    enableZoom: true,
    hoverColor: '#ffffff',
    hoverOpacity: 0.7,
    normalizeFunction: 'polynomial',    
    selectedColor: '#ffffff',
    scaleColors: ['#5769BF','#031155'],
    selectedRegion:false,
    showTooltip: true,
    values:sample_data,
    onRegionClick: function(element, code, region){code=code.toUpperCase(); sel_region(code); }
});

  if(<?php echo $tips; ?>=='0'){  $("select[name=continente] option[value='todo']").prop('selected','selected').trigger('change'); $("#cont0 a").addClass("c_on");  }else 
  if(<?php echo $tips; ?>=='1'){  $("select[name=continente] option[value='africa']").prop('selected','selected').trigger('change'); $("#cont1 a").addClass("c_on");   }else 
  if(<?php echo $tips; ?>=='2'){  $("select[name=continente] option[value='america']").prop('selected','selected').trigger('change'); $("#cont2 a").addClass("c_on");  }else 
  if(<?php echo $tips; ?>=='3'){  $("select[name=continente] option[value='asia']").prop('selected','selected').trigger('change'); $("#cont3 a").addClass("c_on");  }else  
  if(<?php echo $tips; ?>=='4'){  $("select[name=continente] option[value='europa']").prop('selected','selected').trigger('change'); $("#cont4 a").addClass("c_on");  }else
  if(<?php echo $tips; ?>=='5'){  $("select[name=continente] option[value='oceania']").prop('selected','selected').trigger('change'); $("#cont5 a").addClass("c_on");  }

});
</script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-55115781-1', 'auto');
  ga('send', 'pageview');

</script>

</head>

<body>
  <div id="resultado_php"></div>
<div id="new_pag"> <div id="cont_newpag">   </div>  </div>

<div id="contenedor" class="container-fluid" >
<div id="web_iframe"> </div>
<div id="perfiles"> </div>
<!--  ................................... -->

<nav><div id="navv" class="nav_fijo">
<img id="img_logo" src="imagenes/lumen_logo2.png" width='220' height='60'/>
<ul>
  <li onclick="new_pag_('1')" class="nav_click">INTRODUCCI&Oacute;N</li>
  <li onclick="new_pag_('2')">INFORME</li>
  <li onclick="new_pag_('3')">DATOS</li>
  <li onclick="new_pag_('4')">CONTACTOS</li>
  <li><a href="admin/index.php" alt="">ADMIN</a></li>
</ul>
</div></nav>
<!--  ................................... -->

<div id="contf">

<!--  ................................... -->

<section>
<div id="buscador1">

<div id="selec_cont">
  <div id="vmap"></div>
  <div id="vmap2"></div>

<?php  
$m1='"world_es"'; $m2='"africa_en"'; $map3y4='america'; $m3='"north-america_en"'; $m4='"south-america_en"';
$m5='"asia_en"'; $m6='"europe_en"'; $m7='"australia_en"';
?>
<div id="botones_cont">
<div id="cont0" class="conts"><a class="c_bot" href='index.php?m=<?php echo $m1 ?>&t=0'>Global</a></div>
<div id="cont1" class="conts"><a class="c_bot" href='index.php?m=<?php echo $m2 ?>&t=1'>Africa</a></div>
<div id="cont2" class="conts"><a class="c_bot" href='index.php?m=<?php echo $map3y4 ?>&t=2'>Am&eacute;rica</a></div>
<div id="cont3" class="conts"><a class="c_bot" href='index.php?m=<?php echo $m5 ?>&t=3'>Asia</a></div>
<div id="cont4" class="conts"><a class="c_bot" href='index.php?m=<?php echo $m6 ?>&t=4'>Europa</a></div>
<div id="cont5" class="conts"><a class="c_bot" href='index.php?m=<?php echo $m7 ?>&t=5'>Ocean&iacute;a</a></div>
<div id="tit_mas_buscador">+</div>
</div>

<?php include 'incluhtml/form_bus.php'; ?> 


</div> <!-- ,.,.,,.,.,.,.,.,.,.,.,.,.,.,.,,.,., -->

<div id="vtime">      
<canvas id="pjs" data-processing-sources="js/pjs/pjs.pde" width="500" height="500"></canvas>
</div>

</div><!-- ,.,.,,.,.,buscador1.,.,.,.,.,.,.,.,.,.,,.,., -->



<!--<div id="busca1"></div>-->


<!--  ................................... -->
<div id="busca2">
<div id="admin_nuevo_perfil2" class="bot_admin" onclick="perfil_nuevo(1);">Sugerir Obra</div>
</div>

<?php include 'incluhtml/div_result.php'; ?>
 <!--  /resultado -->

</section>

<!--  ................................... -->

<footer>

</footer>

<!--  ................................... -->

</div>
</div>






</body>
</html>
