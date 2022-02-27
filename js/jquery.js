var per_sec=[];
var reg_sel;

var result=[];
var sel_on=false;
var rsel="todo";
var cli_s=['continente','pais','ubicacion','autor','anio'];

var v_gen;
var v_cont;
var v_pa;
var v_ubi;
var v_aut;
var v_ani=0;
var v_bus;
var busque;
var v_ord;
var valor_inicio=0;
var valor_cantidad=50;
var or_den="az";

var tipodeorden="az";
var w_iframe=false;

var over_bot=false;
var gallery_fav=false;

var cantidad_buscada=0;

$(document).ready(function(){

        $('input:radio[name=bus][value=titulo]').attr('checked', true);    
        var s_g = sel_genero(); 
        var r_bu= $('input:radio[name=bus]:checked').val();             

        v_ord="titulo";
        valor_inicio=0;
        valor_cantidad=50;
   
        w_iframe=false;      
 

        totaln(); 
        list_total_obras(); 
        list_total_anios();

   /* var str = "";
    $("select[name:continente] option:selected").each(function(){ 
        str += $(this).text();
        console.log(str);
    });*/
       
//---------------select-menu---------------------  

$("select[name=continente]").on('change',function(){

  var vs1=$(this).val();

 /* $('.conts a').removeClass( "c_on");
  if(vs1=='todo'){     $('#cont0 a').addClass( "c_on");  }else 
  if(vs1=='africa'){   $('#cont1 a').addClass( "c_on");  }else 
  if(vs1=='america_nor'){  $('#cont2 a').addClass( "c_on");  }else
  if(vs1=='america_sur'){  $('#cont3 a').addClass( "c_on");  }else  
  if(vs1=='asia'){     $('#cont4 a').addClass( "c_on");  }else
  if(vs1=='europa'){   $('#cont5 a').addClass( "c_on");  }else 
  if(vs1=='oceania'){  $('#cont6 a').addClass( "c_on");  } 
  $('.conts').fadeIn(600);*/
   
  list_paises(); 
  list_ubicacion(); 
  list_autores(); 
  list_anio(); 

  list_total_obras();

  busc(v_ord,0);
 
}); 

$("select[name=pais]").on('change',function(){ 
     list_ubicacion(); 
     list_autores(); 
     list_total_obras(); 
     busc(v_ord,0); 

});  
$("select[name=ubicacion]").on('change',function(){ list_autores(); busc(v_ord,0); });  
$("select[name=autor]").on('change',function(){ busc(v_ord,0); });  
$("select[name=anio]").on('change',function(){ busc(v_ord,0);  }); 
$("input[name=genero]").on('click',function(){ busc(v_ord,0); }); 
$("#busqueda1").keyup(function(e){ busc(v_ord,0); }); //busqueda instantanea al escribir
$("#bot_submit").on('click',function(){ busc(v_ord,0); });   //bot - submit



//-----------------------------------------------

/*
var ct=$('.conts');
$(".conts").on('click',function(e){
  var v=$(this).attr("id");  
  
  if(v=="cont0"){ $("select[name=continente] option[value='todo']").prop('selected','selected').trigger('change'); }
  if(v=="cont1"){ $("select[name=continente] option[value='africa']").prop('selected','selected').trigger('change'); }
  if(v=="cont2"){ $("select[name=continente] option[value='america_nor']").prop('selected','selected').trigger('change'); }
  if(v=="cont3"){ $("select[name=continente] option[value='america_sur']").prop('selected','selected').trigger('change'); }
  if(v=="cont4"){ $("select[name=continente] option[value='asia']").prop('selected','selected').trigger('change'); }
  if(v=="cont5"){ $("select[name=continente] option[value='europa']").prop('selected','selected').trigger('change'); }
  if(v=="cont6"){ $("select[name=continente] option[value='oceania']").prop('selected','selected').trigger('change'); }

//ct.animate({opacity:0.0},500,function(){ $(this).css({display:'none'}); });
});*/

//--------------
$('#svg:not(path)').on('click',function(){ 
  var v=$(this);
  //console.log(v);
  $("select[name=continente] option[value='todo']").prop('selected','selected').trigger('change'); 
  ct.animate({opacity:0.5},500,function(){ $(this).css({display:'block'}); }); 
});


//-----------hover bot nuevo--------------
$('#admin_nuevo_perfil2').hover(function(){
    $(this).animate({top:'15px'},100);
},function(){
    $(this).animate({top:'25px'},500);
});

//-------------------------------

$('#admin_nuevo_perfil2').on('click',function(){ 
 var offy=window.pageYOffset; 
 newpon=true; 
 $('#perfiles').css({display:'block',top:offy});
 $('#perfiles_nuevo').animate({opacity:1.0},500);
});



$("input[name=mas_resultados]").on('click',function(){ list_resultados('mas'); });
$("input[name=menos_resultados]").on('click',function(){ list_resultados('menos'); });

$("input[name=mas_total_resultados]").on('click',function(){ list_resultados('tmas'); });
$("input[name=menos_total_resultados]").on('click',function(){ list_resultados('tmenos'); });


 //$(".lista:nth-child(3) .linkp").trigger("click");

//-------------------------------------

$('.conts').hover(function(e){
$(this).addClass("flipInX animated1").delay(1000).queue(function(){
    $(this).removeClass("flipInX animated1").dequeue();
}); });

//-------------------------------------

$('.or_bot').hover(function(e){
$(this).addClass("flipInX animated1").delay(1000).queue(function(){
    $(this).removeClass("flipInX animated1").dequeue();
}); });

//-------------------------------------

$('.or_bot').click(function(e){
    var ordenV=e.currentTarget.name;
//$(this).addClass("zoomIn animated1").delay(1000).queue(function(){ $(this).removeClass("zoomIn animated1").dequeue();});
   var tipotex="";
   if(tipodeorden=="az"){tipodeorden="za"; tipotex="&#8593;";}
   else if(tipodeorden=="za"){tipodeorden="az"; tipotex="&#8595;";}
   
  $("#tipo_orden").html(tipotex);
  busc(ordenV,0); 
});

//-------------------------------------

var nb1=1;
$('#tit_mas_buscador').click(function(){
    if(nb1==0){nb1=1;}else{nb1=0;}
    if(nb1==0){
      $('#busca1').animate({height:140},1000);
      $('#tit_mas_buscador').html("-Buscar");
    }else{
      $('#busca1').animate({height:20},1000);
      $('#tit_mas_buscador').html("+Buscar");
    }
});

//-------------------------------------

$('#navv li').hover(function(e){
$(this).addClass("flipInX animated1").delay(2000).queue(function(){
    $(this).removeClass("flipInX animated1").dequeue();
}); });


$('#mas_list input').hover(function(e){
$(this).addClass("flipInX animated1").delay(1000).queue(function(){
    $(this).removeClass("flipInX animated1").dequeue();
}); });


//-------------------------------------------------------------------------







}); 
//-----------/ready-----------------------------.-.-.-.-.-..-..-+++++++++++++++++++++++++++++----------



function enviado(){
        var nom =  $('input[name=nombre_email]').val(); 
     var email  =  $('input[name=email_email]').val();              
   var mensaje  =  $('#texto_email').val(); 
    var email2  =  $('input[name=email_para_envio]').val();
        

var formData = {n:nom,e:email,m:mensaje,em:email2};    

$.ajax({type:"POST",url:"send_correo.php",data:formData,dataType:"html",
         beforeSend: function(){ },
         error: function(){ },            
         success: function(data){  
           $("#info_sub").empty();
           $("#info_sub").append(data); 
         },complete:function(){ }
  });     
}


function mover_favoritos(tipo_){  
   var gal_f=$("#galeria_favoritos");
   var galeria=gal_f.position();
   var posmx=event.pageX;
   var resultado=galeria.left;

  if(tipo_==1&&resultado>-1500){ 
        resultado=galeria.left-600;
  }else if(tipo_==2&&resultado<0){ 
        resultado=galeria.left+600;
  }
  gal_f.animate({left:resultado},1000); 
}


function new_pag_(tipo_){  
    $('#cont_newpag').empty();
  if(tipo_!=1){

    if(tipo_==4){ $( "#cont_newpag" ).load( "incluhtml/form.html", function() {   }); }

    $('#new_pag').css({display:'block'});
    var pagy=window.pageYOffset; 
    $("#cont_newpag").css({marginTop:pagy+100});  
    //$("#web_iframe").css({display:"block"}); 
    $("#new_pag").css({opacity:0,display:"block"}).animate({opacity:1.0},500);     
    $('body').css({overflow:'hidden'});
   
 }else{ 

     $('#new_pag').css({display:'none'});
     $('body').css({overflow:'auto'});
 }
}

/*------paises ---------valor---------mapa--------*/

function cantidad_por_paises(i){
      var Datu={p:i};
      $.ajax({type:"POST",url:"buscar_total_por_pais.php",data:Datu,dataType:"json",
         beforeSend:function(){},
         error:function(){},            
         success:function(data){  
              return data;
         }
      }); 
}
//-----------

//----------------busc-----------------
function busc(valor_orden,vinit){       
        v_gen  =  sel_genero();                
        v_cont =  $('select[name=continente] option:checked').val(); 
        v_pa   =  $('select[name=pais] option:checked').val();  
        v_ubi  =  $('select[name=ubicacion] option:checked').val();              
        v_aut  =  $('select[name=autor] option:checked').val(); 
        v_ani  =  $('select[name=anio] option:checked').val();      
        v_bus  =  $('input:radio[name=bus]:checked').val();         //que buscar --> titulo / autor
        busque =  $("#busqueda1").val();    
        v_ord  =  valor_orden;  
        or_den =  tipodeorden;
        var vinic  =  valor_inicio;
        
        if(vinit==0){valor_inicio=0;}
        var vcant  =  valor_cantidad;

        //console.log(or_den);

        if(v_cont=="america_nor"||v_cont=="america_sur"){v_cont="america";}
        
         $("#nav_result .or_bot").removeClass('or_bot_true');
         $("#nav_result .or_bot").addClass('or_bot_false');

         $("input[name="+v_ord+"]").removeClass("or_bot_false");
         $("input[name="+v_ord+"]").addClass("or_bot_true");

      /*  $("#nav_result .or_bot").each(function(){
          $(this).removeClass('or_bot_true');
          $(this).addClass('or_bot_false');
          $("#nav_result .or_bot[name=orden_"+v_ord+"]").addClass('or_bot_true');
          $("#nav_result .or_bot[name=orden_"+v_ord+"]").removeClass('or_bot_false');
        });  */
        
        //console.log(busque,v_bus,v_gen,v_cont,v_pa,v_ubi,v_aut,v_ani); 

        var formData = {orden:or_den,vinic:vinic, vcant:vcant, b:busque, v_b:v_bus, v_g:v_gen, v_c:v_cont, v_p:v_pa, v_u:v_ubi, v_a:v_aut, v_an:v_ani,v_or:v_ord};    

       $.ajax({type:"POST",url:"buscar.php",data:formData,dataType:"html",
         beforeSend: function(){ $("#listas").html("<p align='center'><img src='imagenes/ajax-loader.gif' /></p>"); },
         error: function(){  },            
         success: function(data){   
           borrar_todo();                                                          
           $("#listas").empty();
           $("#listas").append(data); 
           //sel_resultados(data,v_cont,v_pa,v_ubi,v_aut,v_ani); //-------------------
           ver_cantidad(data);    
           //animar_lista();        

         },complete:function(data){ 
           $("#mas_list").show(500);   
                 
         }
      });  

 

} 
//-----/busc----

//-------------------------------------

function busc_favoritos(){
   $.ajax({type:"POST",url:"ranking_favoritos.php",dataType:"html",
         beforeSend: function(){ },
         error: function(){ },            
         success: function(data){                                                           
           $("#galeria_favoritos").empty();
           $("#galeria_favoritos").append(data); 
         }
   });   

}

//-------------------------------------

function open_fav(){
 var hh=$('#listas_favoritos').height();

if(hh<10){ 
  busc_favoritos();  
  $('#listas_favoritos').animate({height:300},1000);
  $("#gal_fav").removeClass( "zoomOutDown animated"); 
  galery_fav=true; 
  $("#tit_fav").html("-Favoritos");
  $("#tit_fav").addClass("tit_shadow"); 
}else{  
  $('#listas_favoritos').animate({height:0},1000);  
  $("#gal_fav").addClass( "zoomOutDown animated"); 
  galery_fav=false; 
  $("#tit_fav").html("+Favoritos");
  $("#tit_fav").removeClass("tit_shadow");
}}

//-----------------------------------------

function animar_lista(){
      var cant_l = $("#listas").children(".lista").length; 
      var list=$('.lista')  
          //list.css({display:'block'});
        
      for(var i=0;i<cant_l;i++){ 
         var idd= list.eq(i);  
         var ii = idd.prop('id');    
         $(ii).css({opacity:0,height:0}).animate({height:20,opacity:1.0},2000);       
         $(ii).addClass("bounce animated2");
         //console.log(ii);
      }               
}


function ver_cantidad(dat){       
   var sd;
   $(".lista .dat").each(function(dat){
       sd=$(this).html().split(';_',dat);
   });   
   if(typeof sd[1]!=="undefined"){
         sd[1]=Number(sd[1]);   
   if(sd[1]>1){
         $('#res_cant').empty().append(sd[1]);
         cantidad_buscada=sd[1];
   }
 }
}

function list_resultados(tip){
       var ctot = $('#res_cant').html();
       if(tip=="tmas"&&ctot>50){valor_inicio=ctot-50;}else       
       if(tip=="tmenos"){valor_inicio=0;}else  
       if(tip=="mas"&&valor_inicio+50<ctot){valor_inicio+=50;}else       
       if(tip=="menos"&&valor_inicio>=50){valor_inicio-=50;}
       $('#mas_list p').empty().append((valor_inicio+1)+" / "+(valor_inicio+50));
       busc(v_ord,1);  
}


//--------------------------------------function processing-------------------------------------------------
/*
function sel_resultados(dat,c,p,u,a,an){
    var lr="";
    $(".lista .dat").each(function(i){
       var sd=$(this).html();
        //console.log(i+'-->'+sd);
        lr+=sd;
    });
    var pjs="pjs";
    Processing.getInstanceById(pjs).cargar_resultados(lr,c,p,u,a,an);
    console.log(lr,c,p,u,a,an);
}

var click_pais=function(reg){ 
     $("select[name=pais] option[value="+reg+"]").prop('selected','selected').trigger("change");
     $("select[name=anio] option[value=todo]").prop('selected','selected').trigger('change');   
     busc(v_ord,0);  
} 

var bt=function(){ bus_pjs('todo','todo','todo','todo','todo'); } 

function bus_pjs(vc,vp,vu,va,van){
        var formData2 = {v_c:vc, v_p:vp, v_u:vu, v_a:va, v_an:van};  

       $.ajax({type: "POST",url:"buscar_todo.php",data:formData2,dataType:"html",
         beforeSend: function(){ $("#listas").html("<p align='center'><img src='imagenes/ajax-loader.gif' /></p>"); },
         error: function(){ alert("error petición ajax"); },            
         success: function(data){  
          //$("#resultado_php").append(console.log(data)); 
           var pjs="pjs";
           Processing.getInstanceById(pjs).cargar_todo(data,vc,vp,vu,va,van);   
         }
      });   
}

//--------------------------------
*/

function sel_region(reg){         
       $("select[name=pais] option[value="+reg+"]").prop('selected','selected').trigger("change");
       $("select[name=anio] option[value=todo]").prop('selected','selected').trigger('change');   
       //busc(v_ord,0);  
}
//---------------------------------------------

//--------------------------------
var pressed_fecha= function(va){
   $("select[name=anio] option[value="+va+"]").prop('selected','selected').trigger("change");  
}


//------------- buscador por mapa ----------------------------

var cargar_total_processing=function(paises){ 
  Processing.getInstanceById("pjs").cargar_list_paises(paises); 
  list_paises_processing();
}


var list_paises_processing=function(){
    $.ajax({type: "POST",url:"buscar_totales.php",dataType:"html",
        beforeSend: function(){  },
        error: function(){  },            
        success: function(data){   
           Processing.getInstanceById("pjs").cargar_totales(data);
        }
    });
}

var totaln=function(){
    $.ajax({type: "POST",url:"total_num.php",dataType:"html",
        beforeSend: function(){  },
        error: function(){  },            
        success: function(data){   
           Processing.getInstanceById("pjs").total_n(data);
        }
    });
}

var cargar_processing=function(){
       Processing.getInstanceById("pjs").cargar(); 
}


var click_cont=function(reg){
     //console.log(reg); 
     if(reg=="africa"){  $(location).attr('href','index.php?m="africa_en"&t=1'); }else
     if(reg=="america"){ $(location).attr('href',"index.php?m="+reg+"&t=2"); }else
     if(reg=="asia"){    $(location).attr('href','index.php?m="asia_en"&t=3'); }else
     if(reg=="europa"){  $(location).attr('href','index.php?m="europe_en"&t=4'); }else
     if(reg=="oceania"){ $(location).attr('href','index.php?m="australia_en"&t=5'); }else
     if(reg=="todo"){    $(location).attr('href','index.php'); }
} 

function list_total_obras(){
    var up_cont=$("select[name=continente]").val();
    var up_p=$("select[name=pais]").val();

    $.ajax({type: "POST",url:"buscar_total_obras.php",dataType:"html",
        beforeSend: function(){  },
        error: function(){ alert("error petición ajax"); },            
        success: function(data){ 
           //$("#resultado_php").append(console.log(data));
           Processing.getInstanceById("pjs").ver_total(data,up_cont,up_p); 
        }
    });
}


function list_total_anios(){
    var up_a =  $('select[name=anio] option:checked').val();      

    $.ajax({type: "POST",url:"buscar_total_anios.php",dataType:"html",
        beforeSend: function(){  },
        error: function(){ alert("error petición ajax"); },            
        success: function(data){ 
           Processing.getInstanceById("pjs").ver_total_anios(data,up_a);  

        }
    });
}


//------------------------------/processing--------------------------------------






//----------perfil------------------------

var np=0;
var nid=[];
function perf(tperf,id,titu,autor,link,link_web,desc,gen,cont,pais,ubic,anio,datos,otros,favorito,nomco,emaco){ 
      
      np+=1;
      if(np>=100){            
           for(var i=0;i<=np;i++){ 
               var nn=nid[i];
               per_sec[nn]=false;
               borrar(nn);              
           }
           np=0;
       }

      /*if($('.perfil').length>=5){ $("#perfiles").empty(); for(var i=0;i<per_sec.length;i++){ borrar(i); } }*/   

    //solo si el id es diferente a los ya abiertos
    if(per_sec[id]!=true){ 

      nid[np]=id;  
      per_sec[id]=true;

       var nv = link.search("vimeo");  
       var ny = link.search("youtube");  
       var ifrm=false;
       if(nv>-1||ny>-1){ ifrm=true; }
            
      var gens; var ind=0; gens=gen.split(',');  jQuery.each(gens, function(i){ ind=i; gens[i]; });
      
      var autore=[]; autore=autor.split(',');
      var conti=[]; conti=cont.split(',');
      var paise=[]; paise=pais.split(',');
      var ubica=[]; ubica=ubic.split(',');
      var linke=[]; linke=link_web.split(','); 
      
      var nweb=[];
      var ifrmweb=[];
    for(var i=0;i<linke.length;i++){      
      nweb[i] = link_web.search("http://");      
      if(nweb<0){ nweb = link_web.search("https://");} 
      ifrmweb[i]=false;
      if(nweb[i]>-1){ ifrmweb[i]=true; }      
    }
       
$("#lis_"+id+" .info_list").append(
  "<div class='perfil' id='perfiles_"+id+"'>"+
    "<div class='ti1'>"+ 
        "<h2>"+titu+"</h2>"+ 
        "<h1>"+anio+"</h1>"+
        "<div class='hgen'></div>"+  
        "<div class='dat1'>"+
        "<div class='haut'>"+autore[0]+"</div>"+        
        "<div class='hcon'>"+cod_cont(conti[0])+"</div>"+
        "<div class='hpais'>"+cod_pais(paise[0])+"</div>"+
        "<div class='hubi'>"+ubica[0]+"</div>"+ 
        "</div>"+ 
        "<div class='dat2'>"+
        "</div>"+
        "<div class='fav_ranking' onclick='mas_favorito("+id+","+favorito+");'>"+
           "<p><b>"+favorito+"</b></p>"+
           "<img src='imagenes/star_icon2b.png' width='35px' height='35px'>"+        
        "</div>"+   
    "</div>"+
      "<div class='ti5'>"+
        "<p>"+desc+"</p>"+
        "<p>"+datos+"</p>"+        
      "</div>"+         
      "<div class='ti4'>"+
      "</div>"+
 "</div>"); 

     $.each(gens, function(i){ $("#lis_"+id+" .info_list .hgen").append("<p>"+gens[i]+"</p>");  });

if(autore.length>1||conti.length>1||paise.length>1){
  $("#lis_"+id+" .ti1 .dat2").css({display:"block"});
  var aa=$.trim(autore[1]);  $("#lis_"+id+" .ti1 .dat2").append("<div class='haut2'>"+aa+"</div>"); 
  var cc=$.trim(conti[1]); $("#lis_"+id+" .ti1 .dat2").append("<div class='hcon2'>"+cod_cont(cc)+"</div>"); 
  var pp=$.trim(paise[1]); $("#lis_"+id+" .ti1 .dat2").append("<div class='hpais2'>"+cod_pais(pp)+"</div>"); 
  var uu=$.trim(ubica[1]); $("#lis_"+id+" .ti1 .dat2").append("<div class='hubi2'>"+uu+"</div>"); 
}    
    if(ifrm){
       $("#perfiles_"+id+" .ti4").append("<iframe class='vid' src="+link+" frameborder='0' allowfullscreen></iframe>");
    }else{
        $("#perfiles_"+id+" .ti4").append("<a href='"+link+"' class='ilink' target='_blank'>"+        
        "<img src='imagenes/bot.png' width='25px' height='25px'></a>");
    }

  for(var i=0;i<ifrmweb.length;i++){   
    if(ifrmweb[i]){      
    //$("<a>").addClass('ilink').attr('href', '').attr('target','_blank').on('click', function(){ webiframe(link_web) })
      $("#perfiles_"+id+" .ti1 .haut").append($("<div>").addClass('ilink').on('click', function(){ webiframe(linke[i-1]) })); 
      $("#perfiles_"+id+" .ti1 .haut .ilink").append("<img src='imagenes/links.png' width='25px' height='25px'></div>");
    }
  }
        
         $('.lista').css({height:'auto'}); //expand perfil  

    //$("#perfiles").append("<div class='perfil' id="+id+">"+"<div class='off' onclick='borrar("+id+")'>X</div>"+id+"</br>"+titu+"</br>"+autor+"</br>"+link+"</br>"+desc+"</br>"+gen+"</br>"+cont+"</br>"+pais+"</br>"+ubic+"</br>"+anio+"</br>"+datos+"</br>"+otros+"</div>"); 
    //$('#perfiles_'+id).css({opacity:0}).animate({height:200,opacity:1.0},500,function(){ $(this).css({height:'auto'}); }); //expand perfil   
        
         $("#perfiles_"+id).addClass("bounceInDown animated0_n");  //-------------animacion css3------------ 

         $("#lis_"+id+" .info_list").css({opacity:0}).animate({opacity:1.0},700);
         $("#lis_"+id).addClass( "pulse animated0_n");

         $("#lis_"+id).css({color:'#000'}); 
         
         $("#lis_"+id+" ul").removeClass("ul_fondo_off");
         $("#lis_"+id+" ul").addClass("ul_fondo_on");
      

         $("#lis_"+id+" ul li").addClass("lista_negrita");         
         $("#lis_"+id+" .linkp").css({display:'none'});  
         $("#lis_"+id+" .off2").css({display:'block'}); 

         $("#lis_"+id).removeClass("pulse animated0_n");
         $("#perfiles_"+id).removeClass("bounceInDown animated0_n"); 


    } //-------if--------                                                         

}//-----/perfil----


function mas_favorito(id,valor){
   $("#lis_"+id+" .fav_ranking").removeClass("flipInX animated2");      
   $("#lis_"+id+" .fav_ranking img").css({opacity:1});      

  var Datu={id:id,val:valor};
  $.ajax({type: "POST",url:"mas_favorito.php",data:Datu,dataType:"html",
     beforeSend: function(){ },
     error: function(){ alert("error petición ajax"); },            
     success: function(data){                                                             
        $("#lis_"+id+" .fav_ranking p").empty();
        $("#lis_"+id+" .fav_ranking p").append(data);   
        $("#lis_"+id+" .fav_ranking").addClass("flipInX animated2");                                                     
     }
  }); 
}

function webiframe(lw){
    var pagy=window.pageYOffset; 
    $('#web_iframe').append("<div id='cont_iframe'><iframe id='i_frame' src="+lw+" frameborder='0' allowfullscreen></iframe><div id='off_iframe' onclick='borrar_iframe()'>-</div><div id='link_iframe'><a href='"+lw+"' target='_blank'>"+lw+"</a></div></div>");
    $("#cont_iframe").css({marginTop:pagy+100});  
    //$("#web_iframe").css({display:"block"}); 
    $("#web_iframe").css({opacity:0,display:"block"}).animate({opacity:1.0},1500);  
    $('body').css({overflow:'hidden'});
    w_iframe=true;  
}

function borrar_iframe(){
    $("#i_frame").remove();
    $("#web_iframe").empty().css({display:"none"}); 
    $('body').css({overflow:'auto'});
    w_iframe=false;
}


//---------pais----------------

function list_paises(){    

    v_cont = $('select[name=continente] option:selected').val(); 
    if(v_cont=="america_nor"||v_cont=="america_sur"){v_cont="america";}
    var Datp = {c:v_cont};    

  $.ajax({type: "POST",url:"buscar_paises.php",data:Datp,dataType:"html",
     beforeSend: function(){ },
     error: function(){ },            
     success: function(data){                                                             
        $("#list_paises").empty();
        $('#list_paises').append("<option value='todo' selected='selected'>Pa&iacute;s</option>");        
         var dat=data.split(";");         
         for(var i=0;i<dat.length;i++){ 
             $('#list_paises').append("<option value="+dat[i]+" >"+dat[i]+"</option>");
         } 
         cargar_total_processing(data); //------------------------- processing--------------------*_*_*_*_*  
      },complete: function(){ set_pais(); }
   }); 


 var set_pais=function(){
    $.each(obj_cod_pais, function(name, value) { 
       //var ps=cod_pais(name);  
       $("select[name=pais] option[value='"+name+"']").html(value);
       //console.log(value,name,ps);
    });    
  } 


}//-----------


//-----------ubicacion---------

function list_ubicacion(){ 
   v_pa = $('select[name=pais] option:checked').val();   
   v_cont = $('select[name=continente] option:checked').val(); 

   var Datu={p:v_pa,c:v_cont};

  $.ajax({type: "POST",url:"buscar_ubicacion.php",data:Datu,dataType:"html",
     beforeSend: function(){ $("#list_ubicacion").html("<p align='center'><img src='imagenes/ajax-loader.gif' /></p>"); },
     error: function(){ alert("error petición ajax"); },            
     success: function(data){                                                             
        $("#list_ubicacion").empty();
        $('#list_ubicacion').append("<option value='todo' selected='selected'>Ubicaci&oacute;n</option>");
        $("#list_ubicacion").append(data);                                                             
      }
    });    

}//-----------

//-----------autor---------

function list_autores(){
   v_cont=$('select[name=continente] option:checked').val();
   v_pa=$('select[name=pais] option:checked').val();
   v_ubi=$('select[name=ubicacion] option:checked').val();
   var Datu={c:v_cont,p:v_pa,u:v_ubi};

    $.ajax({type: "POST",url:"buscar_autores.php",data:Datu,dataType:"html",
        beforeSend: function(){ $("#list_autores").html("<p align='center'><img src='imagenes/ajax-loader.gif' /></p>"); },
        error: function(){ alert("error petición ajax"); },            
        success: function(data){                                                             
             $("#list_autores").empty();
             $('#list_autores').append("<option value='todo' selected='selected'>Autor/res</option>");
             $("#list_autores").append(data);                                                             
        }
    });
}//-----------

//---------------------------------
function list_anio(){
$.ajax({type: "POST",url:"buscar_total_anios.php",dataType:"html",
        beforeSend: function(){  },
        error: function(){ alert("error petición ajax"); },            
        success: function(data){ 
         $("#list_anio").empty();
         $('#list_anio').append("<option value='todo' selected='selected'>A&ntilde;o</option>");
         var dat=data.split("_,")
         for(var i=1;i<dat.length-1;i++){ $('#list_anio').append("<option value="+dat[i]+" >"+dat[i]+"</option>"); }
        }
    });
}



//-----------------cargar nuevo form sugerencia-------------------------

function cargar_nuevo_form2(){  
        var ct  =  $('#car_new_titulo').val();          

        var ca  =  $('#s_autor1 ul li .sadata').html(); 
        var ca2  =  $('#s_autor2 ul li .sadata').html();  
        var ca3  =  $('#s_autor3 ul li .sadata').html(); 

        var clw =  $('#car_new_link').val();      
        var clink= check_link(clw,1);
        var clink_web= $('#car_new_link_web').val();         
        var cd  =  $('#car_new_descripcion').val(); 
        var cg =   check_genero(1); 
        
        var cc  =  $('#s_autor1 ul li .sadatc').html(); 
        var cc2  =  $('#s_autor2 ul li .sadatc').html();  
        var cc3  =  $('#s_autor3 ul li .sadatc').html(); 
        
        var cp  =  $('#s_autor1 ul li .sadatp').html(); 
        var cp2  =  $('#s_autor2 ul li .sadatp').html();  
        var cp3  =  $('#s_autor3 ul li .sadatp').html(); 

        var cu  =  $('#s_autor1 ul li .sadatu').html(); 
        var cu2  =  $('#s_autor2 ul li .sadatu').html();  
        var cu3  =  $('#s_autor3 ul li .sadatu').html(); 

        var can =  $('#car_new_anio').val();             
        var cda =  $('#car_new_datos').val();  
        var co =   $('#car_new_otros').val();   

        var nomco  =  $('#car_new_nombre_contribu').val(); 
        var emaco  =  $('#car_new_email_contribu').val();

         if(typeof ca2!=="undefined"){ca+=","+ca2; if(typeof ca3!=="undefined"){ca+=","+ca3;} }
         if(typeof cc2!=="undefined"){cc+=","+cc2; if(typeof cc3!=="undefined"){cc+=","+cc3;} }
         if(typeof cp2!=="undefined"){cp+=","+cp2; if(typeof cp3!=="undefined"){cp+=","+cp3;} }
         if(typeof cu2!=="undefined"){cu+=","+cu2; if(typeof cu3!=="undefined"){cu+=","+cu3;} }

        console.log(ca,cc,cp,cu);

        var formData = {n_co:nomco,e_co:emaco,c_t:ct,c_a:ca,c_lw:clink,c_lwe:clink_web,c_d:cd,c_g:cg,c_c:cc,c_p:cp,c_u:cu,c_an:can,c_da:cda,c_o:co};    

       $.ajax({type:"POST",url:"cargar_obra2.php",data:formData,dataType:"html",
         beforeSend: function(){  },
         error: function(){ alert("error petición ajax"); },            
         success: function(data){                                                          
             $("#result_carga").empty(); 
             $("#result_carga").append(data);  
             borrar();              
         }
      }); 
} 



