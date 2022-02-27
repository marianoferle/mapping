//----------perfil------------------------
function perfil_nuevo(tperf){

  $('body').css({overflow:'hidden'});

 $("#perfiles").prepend(       
    "<div id='off_perfil' onclick='borrar()'>-</div>"+
        "<div class='perfil' id='perfiles_nuevo'>"+
"<div class='admin_nuevo_caja_1'>"+
        "<h1>Formulario para Sugerencias de Obras </h1>"+   
"</div>"+ 


"<div class='ti1'>"+
"<div class='admin_nuevo_caja'>"+

"<div class='admin_nuevo_caja'>"+
"<div id='datos_persona'>"+ 
      "<p>Nombre de Contribuyente:</p>"+
      "<input type='text' value='' name='carga_new_nombre_contribu' id='car_new_nombre_contribu'/>"+      
      "<p>Email:</p>"+
      "<input type='text' value='' name='carga_new_email_contribu' id='car_new_email_contribu'/>"+   
  "</div>"+ 
"</div>"+

"<div class='admin_nuevo_caja'>"+

        "<p>T&iacute;tulo de la Obra:</p>"+
        "<input type='text' value='' name='carga_new_titulo' id='car_new_titulo'/>"+    

       "<p>A&ntilde;o de Realizaci&oacute;n:</p>"+
        "<select name='carga_new_anio' id='car_new_anio'>"+
          "<option value='0' selected >-</option>"+
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

     "<p>G&eacute;nero:</p>"+

    "<div class='nuevo_caja_2'>"+        
        "<input type='checkbox' name='carga_new_genero' id='gen_art' value='arte'>"+
        "<p>Arte</p>"+
    "</div>"+
    "<div class='nuevo_caja_2'>"+       
        "<input type='checkbox' name='carga_new_genero' id='gen_mark' value='publicidad/marketing'>"+
         "<p>Publicidad/Marketing</p>"+
    "</div>"+
    "<div class='nuevo_caja_2'>"+         
        "<input type='checkbox' name='carga_new_genero' id='gen_entr' value='entretenimiento'>"+ 
        "<p>Entretenimiento</p>"+            
    "</div>"+

        "<div class='admin_nuevo_caja'>"+
      "<p>Link Web</p>"+
      "<input type='text' value=''  name='carga_new_link_web' id='car_new_link_web'/>"+
    "</div>"+
  

  "<div class='admin_nuevo_caja'>"+ 
    "<p>Seleccionar el tipo de link de Video</p>"+ 
    "<div class='nuevo_caja_2 vid_marco' id='img_vim_ayuda'>"+          
        "<input type='radio' name='link_new_video' value='http://player.vimeo.com/video/'>"+ 
        "<p>Video Vimeo</p>"+   
    "</div>"+
    "<div class='nuevo_caja_2 vid_marco' id='img_you_ayuda'>"+ 
        "<input type='radio' name='link_new_video' value='http://www.youtube.com/embed/'>"+
        "<p>Video Youtube</p>"+
    "</div>"+
 
    "<p>Insertar el C&oacute;digo en URL de Videos</p>"+        
    "<input type='text' value=''  name='carga_new_link' id='car_new_link'/>"+
  "</div>"+

"</div>"+ 



"</div>"+
"</div>"+

"<div class='ti2'>"+



"<div class='admin_caja50'>"+

        "<p>*Nombre:</p>"+
        "<input type='text' value='' name='carga_new_autor' id='car_new_autor' />"+ 

        "<p>*Continente:</p>"+
        "<select id='car_new_continente' name='carga_new_continente'>"+
        "<option value=''>-</option>"+
        "<option value='africa'>Africa</option>"+
        "<option value='america'>Am&eacute;rica</option>"+
        "<option value='asia'>Asia</option>"+
        "<option value='europa'>Europa</option>"+
        "<option value='oceania'>Ocean&iacutea</option>"+
        "</select>"+

        "<p>*Pa&iacute;s:</p>"+ 
        "<select name='carga_new_pais' id='car_new_pais'>"+
                      "<option value='0' selected >-</option>"+ 
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
        "<p>Ubicaci&oacute;n:</p>"+
        "<input type='text' value='' name='carga_new_ubicacion' id='car_new_ubicacion' />"+    

 "<div id='caja_cantidad_autores'>"+ 
        "<button id='setautor' onclick='set_autor(1)'>Cargar Autor</button>"+ 
        "<select id='num_autores'>"+     
            "<option value='1'>Autor</option>"+
            "<option value='2'>Colaboradores 1</option>"+
            "<option value='3'>Colaboradores 2</option>"+
        "</select>"+  
        "<div id='num_aut_resultado'></div>"+      
 "</div>"+ 

"</div>"+

"<div class='admin_caja50'>"+
"<div id='s_autor1' class='ss_autores'><h3>Autor:</h3><ul><li></li><li></li><li></li><li></li></ul></div>"+
"<div id='s_autor2' class='ss_autores'><h3>Colaborador:</h3><ul><li></li><li></li><li></li><li></li></ul></div>"+
"<div id='s_autor3' class='ss_autores'><h3>Colaborador:</h3><ul><li></li><li></li><li></li><li></li></ul></div>"+
"</div>"+

"<div class='admin_nuevo_caja'>"+ 

    "<div class='admin_nuevo_caja'>"+    
        "<p>Descripci&oacute;n General:</p>"+
        "<textarea rows='4' cols='40' name='carga_new_descripcion' id='car_new_descripcion'></textarea>"+

        "<p>Datos Espec&iacute;ficos:</p>"+
        "<textarea rows='4' cols='40' name='carga_new_datos' id='car_new_datos'></textarea>"+

       "<p>Otros datos Secundarios:</p>"+
        "<textarea rows='4' cols='40' name='carga_new_otros' id='car_new_otros'></textarea>"+
    "</div>"+
"</div>"+


"</div>"+

"<div class='ti3'>"+

    "<div class='tibot'></div>"+
    "<div id='result_carga'></div>"+
"</div>"); 

    $('#perfiles_nuevo').css({opacity:0}).animate({height:200,opacity:1.0},500,function(){ $(this).css({height:500}); }); //expand perfil   

    if(tperf==1){
      $("#img_vim_ayuda").append("<img src='imagenes/link_vimeo.jpg'alt=''/>");
      $("#img_you_ayuda").append("<img src='imagenes/link_youtube.jpg'alt=''/>");
      $("#perfiles_nuevo .tibot").prepend("<input type='submit' value='Enviar Sugerencia' id='form_cargar'class='bot_admin_general' onclick='cargar_nuevo_form2()'/>");
    }else if(tperf==2){
       $("#img_vim_ayuda").append("<img src='../imagenes/link_vimeo.jpg'alt=''/>");
       $("#img_you_ayuda").append("<img src='../imagenes/link_youtube.jpg'alt=''/>");     //onclick='cargar_nuevo_form(1,0)'
       $("#perfiles_nuevo .tibot").prepend("<input type='submit' value='Enviar Sugerencia' id='form_cargar' class='bot_admin_general' onclick='cargar_nuevo_form2()'/>");
    }


}


//-----------genero -- check----------------

