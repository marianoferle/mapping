 var per_sec=[];
var per_his=[];
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
var v_ani;
var v_bus;
var busque;
var v_ord;

var newpon=false;

var tipodeorden="az";

$(document).ready(function(){ 
  
            $('input:radio[name=bus][value=titulo]').attr('checked', true);    
        var s_g = sel_genero(); 
        var r_bu= $('input:radio[name=bus]:checked').val();  

        list_paises();
        list_ubicacion();
        list_autores();
        list_anio();
        
        v_ord="titulo";
        valor_inicio=0;
        valor_cantidad=50;
        //busc(v_ord,0);   
        buscar_sugerencias_nuevas();


//---------------select-menu---------------------  

$("select[name=continente]").on('change',function(){ list_paises(); list_ubicacion(); list_autores(); busc(v_ord,0);}); 
$("select[name=pais]").on('change',function(){ list_ubicacion(); list_autores(); busc(v_ord,0); });  
$("select[name=ubicacion]").on('change',function(){ list_autores(); busc(v_ord,0); });  
$("select[name=autor]").on('change',function(){ busc(v_ord,0); });  
$("select[name=anio]").on('change',function(){ busc(v_ord,0);  }); 
$("input[name=genero]").on('click',function(){ busc(v_ord,0); }); 
$("#busqueda1").keyup(function(e){ busc(v_ord,0); }); //busqueda instantanea al escribir
$("#bot_submit").on('click',function(){ busc(v_ord,0); });   //bot - submit

//-----------hover bot sujerencias--------------
$('#admin_sugerencias').hover(function(){
    $(this).animate({top:'15px'},100);
},function(){
    $(this).animate({top:'25px'},500);
});

//-----------hover bot nuevo--------------
$('#admin_nuevo_perfil').hover(function(){
    $(this).animate({top:'15px'},100);
},function(){
    $(this).animate({top:'25px'},500);
});

//-------------------------------

$('#admin_nuevo_perfil').on('click',function(){ 
 var offy=window.pageYOffset; 
 newpon=true; 
 $('#perfiles').css({display:'block',top:offy});
 $('#perfiles_nuevo').animate({opacity:1.0},500);
});


$("input[name=mas_resultados]").on('click',function(){ list_resultados('mas'); });
$("input[name=menos_resultados]").on('click',function(){ list_resultados('menos'); });

$("input[name=mas_total_resultados]").on('click',function(){ list_resultados('tmas'); });
$("input[name=menos_total_resultados]").on('click',function(){ list_resultados('tmenos'); });


$("#nav_result #tipo_orden").on('click',function(){ 
   var tipotex="";
   if(tipodeorden=="az"){tipodeorden="za"; tipotex="Z/A";}
   else if(tipodeorden=="za"){tipodeorden="az"; tipotex="A/Z";}
   
  $(this).empty(); 
  $(this).html(tipotex);
  busc(v_ord,0); 

});



}); 
//-----------/ready---------------

function modificar_correo(){
    var email2  =  $('input[name=email_para_envio]').val();
    var formData = {em:email2};    

$.ajax({type:"POST",url:"mod_correo.php",data:formData,dataType:"html",
         beforeSend: function(){ },
         error: function(){ },            
         success: function(data){  
           $("#email_envio").empty().append(data); 
         },complete:function(){

         }
 }); 

} 



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
        var or_den =  tipodeorden;
        var vinic  =  valor_inicio;

        if(vinit==0){valor_inicio=0;}
        var vcant  =  valor_cantidad;

        if(v_cont=="america_nor"||v_cont=="america_sur"){v_cont="america";}

        $("#nav_result .or_bot").each(function(){
          $(this).removeClass('or_bot_true');
         $("#nav_result .or_bot[name=orden_"+v_ord+"]").addClass('or_bot_true');
        });  
        
        //console.log(busque,v_bus,v_gen,v_cont,v_pa,v_ubi,v_aut,v_ani); 

        var formData = {orden:or_den,vinic:vinic, vcant:vcant, b:busque, v_b:v_bus, v_g:v_gen, v_c:v_cont, v_p:v_pa, v_u:v_ubi, v_a:v_aut, v_an:v_ani,v_or:v_ord};    

       $.ajax({type:"POST",url:"../buscar.php",data:formData,dataType:"html",
         beforeSend: function(){  },
         error: function(){ alert("error petición ajax"); },            
         success: function(data){   
           borrar_todo();                                                          
           $("#listas").empty();
           $("#listas").append(data); 
           $('.lista').css({opacity:0,height:0}).animate({height:20,opacity:1.0},500);
           ver_cantidad(data);               
         },complete:function(){ $("#mas_list").show(500);  }
      });       
 

} 
//-----/busc----

function ver_cantidad(dat){
     var sd;
    $(".lista .dat").each(function(i){
       sd=$(this).html().split(';_');
    });
    sd[1]=Number(sd[1]);

    if(sd[1]>1){
      $('#res_cant').empty().append(sd[1]);
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


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

var np=0;
var nid=[];
function perf(tperf,id,titu,autor,link,link_web,desc,gen,cont,pais,ubic,anio,datos,otros,favorito,nomco,emaco){ 
      np+=1;
      if(np>=1){            
           for(var i=0;i<=np;i++){ 
               var nn=nid[i];
               per_sec[nn]=false;
               per_his[nn]=true;
               borrar(nn);              
           }
           np=0;
       }

    //solo si el id es diferente a los ya abiertos
    if(per_sec[id]!=true){ 

      nid[np]=id;  
      per_sec[id]=true;
      //per_his[id]=true;

       var nv = link.search("vimeo");  
       var ny = link.search("youtube");  
       var nw = link.search("http://");

       var ifrm=false;
       if(nv>-1||ny>-1){ ifrm=true; }


       var nweb = link_web.search("http://www."); 
       var ifrmweb=false;
       if(nweb>0){ ifrmweb=true; }


      var autore=[]; autore=autor.split(',');
      var conti=[]; conti=cont.split(',');
      var paise=[]; paise=pais.split(',');
      var ubica=[]; ubica=ubic.split(',');
      var linke=[]; linke=link_web.split(','); 
             


      $("#lis_"+id+" .info_list").prepend(
"<div class='perfil' id='perfiles_"+id+"'>"+
  "<div class='ti1'>"+     

     "<div class='admin_caja_2'>"+

        "<h2 id='admin_perfil_id'>"+id+"</h2>"+

        "<div class='admin_titulos' id='adt1'><p>Titulo:</p></div>"+
        "<input type='text' value='"+titu+"' name='carga_titulo' id='car_titulo'/>"+

        "<div class='admin_titulos' id='adt2'><p>A&ntildeo:</p></div>"+
        "<select name='carga_anio' id='car_anio'>"+
          "<option value='0'>-</option>"+
          "<option value='2000'>2000</option>"+
          "<option value='2001'>2001</option>"+
          "<option value='2002'>2002</option>"+
          "<option value='2003'>2003</option>"+
          "<option value='2004'>2004</option>"+
          "<option value='2005'>2005</option>"+
          "<option value='2006'>2006</option>"+
          "<option value='2007'>2007</option>"+
          "<option value='2008'>2008</option>"+
          "<option value='2009'>2009</option>"+
          "<option value='2010'>2010</option>"+
          "<option value='2011'>2011</option>"+
          "<option value='2012'>2012</option>"+
          "<option value='2013'>2013</option>"+
          "<option value='2014'>2014</option>"+
        "</select>"+
    
        "<div class='admin_titulos' id='adt1'>Generos:</div>"+
        "<div id='admin_genero'>"+
        "<input type='checkbox' name='carga_genero' id='gen_art' value='arte'><p>Arte</p>"+
        "<input type='checkbox' name='carga_genero' id='gen_mark' value='publicidad/marketing'><p>Publicidad/Marketing</p>"+
        "<input type='checkbox' name='carga_genero' id='gen_entr' value='entretenimiento'><p>Entretenimiento</p>"+
        "</div>"+

  "</div>"+

  "<div class='admin_caja_2'>"+
   "<div class='admin_caja_2'>"+

        "<div class='admin_titulos' id='adt1'><p>*Nombre:</p></div>"+
        "<input type='text' value='' name='carga_autor' id='car_autor' />"+

        "<div class='admin_titulos2'><p>*Continente:</p></div>"+       
        "<div class='admin_titulos2'><p>*Pa&iacute;s:</p></div>"+

        "<select name='carga_continente' id='car_continente'>"+
        "<option value='todo'>-</option>"+
        "<option value='africa'>Africa</option>"+
        "<option value='america'>Am&eacute;rica</option>"+
        "<option value='asia'>Asia</option>"+
        "<option value='europa'>Europa</option>"+
        "<option value='oceania'>Ocean&iacutea</option>"+
        "</select>"+         

        "<select name='carga_pais' id='car_pais'>"+
                      "<option value='0'>-</option>"+ 
                      "<option value='AF'>Afganist&aacute;n</option>"+ 
                      "<option value='AL'>Albania</option>"+ 
                      "<option value='DE'>Alemania</option>"+ 
                      "<option value='AD'>Andorra</option>"+ 
                      "<option value='AO'>Angola</option>"+ 
                      "<option value='AI'>Anguilla</option>"+ 
                      "<option value='AQ'>Ant&aacute;rtida</option>"+ 
                      "<option value='AG'>Antigua y Barbuda</option>"+ 
                      "<option value='AN'>Antillas Holandesas</option>"+ 
                      "<option value='SA'>Arabia Saud&iacute;</option>"+ 
                      "<option value='DZ'>Argelia</option>"+ 
                      "<option value='AR'>Argentina</option>"+ 
                      "<option value='AM'>Armenia</option>"+ 
                      "<option value='AW'>Aruba</option>"+ 
                      "<option value='AU'>Australia</option>"+ 
                      "<option value='AT'>Austria</option>"+  
                      "<option value='AZ'>Azerbaiy&aacute;n</option>"+  
                      "<option value='BS'>Bahamas</option>"+  
                      "<option value='BH'>Bahrein</option>"+  
                      "<option value='BD'>Bangladesh</option>"+  
                      "<option value='BB'>Barbados</option>"+  
                      "<option value='BE'>B&eacute;lgica</option>"+  
                      "<option value='BZ'>Belice</option>"+  
                      "<option value='BJ'>Benin</option>"+  
                      "<option value='BM'>Bermudas</option>"+  
                      "<option value='BY'>Bielorrusia</option>"+  
                      "<option value='MM'>Birmania</option>"+  
                      "<option value='BO'>Bolivia</option>"+  
                      "<option value='BA'>Bosnia y Herzegovina</option>"+  
                      "<option value='BW'>Botswana</option>"+  
                      "<option value='BR'>Brasil</option>"+  
                      "<option value='BN'>Brunei</option>"+  
                      "<option value='BG'>Bulgaria</option>"+  
                      "<option value='BF'>Burkina Faso</option>"+  
                      "<option value='BI'>Burundi</option>"+  
                      "<option value='BT'>But&aacute;n</option>"+  
                      "<option value='CV'>Cabo Verde</option>"+  
                      "<option value='KH'>Camboya</option>"+  
                      "<option value='CM'>Camer&uacute;n</option>"+  
                      "<option value='CA'>Canad&aacute;</option>"+  
                      "<option value='TD'>Chad</option>"+  
                      "<option value='CL'>Chile</option>"+  
                      "<option value='CN'>China</option>"+  
                      "<option value='CY'>Chipre</option>"+  
                      "<option value='VA'>Ciudad del Vaticano</option>"+  
                      "<option value='CO'>Colombia</option>"+  
                      "<option value='KM'>Comores</option>"+  
                      "<option value='CG'>Congo</option>"+  
                      "<option value='CD'>Congo, Rep&uacute;blica Democr&aacute;tica</option>"+  
                      "<option value='KR'>Corea</option>"+  
                      "<option value='KP'>Corea del Norte</option>"+  
                      "<option value='CI'>Costa de Marf&iacute;l</option>"+  
                      "<option value='CR'>Costa Rica</option>"+  
                      "<option value='HR'>Croacia (Hrvatska)</option>"+  
                      "<option value='CU'>Cuba</option>"+  
                      "<option value='DK'>Dinamarca</option>"+  
                      "<option value='DJ'>Djibouti</option>"+  
                      "<option value='DM'>Dominica</option>"+  
                      "<option value='EC'>Ecuador</option>"+  
                      "<option value='EG'>Egipto</option>"+  
                      "<option value='SV'>El Salvador</option>"+  
                      "<option value='AE'>Emiratos &aacute;rabes Unidos</option>"+  
                      "<option value='ER'>Eritrea</option>"+  
                      "<option value='SI'>Eslovenia</option>"+  
                      "<option value='ES'>Espa&ntilde;a</option>"+  
                      "<option value='US'>Estados Unidos</option>"+  
                      "<option value='EE'>Estonia</option>"+  
                      "<option value='ET'>Etiop&iacute;a</option>"+  
                      "<option value='FJ'>Fiji</option>"+  
                      "<option value='PH'>Filipinas</option>"+  
                      "<option value='FI'>Finlandia</option>"+  
                      "<option value='FR'>Francia</option>"+  
                      "<option value='GA'>Gab&oacute;n</option>"+  
                      "<option value='GM'>Gambia</option>"+  
                      "<option value='GE'>Georgia</option>"+  
                      "<option value='GH'>Ghana</option>"+  
                      "<option value='GI'>Gibraltar</option>"+  
                      "<option value='GD'>Granada</option>"+  
                      "<option value='GR'>Grecia</option>"+  
                      "<option value='GL'>Groenlandia</option>"+  
                      "<option value='GP'>Guadalupe</option>"+  
                      "<option value='GU'>Guam</option>"+  
                      "<option value='GT'>Guatemala</option>"+  
                      "<option value='GY'>Guayana</option>"+  
                      "<option value='GF'>Guayana Francesa</option>"+  
                      "<option value='GN'>Guinea</option>"+  
                      "<option value='GQ'>Guinea Ecuatorial</option>"+  
                      "<option value='GW'>Guinea-Bissau</option>"+  
                      "<option value='HT'>Hait&iacute;</option>"+  
                      "<option value='HN'>Honduras</option>"+  
                      "<option value='HU'>Hungr&iacute;a</option>"+  
                      "<option value='IN'>India</option>"+  
                      "<option value='ID'>Indonesia</option>"+  
                      "<option value='IQ'>Irak</option>"+  
                      "<option value='IR'>Ir&aacute;n</option>"+  
                      "<option value='IE'>Irlanda</option>"+  
                      "<option value='BV'>Isla Bouvet</option>"+  
                      "<option value='CX'>Isla de Christmas</option>"+  
                      "<option value='IS'>Islandia</option>"+  
                      "<option value='KY'>Islas Caim&aacute;n</option>"+  
                      "<option value='CK'>Islas Cook</option>"+  
                      "<option value='CC'>Islas de Cocos o Keeling</option>"+  
                      "<option value='FO'>Islas Faroe</option>"+  
                      "<option value='HM'>Islas Heard y McDonald</option>"+  
                      "<option value='FK'>Islas Malvinas</option>"+  
                      "<option value='MP'>Islas Marianas del Norte</option>"+  
                      "<option value='MH'>Islas Marshall</option>"+  
                      "<option value='UM'>Islas menores de Estados Unidos</option>"+  
                      "<option value='PW'>Islas Palau</option>"+  
                      "<option value='SB'>Islas Salom&oacute;n</option>"+  
                      "<option value='SJ'>Islas Svalbard y Jan Mayen</option>"+  
                      "<option value='TK'>Islas Tokelau</option>"+  
                      "<option value='TC'>Islas Turks y Caicos</option>"+  
                      "<option value='VI'>Islas V&iacute;rgenes (EE.UU.)</option>"+  
                      "<option value='VG'>Islas V&iacute;rgenes (Reino Unido)</option>"+  
                      "<option value='WF'>Islas Wallis y Futuna</option>"+  
                      "<option value='IL'>Israel</option>"+  
                      "<option value='IT'>Italia</option>"+  
                      "<option value='JM'>Jamaica</option>"+  
                      "<option value='JP'>Jap&oacute;n</option>"+  
                      "<option value='JO'>Jordania</option>"+  
                      "<option value='KZ'>Kazajist&aacute;n</option>"+  
                      "<option value='KE'>Kenia</option>"+  
                      "<option value='KG'>Kirguizist&aacute;n</option>"+  
                      "<option value='KI'>Kiribati</option>"+  
                      "<option value='KW'>Kuwait</option>"+  
                      "<option value='LA'>Laos</option>"+  
                      "<option value='LS'>Lesotho</option>"+  
                      "<option value='LV'>Letonia</option>"+  
                      "<option value='LB'>L&iacute;bano</option>"+  
                      "<option value='LR'>Liberia</option>"+  
                      "<option value='LY'>Libia</option>"+  
                      "<option value='LI'>Liechtenstein</option>"+  
                      "<option value='LT'>Lituania</option>"+  
                      "<option value='LU'>Luxemburgo</option>"+  
                      "<option value='MK'>Macedonia</option>"+  
                      "<option value='MG'>Madagascar</option>"+  
                      "<option value='MY'>Malasia</option>"+  
                      "<option value='MW'>Malawi</option>"+  
                      "<option value='MV'>Maldivas</option>"+  
                      "<option value='ML'>Mal&iacute;</option>"+  
                      "<option value='MT'>Malta</option>"+  
                      "<option value='MA'>Marruecos</option>"+  
                      "<option value='MQ'>Martinica</option>"+  
                      "<option value='MU'>Mauricio</option>"+  
                      "<option value='MR'>Mauritania</option>"+  
                      "<option value='YT'>Mayotte</option>"+  
                      "<option value='MX'>M&eacute;xico</option>"+  
                      "<option value='FM'>Micronesia</option>"+  
                      "<option value='MD'>Moldavia</option>"+  
                      "<option value='MC'>M&oacute;naco</option>"+  
                      "<option value='MN'>Mongolia</option>"+  
                      "<option value='MS'>Montserrat</option>"+  
                      "<option value='MZ'>Mozambique</option>"+  
                      "<option value='NA'>Namibia</option>"+  
                      "<option value='NR'>Nauru</option>"+  
                      "<option value='NP'>Nepal</option>"+  
                      "<option value='NI'>Nicaragua</option>"+  
                      "<option value='NE'>N&iacute;ger</option>"+  
                      "<option value='NG'>Nigeria</option>"+  
                      "<option value='NU'>Niue</option>"+  
                      "<option value='NF'>Norfolk</option>"+  
                      "<option value='NO'>Noruega</option>"+  
                      "<option value='NC'>Nueva Caledonia</option>"+  
                      "<option value='NZ'>Nueva Zelanda</option>"+  
                      "<option value='OM'>Om&aacute;n</option>"+  
                      "<option value='NL'>Pa&iacute;ses Bajos</option>"+  
                      "<option value='PA'>Panam&aacute;</option>"+  
                      "<option value='PG'>Pap&uacute;a Nueva Guinea</option>"+  
                      "<option value='PK'>Paquist&aacute;n</option>"+  
                      "<option value='PY'>Paraguay</option>"+  
                      "<option value='PE'>Per&uacute;</option>"+  
                      "<option value='PN'>Pitcairn</option>"+  
                      "<option value='PF'>Polinesia Francesa</option>"+  
                      "<option value='PL'>Polonia</option>"+  
                      "<option value='PT'>Portugal</option>"+  
                      "<option value='PR'>Puerto Rico</option>"+  
                      "<option value='QA'>Qatar</option>"+  
                      "<option value='UK'>Reino Unido</option>"+  
                      "<option value='CF'>Rep&uacute;blica Centroafricana</option>"+  
                      "<option value='CZ'>Rep&uacute;blica Checa</option>"+  
                      "<option value='ZA'>Rep&uacute;blica de Sud&aacute;frica</option>"+  
                      "<option value='DO'>Rep&uacute;blica Dominicana</option>"+  
                      "<option value='SK'>Rep&uacute;blica Eslovaca</option>"+  
                      "<option value='RE'>Reuni&oacute;n</option>"+  
                      "<option value='RW'>Ruanda</option>"+  
                      "<option value='RO'>Rumania</option>"+  
                      "<option value='RU'>Rusia</option>"+  
                      "<option value='EH'>Sahara Occidental</option>"+  
                      "<option value='KN'>Saint Kitts y Nevis</option>"+  
                      "<option value='WS'>Samoa</option>"+  
                      "<option value='AS'>Samoa Americana</option>"+  
                      "<option value='SM'>San Marino</option>"+  
                      "<option value='VC'>San Vicente y Granadinas</option>"+  
                      "<option value='SH'>Santa Helena</option>"+  
                      "<option value='LC'>Santa Luc&iacute;a</option>"+  
                      "<option value='ST'>Santo Tom&eacute; y Pr&iacute;ncipe</option>"+  
                      "<option value='SN'>Senegal</option>"+  
                      "<option value='SC'>Seychelles</option>"+  
                      "<option value='SL'>Sierra Leona</option>"+  
                      "<option value='SG'>Singapur</option>"+  
                      "<option value='SY'>Siria</option>"+  
                      "<option value='SO'>Somalia</option>"+  
                      "<option value='LK'>Sri Lanka</option>"+  
                      "<option value='PM'>St. Pierre y Miquelon</option>"+  
                      "<option value='SZ'>Suazilandia</option>"+  
                      "<option value='SD'>Sud&aacute;n</option>"+  
                      "<option value='SE'>Suecia</option>"+  
                      "<option value='CH'>Suiza</option>"+  
                      "<option value='SR'>Surinam</option>"+  
                      "<option value='TH'>Tailandia</option>"+  
                      "<option value='TW'>Taiw&aacute;n</option>"+  
                      "<option value='TZ'>Tanzania</option>"+  
                      "<option value='TJ'>Tayikist&aacute;n</option>"+  
                      "<option value='TF'>Territorios franceses del Sur</option>"+  
                      "<option value='TP'>Timor Oriental</option>"+  
                      "<option value='TG'>Togo</option>"+  
                      "<option value='TO'>Tonga</option>"+  
                      "<option value='TT'>Trinidad y Tobago</option>"+  
                      "<option value='TN'>T&uacute;nez</option>"+  
                      "<option value='TM'>Turkmenist&aacute;n</option>"+  
                      "<option value='TR'>Turqu&iacute;a</option>"+  
                      "<option value='TV'>Tuvalu</option>"+  
                      "<option value='UA'>Ucrania</option>"+  
                      "<option value='UG'>Uganda</option>"+  
                      "<option value='UY'>Uruguay</option>"+  
                      "<option value='UZ'>Uzbekist&aacute;n</option>"+  
                      "<option value='VU'>Vanuatu</option>"+  
                      "<option value='VE'>Venezuela</option>"+  
                      "<option value='VN'>Vietnam</option>"+  
                      "<option value='YE'>Yemen</option>"+  
                      "<option value='YU'>Yugoslavia</option>"+  
                      "<option value='ZM'>Zambia</option>"+  
                      "<option value='ZW'>Zimbabue</option>"+ 
        "</select>"+

        "<div class='admin_titulos' id='adt1'><p>Ubicaci&oacute;n:</p></div>"+
        "<input type='text' value='' name='carga_ubicacion' id='car_ubicacion' />"+   

    "</div>"+

      "<button id='setautor_mod' onclick='set_autor_mod(1)'>Cargar Autor</button>"+ 
      "<select id='num_autores_mod'>"+     
            "<option value='1'>Autor</option>"+
            "<option value='2'>Colaboradores 1</option>"+
            "<option value='3'>Colaboradores 2</option>"+
     "</select>"+  
        "<div id='num_aut_resultado_mod'></div>"+  
        "<div id='s_autor1_mod' class='ss_autores_mod'><ul class='ul_aut'><li></li><li></li><li></li><li></li></ul></div>"+
        "<div id='s_autor2_mod' class='ss_autores_mod'><ul class='ul_aut'><li></li><li></li><li></li><li></li></ul></div>"+
        "<div id='s_autor3_mod' class='ss_autores_mod'><ul class='ul_aut'><li></li><li></li><li></li><li></li></ul></div>"+
    "</div>"+


"</div>"+

"<div class='ti3'>"+ 

      "<div class='admin_caja_2'>"+
      "<div class='admin_titulos'><p>Link Web</p></div>"+ 
        "<input type='text' value='"+link_web+"'  name='carga_link_web' id='car_link_web'/><br>"+
        
        "<div class='admin_titulos'><p>Link Web</p></div>"+ 
        "<input type='text' value='"+link+"'  name='carga_link' id='car_link'/>"+
        "<div class='admin_titulos'><p>Tipo de link y C&oacute;digo en URL de Videos</p></div>"+
        "<input type='radio' name='link_video' id='li_vimeo' value='http://player.vimeo.com/video/'><p>Video Vimeo</p>"+
        "<input type='radio' name='link_video' id='li_youtube' value='http://www.youtube.com/embed/'><p>Video Youtube</p>"+
        "<input type='radio' name='link_video' id='li_web' value=''><p>Link Web</p>"+
        "<div id='recarga_vid' onclick='recar_vid(2)'>Prueba de Link/Video</div>"+

      "</div>"+

      "<div class='admin_caja_2'>"+
        "<div class='admin_titulos' id='adt1'><p>Descripci&oacute;n:</p></div>"+
        "<textarea rows='4' cols='40' name='carga_descripcion' id='car_descripcion'>"+desc+"</textarea>"+
        "<div class='admin_titulos'><p>Datos:</p></div>"+
        "<textarea rows='4' cols='40' name='carga_datos' id='car_datos'>"+datos+"</textarea>"+
        "<div class='admin_titulos'><p>Otros:</p></div>"+
        "<textarea rows='4' cols='40' name='carga_otros' id='car_otros'>"+otros+"</textarea>"+        
     "</div>"+



 
"</div>"+

   "<div class='ti1'>"+
    "<div class='admin_caja_2'>"+
        "<div id='datos_persona'>"+ 
          "<div class='admin_titulos'><p>Nombre de Contribuyente:</p></div>"+
          "<input type='text' value='"+nomco+"'  name='carga_nombre_contribu' id='car_nombre_contribu'/></br>"+
          "<div class='admin_titulos'><p>Email de Contribuyente:</p></div>"+
          "<input type='text' value='"+emaco+"'  name='carga_email_contribu' id='car_email_contribu'/>"+    
        "</div>"+
     "</div>"+  
    "</div>"+
        "<div class='ti4b'></div>"+
        "<div id='result_carga'></div>"+
        "<div class='ti5'></div>"+
"</div>"); 
       
    $('.lista').css({height:'auto'}); //expand perfil  

    if(tperf=='1'){    
       $("#perfiles_"+id+" .ti5").append("<input type='button' value='Modificar' id='form_guardar' class='bot_admin_general' onclick='guardar_ya_form(1)'/>");
       $("#perfiles_"+id+" .ti5").append("<input type='button' value='Eliminar obra' id='form_eliminar' class='bot_admin_general' onclick='eliminar_obra("+id+")'/>");
    }else if(tperf=='2'){
       $("#perfiles_"+id+" .ti5").append("<input type='submit' value='Modificar' id='form_guardar' class='bot_admin_general' onclick='guardar_ya_form(2)'/>");
       $("#perfiles_"+id+" .ti5").append("<input type='submit' value='Cargar' id='form_cargar' class='bot_admin_general' onclick='cargar_nuevo_form(2,"+id+")'/>");
       $("#perfiles_"+id+" .ti5").append("<input type='submit' value='Eliminar' id='form_eliminar' class='bot_admin_general' onclick='eliminar_nuevo_form("+id+")'/>");
    }
      var nlin="";
      if(nv>-1){ $("#perfiles_"+id+" #li_vimeo").attr('checked', true); nlin=$('#li_vimeo').val();}else
      if(ny>-1){ $("#perfiles_"+id+" #li_youtube").attr('checked', true); nlin=$('#li_youtube').val(); }else 
      if(nw>-1){ $("#perfiles_"+id+" #li_web").attr('checked', true); nlin=$('#li_web').val(); } 

   if(ifrm){      
      $("#perfiles_"+id+" .ti4b").append("<iframe class='vid' src="+link+" frameborder='0' allowfullscreen></iframe>");
   }else{
      /* $("#perfiles_"+id+" .ti4").append("<a href="+link+" class='ilink' alto='' target='_blank'>"+        
        "<img src='../imagenes/bot.png' width='25px' height='25px'></a>");*/
   }
   
  if(ifrmweb){
       $("#perfiles_"+id+" .ti4b").append("<a href='"+link_web+"' class='ilink' alto='' target='_blank'>"+        
        "<img src='imagenes/links.png' width='25px' height='25px'></a>");
   }  
       //-----------selecciona los generos--------       
       var gart  = gen.search("arte");
       var gmark = gen.search("publicidad/marketing");
       var gentr = gen.search("entretenimiento");
       if(gart>-1){$("#lis_"+id+" .info_list #gen_art").attr("checked","checked");}
       if(gmark>-1){$("#lis_"+id+" .info_list #gen_mark").attr("checked","checked");}
       if(gentr>-1){$("#lis_"+id+" .info_list #gen_entr").attr("checked","checked");}

       //-----------selecciona continente--------
       $("select[name=carga_anio] option[value='"+anio+"']").prop('selected','selected').trigger("change");   
       //$("select[name=carga_continente] option[value='"+cont+"']").prop('selected','selected').trigger("change");   
       //$("select[name=carga_pais] option[value='"+pais+"']").prop('selected','selected').trigger("change");   

     //$('#perfiles_'+id).css({opacity:0}).animate({height:200,opacity:1.0},500,function(){ $(this).css({height:'auto'}); }); //expand perfil   
     $("#lis_"+id+" .info_list").animate({opacity:1.0},1000);
     $("#perfiles_"+id).addClass( "bounceInDown animated0_n");  //-------------animated css3--------
    
     $("#lis_"+id).css({color:'#000'}); 

     $("#lis_"+id+" ul.ul_list").removeClass("ul_fondo_off");
     $("#lis_"+id+" ul.ul_list").addClass("ul_fondo_on");

     $("#lis_"+id+" .linkp").css({display:'none'});  
     $("#lis_"+id+" .off2").css({display:'block'}); 


for(var i=0;i<autore.length;i++){
    var id_autores=$('#lis_'+id+' #s_autor'+(i+1)+'_mod ul.ul_aut li');

  $('#lis_'+id+' #s_autor'+(i+1)+'_mod').css({display:"block"});

  if(typeof autore[i]!=="undefined"){

    if(i==0){
       id_autores.eq(0).append("<strong>Autor:</strong><div class='sadata'>"+autore[i]+"</div>"); 
    }else{
       id_autores.eq(0).append("<strong>Contribuyente:</strong><div class='sadata'>"+autore[i]+"</div>"); 
    }
    if(typeof conti[i]!=="undefined"){   
       id_autores.eq(1).append("<strong>Continente:</strong><div class='sadatc'>"+conti[i]+"</div>"); 
    }else{
       id_autores.eq(1).append("<strong>Continente:</strong><div class='sadatc'></div>");
    }
    if(typeof paise[i]!=="undefined"){ 
       id_autores.eq(2).append("<strong>Pa&iacute;s:</strong><div class='sadatp'>"+paise[i]+"</div>"); 
    }else{
       id_autores.eq(2).append("<strong>Pa&iacute;s:</strong><div class='sadatp'></div>"); 
    }
    if(typeof ubica[i]!=="undefined"){ 
       id_autores.eq(3).append("<strong>Ubicaci&oacute;n:</strong><div class='sadatu'>"+ubica[i]+"</div>");
    }else{
       id_autores.eq(3).append("<strong>Ubicaci&oacute;n:</strong><div class='sadatu'></div>");
    } 

  }//-----if----- /autores
}//----for----


    } //-------if--------                                                         

}//-----/perfil----


function set_autor_mod(i){
        var ca  =  $('#car_autor').val();  
        var cc  =  $('#car_continente').val();   
        var cp =   $('#car_pais').val(); 
        var cu =   $('#car_ubicacion').val();
        var numero =   $("#num_autores_mod").val();
        if(numero!=1){i=numero;}

        var id_s_autor=$('#s_autor'+i+'_mod ul.ul_aut li');

        if(ca!=0&&cc!=0&&cp!=0){
          $('#s_autor'+i+'_mod h3').empty();
        if(numero==1){
          $('#s_autor'+i+'_mod').css({display:"block"});
          id_s_autor.eq(0).empty().append("<strong>Autor: </strong><div class='sadata'>"+ca+"</div>"); 
          id_s_autor.eq(1).empty().append("<strong>Continente: </strong><div class='sadatc'>"+cc+"</div>"); 
          id_s_autor.eq(2).empty().append("<strong>Pa&iacute;s: </strong><div class='sadatp'>"+cp+"</div>"); 
          id_s_autor.eq(3).empty().append("<strong>Ubicaci&oacute;n: </strong><div class='sadatu'>"+cu+"</div>"); 
        }else{
          $('#s_autor'+i+'_mod').css({display:"block"});
          id_s_autor.eq(0).empty().append("<strong>Colaborador:</strong><div class='sadata'>"+ca+"</div>"); 
          id_s_autor.eq(1).empty().append("<strong>Continente: </strong><div class='sadatc'>"+cc+"</div>"); 
          id_s_autor.eq(2).empty().append("<strong>Pa&iacute;s: </strong><div class='sadatp'>"+cp+"</div>"); 
          id_s_autor.eq(3).empty().append("<strong>Ubicaci&oacute;n: </strong><div class='sadatu'>"+cu+"</div>"); 
        }

          $('#car_autor').val('');  
          $('#car_continente').val('');   
          $('#car_pais').val(''); 
          $('#car_ubicacion').val('');
          $('#num_aut_resultado_mod').empty().append("<p>Carga Exitosa!</p>");
       }else{
          $('#num_aut_resultado_mod').empty().append("<p>Debe llenar los campos requeridos *</p>");
       }
}


//---------pais----------------

function list_paises(){    
    v_cont = $('select[name=continente] option:checked').val(); 
    if(v_cont=="america_nor"||v_cont=="america_sur"){v_cont="america";}
    var Datp = {c:v_cont};    

  $.ajax({type: "POST",url:"../buscar_paises.php",data:Datp,dataType:"html",
     beforeSend: function(){ $("#list_paises").html("<p align='center'><img src='../imagenes/ajax-loader.gif' /></p>"); },
     error: function(){ alert("error petici&oacute;n ajax"); },            
     success: function(data){                                                             
        $("#list_paises").empty();
        $('#list_paises').append("<option value='todo' selected='selected'>Pa&iacute;s</option>");
        $("#list_paises").append(data);                                                             
      },complete: function(){ set_pais(); }
    });

    var set_pais=function(){
    $.each(obj_cod_pais, function(name, value) { 
       var ps=cod_pais(name);  
       $("select[name=pais] option[value='"+name+"']").html(ps);
    });    
  }
  

}//-----------


//-----------ubicacion---------

function list_ubicacion(){ 
   v_pa = $('select[name=pais] option:checked').val(); 
   v_cont = $('select[name=continente] option:checked').val();  
   var Datu={p:v_pa,c:v_cont};

  $.ajax({type: "POST",url:"../buscar_ubicacion.php",data:Datu,dataType:"html",
     beforeSend: function(){ $("#list_ubicacion").html("<p align='center'><img src='../imagenes/ajax-loader.gif' /></p>"); },
     error: function(){ alert("error petici&oacute;n ajax"); },            
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

    $.ajax({type: "POST",url:"../buscar_autores.php",data:Datu,dataType:"html",
        beforeSend: function(){ $("#list_autores").html("<p align='center'><img src='../imagenes/ajax-loader.gif' /></p>"); },
        error: function(){ alert("error petici&oacute;n ajax"); },            
        success: function(data){                                                             
             $("#list_autores").empty();
             $('#list_autores').append("<option value='todo' selected='selected'>Autor/res</option>");
             $("#list_autores").append(data);                                                             
        }
    });
}//-----------


//---------------------------------
function list_anio(){
$.ajax({type: "POST",url:"../buscar_total_anios.php",dataType:"html",
        beforeSend: function(){  },
        error: function(){ alert("error petición ajax"); },            
        success: function(data){ 
         $("#list_anio").empty();
         $('#list_anio').append("<option value='todo' selected='selected'>A&ntilde;o</option>");
         var dat=data.split(";")
         for(var i=1;i<dat.length-1;i++){ $('#list_anio').append("<option value="+dat[i]+" >"+dat[i]+"</option>"); }
         console.log();
        }
    });
}



//----------------Eliminar nueva sugerencia-----------------

function eliminar_nuevo_form(id){      
        var formData = {i:id};   

       $.ajax({type:"POST",url:"eliminar_obra_sugerida.php",data:formData,dataType:"html",
         beforeSend: function(){  },
         error: function(){ alert("error petici&oacute;n ajax"); },            
         success: function(data){    
             $("#result_carga").empty(); 
             $("#result_carga").append(data);  
             borrar(id);                                                       
             buscar_sugerencias_nuevas();  
             per_true();           
         }
      }); 
} 


//----------------Eliminar obra----------------

function eliminar_obra(id){      
        var formData = {i:id};    

       $.ajax({type:"POST",url:"eliminar_obra.php",data:formData,dataType:"html",
         beforeSend: function(){  },
         error: function(){ alert("error petici&oacute;n ajax"); },            
         success: function(data){    
             $("#result_carga").empty(); 
             $("#result_carga").append(data);  
             borrar(id);      
             busc(v_ord,0);                                                 
             //buscar_sugerencias_nuevas();  
             //per_true();           
         }
      }); 
} 


//------------cargar nuevo campo de formulario----------------------

function cargar_nuevo_form(tip,id){         
      if(tip==1){
        var ct  =  $('#car_new_titulo').val(); 
        var ca  =  $('#car_new_autor').val();  
        var clw =  $('#car_new_link').val();          
        var clink= check_link(clw,1);   
        var clink_web= $('#car_new_link_web').val();         
        var cd  =  $('#car_new_descripcion').val(); 
        var cg  =  check_genero(1);   
        var cc  =  $('#car_new_continente').val();         
        var cp =   $('#car_new_pais').val();   
        var cp2 =   $('#car_new_pais_2').val();   
        var cp3 =   $('#car_new_pais_3').val();   
        var cu =   $('#car_new_ubicacion').val();  
        var can =  $('#car_new_anio').val();             
        var cda =  $('#car_new_datos').val();  
        var co =   $('#car_new_otros').val(); 

        var nomco  =  $('#car_new_nombre_contribu').val(); 
        var emaco  =  $('#car_new_email_contribu').val();

      }else if(tip==2){
        var ct  =  $('#car_titulo').val(); 
        var ca  =  $('#car_autor').val();  
        var clw =  $('#car_link').val();          
        var clink= check_link(clw,2);   
        var clink_web= $('#car_link_web').val();          
        var cd  =  $('#car_descripcion').val(); 
        var cg  =  check_genero(2);   
        var cc  =  $('#car_continente').val();      
        var cc2  =  $('#car_continente_2').val();  
        var cc3  =  $('#car_continente_3').val();      
        var cp =   $('#car_pais').val();   
        var cp2 =   $('#car_pais_2').val();   
        var cp3 =   $('#car_pais_3').val();  
        var cu =   $('#car_ubicacion').val();  
        var can =  $('#car_anio').val();             
        var cda =  $('#car_datos').val();  
        var co =   $('#car_otros').val(); 

        var nomco  =  $('#car_nombre_contribu').val(); 
        var emaco  =  $('#car_email_contribu').val();
      }  

        var formData = {n_co:nomco,e_co:emaco,t:tip,i:id,c_t:ct,c_a:ca,c_lw:clink,c_lwe:clink_web,c_d:cd,c_g:cg,c_c:cc,c_p:cp,c_u:cu,c_an:can,c_da:cda,c_o:co};    

       $.ajax({type:"POST",url:"cargar_obra.php",data:formData,dataType:"html",
         beforeSend: function(){  },
         error: function(){ alert("error petici&oacute;n ajax"); },            
         success: function(data){                                                          
             $("#result_carga").empty(); 
             $("#result_carga").append(data);  
             borrar(); 
             busc(v_ord,0);
             //buscar_sugerencias_nuevas();             
         }
      }); 
} 


//------------------modifica formulario--------------------------------------

function guardar_ya_form(tip){   
        var id  =  $('#admin_perfil_id').html(); 
        var ct  =  $('#car_titulo').val(); 

        var ca  =  $('#s_autor1_mod ul li .sadata').html(); 
        var ca2  =  $('#s_autor2_mod ul li .sadata').html();  
        var ca3  =  $('#s_autor3_mod ul li .sadata').html(); 

        var clw =  $('#car_link').val();
        var clink = check_link(clw,2); 
        var clink_web =  $('#car_link_web').val();     
        var cd  =  $('#car_descripcion').val(); 
        var cg  =  check_genero(2); 

        var cc  =  $('#s_autor1_mod ul li .sadatc').html(); 
        var cc2  =  $('#s_autor2_mod ul li .sadatc').html();  
        var cc3  =  $('#s_autor3_mod ul li .sadatc').html(); 
        
        var cp  =  $('#s_autor1_mod ul li .sadatp').html(); 
        var cp2  =  $('#s_autor2_mod ul li .sadatp').html();  
        var cp3  =  $('#s_autor3_mod ul li .sadatp').html(); 

        var cu  =  $('#s_autor1_mod ul li .sadatu').html(); 
        var cu2  =  $('#s_autor2_mod ul li .sadatu').html();  
        var cu3  =  $('#s_autor3_mod ul li .sadatu').html();

        var can =  $('#car_anio').val();             
        var cda =  $('#car_datos').val();  
        var co =   $('#car_otros').val();  

        var nomco =  $('#car_nombre_contribu').val();  
        var emaco =  $('#car_email_contribu').val();  

         if(typeof ca2!=="undefined"){ca+=","+ca2; if(typeof ca3!=="undefined"){ca+=","+ca3;} }
         if(typeof cc2!=="undefined"){cc+=","+cc2; if(typeof cc3!=="undefined"){cc+=","+cc3;} }
         if(typeof cp2!=="undefined"){cp+=","+cp2; if(typeof cp3!=="undefined"){cp+=","+cp3;} }
         if(typeof cu2!=="undefined"){cu+=","+cu2; if(typeof cu3!=="undefined"){cu+=","+cu3;} }


       //console.log(tip,id,ct,ca,clw,cd,cg,cc,cp,cu,can,cda,co);
       console.log(nomco,emaco);

       var formData = {n_co:nomco,e_co:emaco,t:tip,i_d:id,c_t:ct,c_a:ca,c_lw:clink,c_lwe:clink_web,c_d:cd,c_g:cg,c_c:cc,c_p:cp,c_u:cu,c_an:can,c_da:cda,c_o:co};    

       $.ajax({type:"POST",url:"guardar_obra.php",data:formData,dataType:"html",
         beforeSend: function(){ },
         error: function(){ alert("error petici&oacute;n ajax"); },            
         success: function(data){                                                          
             $("#result_carga").empty(); 
             $("#result_carga").append(data); 
             borrar(id);    
             if(tip=='2'){buscar_sugerencias_nuevas();}else if(tip=='1'){busc(v_ord);}         
         }
      }); 
} 



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

function buscar_sugerencias_nuevas(){
       $.ajax({type:"POST",url:"buscar_sugerencias.php",dataType:"html",
         beforeSend: function(){ },
         error: function(){ alert("error petici&oacute;n ajax"); },            
         success: function(data){                                                             
           $("#listas").empty();
           $("#listas").append(data); 
           $('.lista').css({opacity:0,height:0}).animate({height:20,opacity:1.0},500);
           ver_cantidad(data);   
           $("#mas_list").hide(500);                   
         }
      });  
} 


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

       $.ajax({type:"POST",url:"../cargar_obra2.php",data:formData,dataType:"html",
         beforeSend: function(){  },
         error: function(){ alert("error petición ajax"); },            
         success: function(data){                                                          
             $("#result_carga").empty(); 
             $("#result_carga").append(data);  
             borrar();              
         }
      }); 
} 


