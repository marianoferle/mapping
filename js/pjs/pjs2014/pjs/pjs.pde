PFont f1,f2,f2b;
float mx,my;
Obj1 ob;


boolean on1=false;
boolean on2=false;
boolean on3=false;

String[] list_paises;
int[] cantidad_por_paises;

void setup(){
     size(500,300);
     background(0);
     colorMode(HSB,360,100,100);
     ob=new Obj1();
     
     String[] fontList = PFont.list();
     f1 = createFont("Vrinda-48.vlw",32);
     f2 = createFont("ArialMT-48.vlw",32);
     f2b = createFont("HelveticaLTStd-Blk-48.vlw",32);
}

void draw(){   
   ob.draw(mouseX,mouseY);
    //noLoop();  
    
}
  
  //---------------

 void cargar_totales(String data){      

   String list_total =splitTokens(data,":");   
   
   for(int i=1;i<list_total.length;i++){  
      String l_p =splitTokens(list_total[i],";");   
      
      for(int j=0;j<list_paises.length;j++){
        if(l_p[1]==list_paises[j]){cantidad_por_paises[j]+=1;}   //l_p[1] = paises    
        
      }
   }       
  // for(int i=0;i<list_paises.length;i++){ console.log(list_paises[i],cantidad_por_paises[i]);   }
  String lp1=join(list_paises,";");
  String lc1=join(cantidad_por_paises,";");

  //console.log(lp1,lc1);
  ob.total_list_paises(lp1,lc1);


 }
 
 //---------------
 
 void cargar_list_paises(String data){       
       String list_p =splitTokens(data,";"); 
       list_paises=new String[list_p.length];
       cantidad_por_paises =new int[list_paises.length];
       
       for(int j=0;j<cantidad_por_paises.length;j++){ cantidad_por_paises[j]=0;}

   for(int i=0;i<list_p.length;i++){     
      list_paises[i]=list_p[i];   
   }         
 } 

//-----------barra de totales de obras por continente-------------
  void ver_total(String dat,String con,String pais){ 
       ob.total_obras(dat,con,pais); 
  }
//-----------------------

  void ver_total_anios(String dat,int anio){ 
       ob.total_anios(dat,anio); 
  }
  
  void cargar(){  ob.cargar(); }

void mouseMoved(){
  mx=mouseX;
  my=mouseY; 
  ob.mouseMoved(mx,my);
}

void mousePressed(){
  ob.mousePressed(); 
}

/*----------------------objeto1----total por continente------------------*/

class Obj1{
  

int[] conts=new int[5];
color[] c0=new color[5];
color[] c1=new color[5];
color[] c2=new color[5];
int[] porcen=new int[5];
boolean mMov=false;
boolean[] cont=new boolean[6];
String titulo;
String titulo_pais,titulo_cont;
int titulo_anio;
int[] total_por_anio;
color[] color_por_anio;
int[] sum;
boolean[] mov_anio;
int[] porcen_anio;


int[] t1;
int total;
int numero_total;
float ptotal;
int l_t;


int pos_bot_contX=20; 
int pos_bot_contY=40; 

int pos_bot_paisX=0; 
int pos_bot_paisY=140; 

int pos_bot_anioX=20; 
int pos_bot_anioY=220; 

boolean[] up_paises=new boolean[3];
boolean[] mov_paises;
String pres_pais;

boolean rr1;

String[] list_paises2;
int[] cantidad_por_paises2;
int[] color_por_paises2;
int[] porcen_por_paises2;

PImage img1;
boolean pre_carga;
int nn=0;

 Obj1(){  
  titulo="";
  titulo_cont="";
  titulo_pais="";
  titulo_anio=0;
  l_t=282;
  colorMode(HSB,360,100,100);
  rr1=true;
  
  up_paises[0]=false;
  up_paises[1]=false;
  up_paises[2]=false;
  img1=loadImage("imagenes/sombra_paises.png");
  pre_carga=true;

 } 
 
void cargar(){  
    visual_total(titulo,titulo_anio);
 }

void total_list_paises(String lp,String lc){
       String li_p =splitTokens(lp,";"); 
       String li_c =splitTokens(lc,";"); 
       list_paises2=new String[li_p.length];
       cantidad_por_paises2=new String[li_c.length];
       color_por_paises2=new String[li_c.length];
       porcen_por_paises2=new String[li_c.length];
       mov_paises=new boolean[li_p.length];
       pres_pais=new boolean[list_paises2.length];       
       
       for(int i=0;i<li_p.length;i++){    
         String[] paises_autor = split(li_p[i], ',');    
             if(paises_autor.length==1){         
             mov_paises[i]=false;
             list_paises2[i]=li_p[i];           
             cantidad_por_paises2[i]=map((int)li_c[i],0,t1[0],2,width);  //--------------------------- 
             color_por_paises2[i]=map((int)li_c[i],0,t1[0],50,100); 
             porcen_por_paises2[i]=map((int)li_c[i],0,t1[0],0,100); 
             }
       }
     
      
       on3=true; 
       //visual_total(titulo,titulo_anio);

  }

//-------------------------porcentajes y colores continentes---------------------
 
void total_obras(String tt_obras,String tit_cont,String tit_pais){ 
   titulo_pais="";
   titulo_cont=tit_cont;
   titulo_pais=tit_pais;
  
  if(titulo_pais!=null){ titulo=codep(titulo_pais); }else{    
  if(titulo_cont=="todo"&&titulo_pais==null){ titulo="Global"; }
  if(titulo_cont!="todo"&&titulo_pais==null){ titulo=cod_cont_ac(titulo_cont); }  
  }
     
   String ttb1 =splitTokens(tt_obras,";"); 
   t1=new int[ttb1.length];  
   for(int i=0;i<ttb1.length;i++){   
     t1[i]=parseInt(ttb1[i]);
     //console.log(t1[i]);       
   }
   //console.log(t1[0]);   
   
   total=map(t1[0],0,t1[0],0,l_t);
   
   for(int i=0;i<5;i++){
     conts[i]=map(t1[1],0,t1[i],10,l_t);
     c0[i]=337;//map(conts[i],0,t1[0],100,0);
     c1[i]=100;//map(conts[i],0,t1[0],0,100);
     c2[i]=map(conts[i],0,t1[0],70,100);
     porcen[i]=map(t1[i+1],0,t1[0],0,100);
   }

  ptotal=porcen[0]+porcen[1]+porcen[2]+porcen[3]+porcen[4];
  
   on1=true; 
   //visual_total(titulo,titulo_anio);   
  
}

 /*-----------------------------------------------------------------*/

void total_anios(String dat,int an){        

   titulo_anio=an;
   //console.log(an);
   String datos =splitTokens(dat,"_,"); 
   String datos_todos =splitTokens(dat,";"); 
   int total_anio=new int[datos.length];
   
   total_por_anio=new int[datos.length];
   color_por_anio=new color[datos.length];
   mov_anio=new boolean[datos.length];
   porcen_anio=new boolean[datos.length];   
   anios=new int[datos.length];     
   
   for(int i=1;i<datos.length-1;i++){ 
     anios[i]=parseInt(datos[i]);  
   }     
   
   for(int i=0;i<datos_todos.length;i++){ 
     for(int j=1;j<datos.length-1;j++){
     if(datos_todos[i]==anios[j]){ total_anio[j]+=1; }         
     }
   }
   for(int j=1;j<anios.length-1;j++){
       total_por_anio[j]=(int)constrain(map(total_anio[j],0,datos_todos.length-1,10,l_t+90),10,l_t+90);
       color_por_anio[j]=(int)constrain(map(total_anio[j],0,datos_todos.length-1,50,100),50,100);
       porcen_anio[j]=(int)constrain(map(total_anio[j],0,datos_todos.length-1,0,100),0,100);
      // console.log(porcen_anio[j]);
   }   
  
  on2=true;
 // visual_total(titulo,titulo_anio);
  
  
}

 /*----------------.....................------------------------------------------------.......................-*/

void visual_total(String t,int ti_an){    
  background(0);  
  /* . . . . . . .continentes . . . . . . */   
  if(on1){visual_total_barras(t); }
  /* . . . . . . .anios . . . . . . */
  if(on2){visual_total_anios(ti_an); }  
  /* . . . . . . paises . . . . . . */
  if(on3){ visual_total_paises(); }
     
}
 /*-------------...............------------------------------------------------.............................----*/
 
void visual_total_paises(){
  int ancho=width/cantidad_por_paises2.length;
  int anc=0;
 
  pushMatrix();
  translate(0,pos_bot_paisY-5); 
  colorMode(HSB,360,100,100,100); 
  fill(50);  rect(-50,-1,2000,22);
  fill(20);  rect(-50,0,2000,20);
  popMatrix();
    
    
  pushMatrix();
  translate(pos_bot_paisX,pos_bot_paisY);  
  for(int i=0;i<list_paises2.length-1;i++){     
       if(i>1){anc=(anc+cantidad_por_paises2[i-1])+1; }
       fill(74,100,color_por_paises2[i]);  rect(10+anc,0,(int)cantidad_por_paises2[i],10);
       //fill(360);  textFont(f2b,15);  text(list_paises2[i],100,-550+(10*i));  text(cantidad_por_paises[i],150,-550+(10*i)); 
      //rect(10+(ancho*i),10,ancho-1,cantidad_por_paises2[i]);       
  }   
  popMatrix();
  
  
 

  
  
  pushMatrix();
  translate(0,pos_bot_paisY-5); 
  image(img1,0,0,width,20);
  popMatrix();
  
  //console.log(list_paises2.length,"..");
  

}

 /*-----------------------------------------------------------------*/


void visual_total_anios(){   
   int sum=0;   
   
  pushMatrix();
  translate(0,pos_bot_anioY-5); 
  colorMode(HSB,360,100,100,100); 
  fill(50);  rect(0,-2,width,24);
  fill(20);  rect(0,0,width,20);
  popMatrix();
   
   pushMatrix();
   noStroke();
   translate(pos_bot_anioX,pos_bot_anioY);  
   //fill(360); 
   for(int i=1;i<anios.length-1;i++){ 
     sum+=total_por_anio[i-1];
     //fill(360); text(anios[i],0,10+(11*i));
     fill(315,100,color_por_anio[i]); rect(sum,0,total_por_anio[i],10);    
     fill(0); rect(sum,0,1,10);
   }
   popMatrix(); 
   
  pushMatrix();
  translate(0,pos_bot_anioY-5); 
  image(img1,0,0,width,20);
  popMatrix();
   

   

}

 /*-----------------------------------------------------------------*/

void visual_total_barras(String tt){
    pushMatrix();  
    translate(10,10);    
    //fill(360);  textFont(f2b,18);  text(tt,0,8); 
    fill(360);  textFont(f2b,18); if(titulo_anio!=null){ text(tt+" / "+titulo_anio,0,8);}else{  text(tt+" / "+"Total",0,8);}
    popMatrix();
    
    
  pushMatrix();
  translate(0,pos_bot_contY-5); 
  colorMode(HSB,360,100,100,100); 
  fill(50);  rect(0,-1,width,40);
  fill(20);  rect(0,0,width,38);
  popMatrix();
  
      
  pushMatrix();
  translate(pos_bot_contX,pos_bot_contY);
  noStroke();  
  
  textFont(f2,10);  
  noStroke();  
  //fill(100); rect(0,20,total,10);  
  
  fill(c0[0],c1[0],c2[0]); rect(0,6,conts[0],20);   
  fill(c0[1],c1[1],c2[1]); rect(conts[0],6,conts[1],20);    
  fill(c0[2],c1[2],c2[2]); rect(conts[0]+conts[1],6,conts[2],20);  
  fill(c0[3],c1[3],c2[3]); rect(conts[0]+conts[1]+conts[2],6,conts[3],20);  
  fill(c0[4],c1[4],c2[4]); rect(conts[0]+conts[1]+conts[2]+conts[3],6,conts[4],20);  
  fill(c0[5],c1[5],c2[5]); rect(conts[0]+conts[1]+conts[2]+conts[3]+conts[4],6,conts[5],20);  

  fill(c0[0],c1[0],c2[0]); rect(0,0,conts[0]+conts[1]+conts[2]+conts[3]+conts[4],5);   
  
  noFill();stroke(0);strokeWeight(1);
  line(conts[0],6,conts[0],26);
  line(conts[0]+conts[1],6,conts[0]+conts[1],26);
  line(conts[0]+conts[1]+conts[2],6,conts[0]+conts[1]+conts[2],26);
  line(conts[0]+conts[1]+conts[2]+conts[3],6,conts[0]+conts[1]+conts[2]+conts[3],26);
  line(conts[0]+conts[1]+conts[2]+conts[3]+conts[4],6,conts[0]+conts[1]+conts[2]+conts[3]+conts[4],26);
  popMatrix();   
   
  pushMatrix();
  translate(0,pos_bot_contY-5); 
  image(img1,0,0,width,38);
  popMatrix();
  
 
  
}


/*-----------------------------------------------------------------*/

void  mousePressed(){  
  if(cont[0]){click_cont("africa");}
  if(cont[1]){click_cont("america"); }
  if(cont[2]){click_cont("asia"); }
  if(cont[3]){click_cont("europa"); }
  if(cont[4]){click_cont("oceania"); }
  if(cont[5]){click_cont("todo"); }
  
  for(int i=1;i<anios.length-1;i++){ if(mov_anio[i]){  click_anio(anios[i]); } }   
  
 if(up_paises[0]){ select_paises(pres_pais); }
  
}
 
void mouseMoved(float x,float y){  
   visual_total(titulo,titulo_anio);
   mover_total(x,y);
   mover_anios(x,y);
   mover_paises(x,y);   
}

void mouseDragged(){
   visual_total(titulo,titulo_anio);
   mover_total(x,y);
   mover_anios(x,y);
   mover_paises(x,y);   
}


void draw(float x,float y){
    
      nn+=1;
      if(up_paises[0]){ pos_bot_paisX=-mouseX/0.9+50; }
      //if(up_paises[1]){ pos_bot_paisX=pos_bot_paisX-1 }
      //if(up_paises[2]){ pos_bot_paisX=pos_bot_paisX+1 } 
     if(on1&&on2&&on3&&pre_carga){        
         visual_total(titulo,titulo_anio);
         if(nn>5){pre_carga=false;}
              
     }
}

//-------------------------------------------------

void mover_paises(float mx,float my){  
   int anc=0;
   if(mx>0&&mx<width&&my>pos_bot_paisY-50&&my<pos_bot_paisY+50){ up_paises[0]=true;  }else{ up_paises[0]=false; }
   if(mx>0&&mx<50&&my>pos_bot_paisY&&my<pos_bot_paisY+10&&pos_bot_paisX>-50){ up_paises[1]=true;  }else{ up_paises[1]=false; }
   if(mx>width-50&&mx<width&&my>pos_bot_paisY&&my<pos_bot_paisY+10&&pos_bot_paisX<50){ up_paises[2]=true;  }else{ up_paises[2]=false; }
    
    
    mx=mx/0.6;   
   
  pushMatrix();
  translate(pos_bot_paisX,pos_bot_paisY);  
  for(int i=0;i<list_paises2.length-1;i++){  
    if(i>1){anc=(anc+cantidad_por_paises2[i-1])+1; }
     if(mx>anc&&mx<anc+cantidad_por_paises2[i]&&i!=0&&up_paises[0]){  
       fill(#E0FF7C);  rect(10+anc,0,(int)cantidad_por_paises2[i],10);
       textFont(f2b,16); text(codep(list_paises2[i]),anc,35);
       textFont(f2b,14); text("Total: "+(int)cantidad_por_paises[i],anc,50); 
       textFont(f2b,12); text((int)porcen_por_paises2[i]+"%",anc,65); 
       pres_pais=list_paises2[i];      
  }} 
  popMatrix();
  
 


}

//------------

void mover_anios(float mx,float my){ 
  int[] nt=new int[anios.length]; 
  for(int i=0;i<anios.length;i++){mov_anio[i]=false;  nt[i]=total_por_anio[i]; if(i==0){nt[0]+=10;} }
  int sum2=0;
  int sum2b=0;

/* for(int i=1;i<anios.length-1;i++){
    sum2+=total_por_anio[i-1];
    if(mx > total_por_anio[i] && mx<sum2 && my>120 && my<145){ mov_anio[i]=true; }
  }  */
  
  mx=mx+10;
  int ya1=pos_bot_anioY;
  int ya2=ya1+10;
  int xa1=pos_bot_anioX;

  if(mx>xa1&&mx<xa1+nt[0]&&my>ya1&&my<ya2){ mov_anio[0]=true; }else
  if(mx>xa1+nt[0]&&mx<xa1+nt[0]+nt[1]&&my>ya1&&my<ya2){ mov_anio[1]=true; }else
  if(mx>xa1+nt[0]+nt[1]&&mx<xa1+nt[0]+nt[1]+nt[2]&&my>ya1&&my<ya2){ mov_anio[2]=true; }else
  if(mx>xa1+nt[0]+nt[1]+nt[2]&&mx<xa1+nt[0]+nt[1]+nt[2]+nt[3]&&my>ya1&&my<ya2){ mov_anio[3]=true; }else
  if(mx>xa1+nt[0]+nt[1]+nt[2]+nt[3]&&mx<xa1+nt[0]+nt[1]+nt[2]+nt[3]+nt[4]&&my>ya1&&my<ya2){ mov_anio[4]=true; }else
  if(mx>xa1+nt[0]+nt[1]+nt[2]+nt[3]+nt[4]&&mx<xa1+nt[0]+nt[1]+nt[2]+nt[3]+nt[4]+nt[5]&&my>ya1&&my<ya2){ mov_anio[5]=true; }else
  if(mx>xa1+nt[0]+nt[1]+nt[2]+nt[3]+nt[4]+nt[5]&&mx<xa1+nt[0]+nt[1]+nt[2]+nt[3]+nt[4]+nt[5]+nt[6]&&my>ya1&&my<ya2){ mov_anio[6]=true; }else
  if(mx>xa1+nt[0]+nt[1]+nt[2]+nt[3]+nt[4]+nt[5]+nt[6]&&mx<xa1+nt[0]+nt[1]+nt[2]+nt[3]+nt[4]+nt[5]+nt[6]+nt[7]&&my>ya1&&my<ya2){ mov_anio[7]=true; }else
  if(mx>xa1+nt[0]+nt[1]+nt[2]+nt[3]+nt[4]+nt[5]+nt[6]+nt[7]&&mx<xa1+nt[0]+nt[1]+nt[2]+nt[3]+nt[4]+nt[5]+nt[6]+nt[7]+nt[8]&&my>ya1&&my<ya2){ mov_anio[8]=true; }else
  if(mx>xa1+nt[0]+nt[1]+nt[2]+nt[3]+nt[4]+nt[5]+nt[6]+nt[7]+nt[8]&&mx<xa1+nt[0]+nt[0]+nt[2]+nt[3]+nt[4]+nt[5]+nt[6]+nt[7]+nt[8]+nt[9]&&my>ya1&&my<ya2){ mov_anio[9]=true; }else
  if(mx>xa1+nt[0]+nt[1]+nt[2]+nt[3]+nt[4]+nt[5]+nt[6]+nt[7]+nt[8]+nt[9]&&mx<xa1+nt[0]+nt[1]+nt[2]+nt[3]+nt[4]+nt[5]+nt[6]+nt[7]+nt[8]+nt[9]+nt[10]&&my>ya1&&my<ya2){ mov_anio[10]=true; }else
  if(mx>xa1+nt[0]+nt[1]+nt[2]+nt[3]+nt[4]+nt[5]+nt[6]+nt[7]+nt[8]+nt[9]+nt[10]&&mx<xa1+nt[0]+nt[1]+nt[2]+nt[3]+nt[4]+nt[5]+nt[6]+nt[7]+nt[8]+nt[9]+nt[10]+nt[11]&&my>ya1&&my<ya2){ mov_anio[11]=true; }else
  if(mx>xa1+nt[0]+nt[1]+nt[2]+nt[3]+nt[4]+nt[5]+nt[6]+nt[7]+nt[8]+nt[9]+nt[10]+nt[11]&&mx<xa1+nt[0]+nt[1]+nt[2]+nt[3]+nt[4]+nt[5]+nt[6]+nt[7]+nt[8]+nt[9]+nt[10]+nt[11]+nt[12]&&my>ya1&&my<ya2){ mov_anio[12]=true; }


  pushMatrix();
  noStroke();
  translate(xa1,ya1);
  
  for(int i=1;i<anios.length-1;i++){  
    sum2b+=total_por_anio[i-1];      
    if(mov_anio[i]){ 
      fill(#FF7EDD); rect(sum2b,0,total_por_anio[i],10); 
    
      if(i<anios.length-2){posx=0;}else{posx=-10;}
        textFont(f2b,18); text(anios[i],sum2b+posx,35);        
        textFont(f2b,14); text("Total: "+nt[i],sum2b+posx,50); 
        textFont(f2b,14); text(round(porcen_anio[i])+" %",sum2b+posx,65);      
    } 
  }
  popMatrix();



}

//--------------------------

void mover_total(float mx,float my){
  int yb1=pos_bot_contY;
  int yb2=yb1+5;
  
  int yc1=yb2+2;
  int yc2=yc1+20;
  int ab1=pos_bot_contX;
  
  for(int i=0;i<cont.length;i++){cont[i]=false;}
  
 if(mx>ab1&&mx<ab1+conts[0]+conts[1]+conts[2]+conts[3]+conts[4]&&my>yb1&&my<yb2){ cont[5]=true; }

 if(mx>ab1&&mx<ab1+conts[0]&&my>yc1&&my<yc2){ cont[0]=true; }else
 if(mx>ab1+conts[0]&&mx<ab1+conts[0]+conts[1]&&my>yc1&&my<yc2){ cont[1]=true; }else
 if(mx>ab1+conts[0]+conts[1]&&mx<ab1+conts[0]+conts[1]+conts[2]&&my>yc1&&my<yc2){ cont[2]=true;  }else
 if(mx>ab1+conts[0]+conts[1]+conts[2]&&mx<ab1+conts[0]+conts[1]+conts[2]+conts[3]&&my>yc1&&my<yc2){ cont[3]=true; }else
 if(mx>ab1+conts[0]+conts[1]+conts[2]+conts[3]&&mx<ab1+conts[0]+conts[1]+conts[2]+conts[3]+conts[4]&&my>yc1&&my<yc2){ cont[4]=true;  } 
 
  int[] sum3=new int[5];
  
  sum3[0]=0; 
  sum3[1]=sum3[0]+conts[0]; 
  sum3[2]=sum3[1]+conts[1];
  sum3[3]=sum3[2]+conts[2];
  sum3[4]=sum3[3]+conts[3];
 
  pushMatrix();
  rectMode(CORNER);  
  translate(pos_bot_contX,pos_bot_contY-14);
  noStroke();    
  textFont(f2b,15); 
  fill(#FF79BC); 
  if(cont[0]){ rect(sum3[0],20,conts[0],20); }  
  if(cont[1]){ rect(sum3[1],20,conts[1],20); } 
  if(cont[2]){ rect(sum3[2],20,conts[2],20); }  
  if(cont[3]){ rect(sum3[3],20,conts[3],20); }   
  if(cont[4]){ rect(sum3[4],20,conts[4],20); }    
  if(cont[5]){ rect(0,14,conts[0]+conts[1]+conts[2]+conts[3]+conts[4],5); }    
  popMatrix();
  
  
  pushMatrix();
  textMode(CENTER);  
  translate(8,pos_bot_contY+30);    
  textFont(f2b,18);
  int hp1=yb1-15;
  if(cont[0]){ text("Africa",0,hp1);  }
  if(cont[1]){ text("América",conts[0],hp1);  }
  if(cont[2]){ text("Asia",conts[0]+conts[1],hp1);  }
  if(cont[3]){ text("Europa",conts[0]+conts[1]+conts[2],hp1);   }
  if(cont[4]){ text("Oceanía",conts[0]+conts[1]+conts[2]+conts[3]-20,hp1);   }  
  if(cont[5]){ text("Global",0,hp1);  }  
    textFont(f2b,14);
  int hp2=hp1+15;
  if(cont[0]){ text(round(porcen[0])+" %",0,hp2); }
  if(cont[1]){ text(round(porcen[1])+" %",conts[0],hp2); }
  if(cont[2]){ text(round(porcen[2])+" %",conts[0]+conts[1],hp2); }
  if(cont[3]){ text(round(porcen[3])+" %",conts[0]+conts[1]+conts[2],hp2); }
  if(cont[4]){ text(round(porcen[4])+ "%",conts[0]+conts[1]+conts[2]+conts[3]-20,hp2); }  
  if(cont[5]){ text("100 %",0,hp2); }   
  textFont(f2b,12);
  int ht=hp1+30;
  if(cont[0]){ text("Total: "+t1[1],0,ht); }
  if(cont[1]){ text("Total: "+t1[2],conts[0],ht); }
  if(cont[2]){ text("Total: "+t1[3],conts[0]+conts[1],ht); }
  if(cont[3]){ text("Total: "+t1[4],conts[0]+conts[1]+conts[2],ht); }
  if(cont[4]){ text("Total: "+t1[5],conts[0]+conts[1]+conts[2]+conts[3]-20,ht); }
  if(cont[5]){ text("Total: "+t1[0],0,ht); }    
  popMatrix();
  
}
 


  
  
}//-----------/obj1--------------



