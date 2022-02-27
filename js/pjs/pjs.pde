PFont f1,f2,f2b;
Objs ob1;
Objs ob2;
Objs ob3;


boolean on1=false;
boolean on2=false;
boolean on3=false;

String[] list_paises;
int[] cantidad_por_paises;
  
boolean carga_true=false;
boolean carga_true2=false;
boolean carga_true3=false;

int l_t=282;
int titulo_anio;
int[] total_por_anio;
int[] conts=new int[5];
int[] t1;
color[] c0=new color[5];
color[] c1=new color[5];
color[] c2=new color[5];
int[] porcen=new int[5];
boolean[] cont=new boolean[6];

boolean momov=false;

float total=0;

void setup(){  
  size(500,500);
  colorMode(HSB,360,100,100,100);
  background(0);  
  frameRate(30);
  
   String[] fontList = PFont.list();
     f1 = createFont("Vrinda-48.vlw",32);
     f2 = createFont("ArialMT-48.vlw",32);
     f2b = createFont("HelveticaLTStd-Blk-48.vlw",32);

  /* for(int i=0;i<v3.length;i++){ v3[i]=random(50,100);  }   
   for(int i=0;i<v4.length;i++){ v4[i]=random(200,300); }    */   

}

void draw(){ 
  background(0);
  momov=false;
     
  noFill(); stroke(100); 
  strokeWeight(1);
  line(0,height/3,width,height/3);
  line(0,height/3*2,width,height/3*2);
  
if(carga_true){  ob1.draw(mouseX,mouseY);}
if(carga_true2){ ob2.draw(mouseX,mouseY);}
if(carga_true3){ ob3.draw(mouseX,mouseY);}

 if(carga_true){    
    pushMatrix();
    translate(width/2,height/2);
    fill(0); noStroke(); ellipse(0,0,170,170);    
    noFill(); stroke(360,20); ellipse(0,0,160,160); ellipse(0,0,165,165);   
    //stroke(330,100,100,20); ellipse(0,0,210,210);
    
    textAlign(CENTER);
    fill(360);
    noStroke();
    
    
    fill(#CCCCCC,15); textFont(f1,80); text(ob1.result_val(),0,25);  

    fill(#31AE00,100); textFont(f2,15); text(ob3.result_tipo(),0,-45); 
    fill(#31AE00,10); textFont(f2,25); text(ob3.result_tipo(),0,-45);
    
    fill(#5704AA,100); textFont(f1,15); text(codep(ob1.result_tipo()),0,0);  
    fill(#5704AA,10); textFont(f1,25); text(codep(ob1.result_tipo()),0,0);      
  
    fill(#F70074,100); textFont(f2b,15); 
    if(ob2.result_tipo()==0){text("Total",0,55);}else{text(ob2.result_tipo(),0,55);}       
    fill(#F70074,10); textFont(f2b,25);     
    if(ob2.result_tipo()==0){text("Total",0,55);}else{text(ob2.result_tipo(),0,55);}   
    

    

   
    
    textFont(f2,15);
    /*text(ob1.result_val(),0,-50);          
    text(ob2.result_val(),0,20);        
    text(ob3.result_val(),0,50);  */  
    popMatrix(); 
  }  
  
} 



void mouseMoved(){ momov=true; }
void mousePressed(){   }


//-------------------------------------

void total_n(String dat){
     total=dat;
}

 void cargar_list_paises(String data){       
       String list_p =splitTokens(data,";"); 
       list_paises=new String[list_p.length];
       cantidad_por_paises =new int[list_paises.length];       
       for(int j=0;j<cantidad_por_paises.length;j++){ cantidad_por_paises[j]=0;}
       for(int i=0;i<list_p.length;i++){ list_paises[i]=list_p[i]; }         
 } 

//-------------------------------------

void cargar_totales(String data){      
   String list_total =splitTokens(data,":");   
   for(int i=1;i<list_total.length;i++){  
      String l_p =splitTokens(list_total[i],";");        
      for(int j=0;j<list_paises.length;j++){
         if(l_p[1]==list_paises[j]){cantidad_por_paises[j]+=1;}   //l_p[1] = paises    
      }
   }       
  String lnombre1=join(list_paises,";");
  String lcantidad1=join(cantidad_por_paises,";");
  
  ob1=new Objs(1,lnombre1,lcantidad1,100,500,width,1,270,336,width,height/3,0,height/3,total); //--------------------crea---objeto---------------------
  
  carga_true=true;

}  
//----------------------------------------------

void ver_total_anios(String dat,int an){ 
   titulo_anio=an;
   String datos =splitTokens(dat,"_,"); 
   String datos_todos =splitTokens(dat,";"); 
   int total_anio=new int[datos.length];   
   int anios=new int[datos.length];     
   
   for(int i=1;i<datos.length-1;i++){ 
     anios[i]=parseInt(datos[i]);  
   }        
   for(int i=0;i<datos_todos.length;i++){ for(int j=1;j<datos.length-1;j++){
     if(datos_todos[i]==anios[j]){ total_anio[j]+=1; }        
   }}

   String lnombre2=join(anios,";");
   String lcantidad2=join(total_anio,";");   

   ob2=new Objs(2,lnombre2,lcantidad2,150,280,width,1,330,336,width,height/3,0,height/3*2,total); //--------------------crea---objeto---------------------
   carga_true2=true;
}

//-----------------------

void ver_total(String tt_obras,String tit_cont,String tit_pais){ 
  String[] conti_={"Total","Africa","América","Asia","Europa","Oceanía"};
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
     conts[i]=t1[i+1];
     porcen[i]=map(t1[i+1],0,t1[0],0,100);
   }

  ptotal=porcen[0]+porcen[1]+porcen[2]+porcen[3]+porcen[4];  
 
   String lnombre3=join(conti_,";");
   String lcantidad3=join(conts,";");
   
  ob3=new Objs(3,lnombre3,lcantidad3,200,250,width,1,100,236,width,height/3,0,0,total); //--------------------crea---objeto---------------------
  carga_true3=true;


}  

//------------------------------------objeto esfera------------------------------------------

class Objs{
  float posX,posY;
  float min, max;
  float mov_pant, mov_mouse;
  float[] vx;
  float nx,ny;
  float mvx;
  float cmin,cmax;
  
  float res_pos;
  float res_val;
  String res_tipo;
  
  String l1_p,li_c;
  String[] nombres2;
  int[] numeros2;
  float ancho,alto;
  float pX,pY;
  float vl1;
  int vcont;
  int objeto_tipo;
  
  float total_;
  
  Objs(int otip_,String lp1,String lc1,float min_,float max_,float movp_,float movm_,float cmin_,float xmax_,float ancho_,float alto_,float pos1,float pos2,float tot_){  
    min=min_;
    max=max_;
    mov_pant=movp_;
    mov_mouse=movm_;
    mvx=0;
    cmin=cmin_;
    cmax=xmax_;
    ancho=ancho_;
    alto=alto_;
    pX=pos1;
    pY=pos2;
    
    vl1=0;
    vcont=0;
    
    objeto_tipo=otip_;
    
    li_p =splitTokens(lp1,";"); 
    li_c =splitTokens(lc1,";"); 
    nombres2=new String[li_p.length];
    numeros2=new int[li_c.length];
    
    total_=tot_;
    
    
    for(int i=0;i<li_p.length;i++){    
         String[] paises_autor = split(li_p[i], ',');    
         if(paises_autor.length==1){         
            nombres2[i]=li_p[i];           
            numeros2[i]=(int)li_c[i];  //---------------------------           
         }
       }  
    
    vx=new float[li_p.length];
    for(int i=0;i<vx.length;i++){ vx[i]=map((int)numeros2[i],0,total_,min,max); }

}   
//--------------------------------------------------------------

void draw(float x,float y){  esfera(mouseX,mouseY); }


//--------------------------------------------------------------

void esfera(float mx,float my,float to_){  
  posX=width/2;
  posY=height/2;
  nx=0;
  ny=0;   
  float nx2=0;
  float ny2=0;     
  
  float vcir=mx;

  if(mov_mouse==1){ mvx=mx; }
  if(mov_mouse==2){ mvx=my; }
  boolean on=false;

  if(my>pY&&my<pY+alto){
    on=true;
    vl1=constrain(map(mvx,0,mov_pant,0,180),0,180);                        //rotate() 
    vcont=(int)constrain(map(mvx,0,mov_pant,0,vx.length),0,vx.length);       //posicion seleccion
  }
  
  float vlx=radians(360)/vx.length;    //posicion cos/sin
  float vly=radians(360)/vx.length;

/*-----------------------------------------------*/
if(objeto_tipo==2){

}
/*-----------------------------------------------*/
   
  pushMatrix();  
  translate(posX,posY);  
  rotate(radians(PI+vl1));  
  colorMode(HSB,360,100,100,100);
  for(int i=0;i<vx.length;i++){     
        float col2=map(vx[i],min,max,cmin,cmax);     
        float col=numeros2[i];
       if(on){ }else{}       
         strokeWeight(0.5);                  
         stroke(col2,100,80,50); line(0,0,cos(nx)*vx[i],sin(ny)*vx[i]); 
         fill(col2,100,80,40);  noStroke();  ellipse(cos(nx)*vx[i],sin(ny)*vx[i],10,10);    
         noFill(); stroke(200,20);
         strokeWeight(1);  
      if(i<vx.length-1){    
         line(cos(nx)*vx[i],sin(ny)*vx[i],cos(nx+vlx)*vx[i+1],sin(ny+vly)*vx[i+1]); 
      }else{
         line(cos(nx)*vx[i],sin(ny)*vx[i],cos(0)*vx[0],sin(0)*vx[0]);  
      }             
      nx=nx+vlx; 
      ny=ny+vly;   
  }//--------/for-------------   
    popMatrix(); 
    
  
    float colb=map(vx[vcont],min,max,0,100);
    float colb2=map(vx[vcont],min,max,cmin,cmax);     
     
    if(on){
     pushMatrix();
     translate(posX,posY);
     noFill(); stroke(colb2,100,100,50); ellipse(0,0,100+min,100+min);
     popMatrix();
    }
 
      pushMatrix();      
      translate(posX,posY);
      rotate(radians(PI+vl1));      
      fill(colb2,100,100,50);  noStroke();  ellipse(cos(0+(vlx*vcont)) * vx[vcont],sin(0+(vly*vcont)) * vx[vcont],20,20);    
      stroke(colb2,100,100,50); line(0,0,cos(0+(vlx*vcont)) * vx[vcont],sin(0+(vly*vcont)) * vx[vcont]); 
      popMatrix();    
      
      String n_1=nombres2[(int)vcont];      
      
      if(mousePressed&&on){
       if(objeto_tipo==2){                 
              if(n_1==0){n_1='todo';}             
              pressed_fecha(n_1);            
      }else if(objeto_tipo==1){           
        if(n_1!=null){
              String[] list = split(n_1, '-');            
              //for(int i=0;i<list.length;i++){console.log(list[i]);}            
              sel_region(list[0]);    
         }
       }else if(objeto_tipo==3){  
            
            if(vcont==0){click_cont("todo");}else
            if(vcont==1){click_cont("africa");}else
            if(vcont==2){click_cont("america");}else
            if(vcont==3){click_cont("asia");}else
            if(vcont==4){click_cont("europa");}else
            if(vcont==5){click_cont("oceania");}
            
        }          
      }
     
   res_pos=vcont;
   res_val=numeros2[vcont];
   res_tipo=nombres2[(int)vcont];
   


 }//--------/esfera-------------------
 
float result_pos(){ float respos=res_pos; return respos;}
float result_val(){ float resval=res_val; return resval; }
String result_tipo(){ String restipo=res_tipo; return restipo; }


  
  
}//-----------------/Objs-----------------------------------------


















/*--------------------------------media esfera continentes--------------------------------------------------------------*/
/*
void media_esfera(){  
  n2=0;
  float vl=radians(360)/v3.length;  
  pushMatrix(); 
  translate(width-150,height/2);    rotate(PI/1.0);
  for(int i=0;i<v3.length;i++){
      if(i<v3.length){
        strokeWeight(1);
        float col=map(i,0,v3.length,0,360); 
        stroke(col,100,100,50); line(0,0,cos(n2)*v3[i],sin(n2)*v3[i]);   
        fill(col,100,100);  noStroke();  
        ellipse(cos(n2) * v3[i],sin(n2) * v3[i],v3[i]/10,v3[i]/10);  
        noFill(); stroke(200);
        
        if(i<v3.length-1){    
          line(cos(n2)*v3[i],sin(n2)*v3[i],cos(n2+vl)*v3[i+1],sin(n2+vl)*v3[i+1]); 
        }else{
          line(cos(n2)*v3[i],sin(n2)*v3[i],cos(0)*v3[0],sin(0)*v3[0]);  
        } 
      
        n2=n2+vl;   
      }  
  }
  popMatrix();    
}

void media_esfera2(){  
  n3=0;
  float vl=radians(180)/v3.length;  
  pushMatrix(); 
  translate(250,height-20);  rotate(PI);   
  for(int i=0;i<v3.length;i++){
      if(i<v3.length){
        float col=map(i,0,v3.length,0,360); 
        strokeWeight(5);
        stroke(col,100,100,50); line(10*i,0,10*i,v3[i]);   
        fill(col,100,100,20);  noStroke();   
        ellipse(10*i,v3[i],v3[i]/10,v3[i]/10);  
        ellipse(10*i,v3[i],v3[i]/8,v3[i]/8);  
        noFill(); stroke(200);

        n3=n3+vl;   
      }  
  }
  popMatrix();    
}

void mousePressed(){  
   for(int i=0;i<v3.length;i++){ v3[i]=random(50,100);  }   
   for(int i=0;i<v4.length;i++){ v4[i]=random(200,300); }    
}
*/

