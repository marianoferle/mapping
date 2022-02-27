var newpon=false;

function recar_vid(tip){    
var l; 
var cl;
   if(tip==1){
     l =  $('#car_new_link').val();  
     cl=check_link(l,1);
     $(".vid").attr('src',cl); 
     $('#car_new_link').val(cl); 

 }else if(tip==2){
     l =  $('#car_link').val();  
     cl=check_link(l,2);
     $(".vid").attr('src',cl); 
     $('#car_link').val(cl); 
 }

 // $("perfiles_nuevo .ti5").append("<iframe class='vid' src="+link+" frameborder='0' allowfullscreen></iframe>");
    

}

//-------------check video o genero---------------------


function check_link(li,tip){
       var res="";
       if(li==undefined){li="";}
       var v = li.search("vimeo");  
       var y = li.search("youtube");  
       var w = li.search("http://");
       var clk;
       if(tip==1){ clk= $('input[name=link_new_video]:checked').val(); }else
       if(tip==2){ clk= $('input[name=link_video]:checked').val(); }
       if(clk==undefined){clk="";}

       if(li!=undefined&&v<0||y<0){res=clk+li;}
       if(v>-1||y>-1){ res=li; }

       return res;
}

//---------------------

function check_genero(tip) {
        var c_value = [];       
        if(tip==1){ $('input[name="carga_new_genero"]:checked').each(function(){ c_value.push(this.value); }); }else
        if(tip==2){ $('input[name="carga_genero"]:checked').each(function(){ c_value.push(this.value); }); }
        return c_value.join(',');
}


 function sel_genero() {
        var c_value = [];       
        $('input[name="genero"]:checked').each(function(){  c_value.push(this.value); });
        return c_value.join(',');
  }




//------------code pais/continente---------------------

function cod_cont(c){
  var conti='';
  $.each(obj_cod_cont, function(name, value) { if(name==c){conti=value;} });
  return conti;
}
//--------------
function cod_cont_ac(c){
  var conti='';
  $.each(obj_cont_ac, function(name, value) { if(name==c){conti=value;} });
  return conti;
}

function cod_pais(p){
  var pais='';
  $.each(obj_cod_pais, function(name, value) { if(name==p){pais=value;} });
  return pais;
}

function codep(p){
  var pais='';
  $.each(cod_p, function(name, value) { if(name==p){pais=value;} });
  return pais;
}

function codp(p){
  var pais='';
  $.each(cod_pais_acento, function(name, value) { if(name==p){pais=value;} });
  return pais;
}


//-----------------------------------

function box_sel(tip){
  var csel=$("select[name="+tip+"]");
  var cs=csel.val();
    if(cs=="todo"){ csel.css({background:'#333'}); }
    else{ csel.css({background:'#890157'}); }
}


//---------------------------
 
 function abrir_list(i){
   $("#lis_"+i+" .linkp").trigger('click'); 
   $("#lis_"+i+" .linkp").css({display:'none'});
   $("#lis_"+i+" .off2").css({display:'block'});
   $("#lis_"+i+" .linkp2").css({display:'none'});
   $("#lis_"+i+" .off22").css({display:'block'});  
    
 }

//------------------borrar--------------------

function borrar(i){
 if(i==null){
    if(newpon){
    $("#perfiles_nuevo").animate({opacity:0.0},500,function(){
    $("#perfiles").css({display:'none'});   
    newpon=false;
    $("#perfiles").empty();
    $("body").css({overflow:'auto'});
    }); 
    }          
  }else{
   per_sec[i]=false;
   /*per_his[i]=true;*/
  $('#perfiles_'+i).animate({height:0,opacity:0},800,function(){ $("#lis_"+i+" .info_list").empty(); }); //expand perfil   
  //$('#perfiles_'+id).animate({height:0,opacity:0},500,function(){ this.remove(); });
  $("#lis_"+i+" ul").removeClass("ul_fondo_on");
  $("#lis_"+i+" ul").addClass("ul_fondo_off");

  $("#lis_"+i+" ul li").removeClass( "lista_negrita"); 
  $("#lis_"+i+" .linkp").css({display:'block'});  
  $("#lis_"+i+" .off2").css({display:'none'}); 
  $("#lis_"+i+" .linkp2").css({display:'block'});
  $("#lis_"+i+" .off22").css({display:'none'});

  $("#lis_"+i+" .info_list").animate({opacity:0.0},300);
  $("#perfiles_"+i).addClass( "zoomOutDown animated");  //-------------animacion css3------------
  $("#lis_"+i).removeClass( "pulse animated0_n");  //-------------animacion css3------------

 }

}

function borrar_todo(){
   for(var i=0;i<=per_sec.length;i++){ 
               var nn=nid[i];
               borrar(nn);              
   }
}



//--------------perfil true (abiertos)--------------------------

function per_true(){
  for(var i=0;i<=np;i++){
     var nn=nid[i];
   if(per_sec[nn]==true){ 
      $("#lis_"+nn).css({background:'#fff',color:'#000'});  
      $("#lis_"+nn).removeClass( "lista_negrita"); 
      $("#lis_"+nn+" .linkp").css({display:'none'});  
      $("#lis_"+nn+" .off2").css({display:'block'}); 
   }
}
}



//------------------------------------------------scroll---------------------------------------------------------
var von=true;


$(document).scroll(function(){ 
var py=window.pageYOffset; 
  nav_scroll(py);
  perfil_scroll(py);

});

function nav_scroll(py){
var nv=$("nav");  
var nvv=$("#navv");
if(py>=100){  
   nv.css({position:'fixed'});
   if(von){ 
      nv.css({top:'-50px'}).animate({top:0},500); 
      von=false; 
      nvv.addClass('nav_fijo'); 
}else if(!von){ nv.css({top:0}); }
}else if(py<100){ 
   nv.css({position:'relative',top:'0px'}); von=true;
   nvv.removeClass('nav_fijo');   
}
}

function perfil_scroll(py){
  var ptop=parseInt($('#perfiles').css('top'));
  var ph=$('#perfiles_nuevo').height();
  var alto=(ptop+ph);

   //console.log(py,ph,ptop,alto);
if(newpon){
   if(py<ph){ py=0; }
   else if(py>ph){ py=py-ph; }
   $('#perfiles').css({top:py});
}

}


function list_over(i){
     /*var l1=$("#lis_"+i+" ul");
     l1.addClass("flipInX animated");     
     setTimeout('fin('+i+')',1000); */
}

function fin(i){
     var l1=$("#lis_"+i+" ul");
     l1.removeClass("flipInX animated");
}




function set_autor(i){
        var ca  =  $('#car_new_autor').val();  
        var cc  =  $('#car_new_continente').val();   
        var cp =   $('#car_new_pais').val(); 
        var cu =   $('#car_new_ubicacion').val();
        var numero =   $("#num_autores").val();
        if(numero!=1){i=numero;}

        if(ca!=0&&cc!=0&&cp!=0){
          $('#s_autor'+i+' h3').empty();
      if(numero==1){
          $('#s_autor'+i+' ul li').eq(0).empty().append("<strong>Autor:</strong><div class='sadata'>"+ca+"</div>"); 
          $('#s_autor'+i+' ul li').eq(1).empty().append("<strong>Continente:</strong><div class='sadatc'>"+cc+"</div>"); 
          $('#s_autor'+i+' ul li').eq(2).empty().append("<strong>Pa&iacute;s:</strong><div class='sadatp'>"+cp+"</div>"); 
          $('#s_autor'+i+' ul li').eq(3).empty().append("<strong>Ubicaci&oacute;n:</strong><div class='sadatu'>"+cu+"</div>"); 
      }else{
          $('#s_autor'+i+' ul li').eq(0).empty().append("<strong>Colaborador:</strong><div class='sadata'>"+ca+"</div>"); 
          $('#s_autor'+i+' ul li').eq(1).empty().append("<strong>Continente:</strong><div class='sadatc'>"+cc+"</div>"); 
          $('#s_autor'+i+' ul li').eq(2).empty().append("<strong>Pa&iacute;s:</strong><div class='sadatp'>"+cp+"</div>"); 
          $('#s_autor'+i+' ul li').eq(3).empty().append("<strong>Ubicaci&oacute;n:</strong><div class='sadatu'>"+cu+"</div>"); 
      }

          $('#car_new_autor').val('');  
          $('#car_new_continente').val('');   
          $('#car_new_pais').val(''); 
          $('#car_new_ubicacion').val('');

          $('#num_aut_resultado').empty().append("<p>Carga Exitosa!</p>");

       }else{

          $('#num_aut_resultado').empty().append("<p>Debe llenar los campos requeridos *</p>");
       }
}

