PFont mF;
PShape shap;  
String[] vr2,vr3;
String[] vt2,vt3;
String[] vs2,vs3;
int[] vr3n,vt3n;

int[] vtp1,vtp2;

int tota=0;
int xlis,ylist;
float mx,my;
int[] botx=new int[10];
int[] boty=new int[10];

int[] anio={2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014};
int[] tan=new int[anio.length];
int[] totan=new int[anio.length];

int tot_psel=0;
int num_psel=0;
int[] an_sel=new int[anio.length];

boolean new_sel=false;

String vc1="todo";
String vp1="todo";
String vu1="todo";
String va1="todo";
String an1="todo";

boolean cont_on=false;
boolean pais_on=false;

int total=0;
int totf=0;
String[] total_paises;
int[] total_re_paises;
float esp=0;

String titulo="";

String[] total_anio;
int[] total_re_anio;

void setup(){
     size(500,450);
     colorMode(HSB,360,100,100,100);
     background(#000000);

     mF = createFont("FFScala", 32);
     xlist=0;
     ylist=0;
     
     for(int i=0;i<botx.length;i++){ botx[i]=0;boty[i]=0; }  
     for(int i=0;i<an_sel.length;i++){ an_sel[i]=0;} 
      bt(); 

}
 
void draw(){ 
  
}

//---------------------------buscar-paises-todo----------------------------------
void buscar_total_paises(String vtp){    
  vtp1 =splitTokens(vtp,";");  
  total_paises=new String[vtp1.length];
  total_re_paises=new int[vtp1.length];
  for(int i=0;i<vtp1.length-1;i++){  
     total_paises[i]=vtp1[i];
     total_re_paises[i]=vtp1[i];
  } 
  
  bt();
   
}//------/cargar_pais_todo----


//---------------------------buscar - todo----------------------------------
void cargar_todo(String vt1,String vc,String vp,String vu,String va,String an){
 
  for(int i=0;i<totan.length;i++){ totan[i]=0; }  
  for(int j=0;j<total_re_paises.length;j++){total_re_paises[j]=0;}
  
  total=-1;         
     
    vt2 =splitTokens(vt1,"\n");    
    for(int i=0;i<vt2.length-1;i++){   
      vt3 =split(vt2[i],";");        
      //console.log(vt3[7])

      total+=1;
      for(int j=0;j<anio.length;j++){ if(anio[j]==vt3[9]){ totan[j]+=1; } } 
      for(int j=0;j<total_re_paises.length;j++){ if(vt3[7]==total_paises[j]){ total_re_paises[j]+=1;} }  
      }     
     tot_psel=total;   

  car_vis(vc,vp,an,titulo);
  
}//------/cargar_todo----



//----------------cargar resultados--------------------
void cargar_resultados(String vr1,String vc,String vp,String vu,String va,String an){     

    if(vc==null){ vc="todo";  }
    if(vp==null){ vp="todo";  }
    if(vu==null){ vu="todo";  }
    if(va==null){ va="todo";  }
    if(an==null){ an="todo";  }
   
    if(vc=="total"&&vp=="todo"){ 
       for(int i=0;i<totan.length;i++){ totan[i]=0; }  
       total=-1;
     }else{
       for(int i=0;i<tan.length;i++){ tan[i]=0; }  
       totf=0;   
     }
   
   
   
    vr2 =splitTokens(vr1,"\n");                //vr2 = filas  --> separadas por '\n'
    for(int i=0;i<vr2.length-1;i++){   
      vr3 =splitTokens(vr2[i],";");            //vr3 = val/filas --> separadas por ';'
      vr3n =parseInt(splitTokens(vr2[i],";"));   
      
      if(vc=="total"&&vp=="todo"){  
         total+=1; 
         for(int j=0;j<anio.length;j++){ if(anio[j]==vr3n[9]){ totan[j]+=1; } } 
       }else{  
         totf+=1; 
         for(int j=0;j<anio.length;j++){ if(anio[j]==vr3n[9]){ tan[j]+=1; } }   
      }
      
    }
//------/for---------
  

if(vc!=vc1&&vc!="todo"||cont_on){
      tot_psel=totf; vc1=vc; vp1=vp; vu1=vu; va1=va; an1=an;  cont_on=false; 
      for(int i=0;i<tan.length;i++){ an_sel[i]=tan[i]; } 
      titulo=vc;
}else if(vp!=vp1&&vp!="todo"||pais_on){  
      tot_psel=totf;  vp1=vp; vc1=vc; vu1=vu; va1=va; an1=an;  pais_on=false;  
      for(int i=0;i<tan.length;i++){ an_sel[i]=tan[i]; } 
      titulo=vp;         
}else if(vc=="todo"&&vp=="todo"||vc==null&&vp==null){
      tot_psel=total; vc1=vc; vp1=vp;  
      for(int i=0;i<tan.length;i++){ an_sel[i]=totan[i]; }    
}   

if(vp!="todo"){titulo=vp;}
if(vc!="todo"&&vp!="todo"){titulo=vp;}
if(vc=="todo"&&vp=="todo"){titulo="Total";}
if(vc!="todo"&&vp=="todo"){titulo=vc;}


//console.log("titulo select:"+titulo);
    
car_vis(vc,vp,an,titulo);


}
//----------------------/cargar_resultados----------------------------




//-------------carga_vis-------------------------

void car_vis(String vc,String vp,String an,String titu){     
  background(#000000);  
  textFont(mF,10); 
  float tt=(float)map(total,0,total,0,200);       //total mundo
  float ff=(float)map(totf,0,total,0,200);        //total pais años
  float ttff=(float)map(tot_psel,0,total,0,200);  //total pais 

  
  esp=height/total_re_paises.length;
  
  
  pushMatrix();
  rectMode(CORNER);//CORNER
  textMode(CENTER);
  translate(20,8);
  noStroke();
  textFont(mF,10);  
  for(int i=0;i<total_paises.length-1;i++){         
     if(total_paises[i]==titulo){ fill(#333399); stroke(#FF0080); }else{fill(#FF0080); stroke(200);  }  
     //for(int j=0;j<total_re_paises[i];j+=1){rect(2-2*j,-7+esp*i,1,esp-1); } strokeWeight(4); line(-total_re_paises[i]*3,esp*i,0,esp*i); 
     if(i>0){stroke(50);  strokeWeight(1); line(total_re_paises[i-1]*3,-2+esp*(i-1),total_re_paises[i]*3,-2+esp*i);} 
  }      
  popMatrix();
  

  pushMatrix(); 
  noStroke(); 
  strokeWeight(0.1);  
  textAlign(LEFT);  
  textMode(CORNER); 
  translate(20,10);  
  for(int i=0;i<total_paises.length-1;i++){       
     if(total_paises[i]==titulo){textFont(mF,12); fill(300);  }    
     else{ textFont(mF,10); fill(150,100); } 
     //if(esp*i>height-10){translate(-200,-height+10);}
     text(codp(total_paises[i]),80+total_re_paises[i]*2,-2+esp*i);     
     
     if(total_paises[i]==titulo){ fill(#FF005E); stroke(#FF0080); }else{fill(#FF71A5); stroke(200);  }
     if(esp>20){esp=20; translate(0,10);}
     

   noStroke(); ellipse(total_re_paises[i]*3,-4+esp*i,esp,esp); 
   fill(0); ellipse(total_re_paises[i]*3,-4+esp*i,esp/2,esp/2); 
  }  
  popMatrix();



 
  botx[0]=280;boty[0]=30; 
  botx[1]=tt;boty[1]=40;  //200,50
  
  textAlign(RIGHT);
  textFont(mF,18); fill(360);  text(codp(titu),480,20);  //titulo pais o continente select   
  //textFont(mF,12); if(an=="todo"){an="Total";} //text(an,280,15);  //titulo años select
  
  textFont(mF,10);  
  pushMatrix();
  translate(280,30);

  //----total--pais--sellect--------
  noStroke();  
  //------total------
  fill(360,80);  text("Total:"+total,tt-55,8.5);  
  //----total filas select
  fill(#AD00C1,50); rect(0,0,tt,10);
  //------total años--------
  fill(#A50053);  rect(0,0,ttff,10); 
  //----texto total select
  if(an!="Total"){
    //fill(360);      text(tot_psel,ttff+2,19);   
    //stroke(360);    strokeWeight(1);  line(ttff,0,ttff,15); 
  }
  //------------
  noStroke();
  fill(#FF0080); rect(0,0,ff,10);  
  stroke(360);   strokeWeight(1);  line(ff,0,ff,19);
  fill(360);     text("Plazo: "+an,ff,30);
  //fill(360);     text("Resultados: "+totf,ff,43);  

  //---------
  popMatrix();
  
  botx[2]=420;boty[2]=80;
  botx[3]=50;boty[3]=50;
    
  pushMatrix();
  translate(420,80);
  noStroke();   
  rectMode(CORNER); 
  for(int j=0;j<anio.length;j++){ 
      fill(#A50053);  rect(30,12*j,-totan[j],10); 
    if(anio[j]==an){ 
      fill(#FF71A5);  rect(30,12*j,-an_sel[j],10);      
      fill(360);      text(anio[j],60,10+(12*j));
    }else{ 
      fill(#FF0080);  rect(30,12*j,-an_sel[j],10); 
      fill(250,80);   text(anio[j],60,10+(12*j));
    }
   // fill(360,50);   text(an_sel[j],30+totan[j]+5,10+(11.7*j));    
  }  
  popMatrix();

//----------------------------------------- 
   
  
}//--------------

void mouseMoved(){
  mx=mouseX;
  my=mouseY;
}

void  mousePressed(){
  /*if(mouseX>width-50){xlist-=100;}else if(mouseX>0&&mouseX<50){xlist+=100;}if(mouseY>height-50){ylist-=100;}else if(mouseY>0&&mouseY<50){ylist+=100;} *///new_carga();
  
//--------bot-años-todo-------------
  if(mx>270&&mx<500&&my>30&&my<42){ 
      pressed_fecha("todo"); 
      cont_on=true;
      fill(360,30); rect(botx[0],boty[0],botx[1],12); 
   }  
//---------  
  for(int i=0;i<total_paises.length-1;i++){          
     if(my>esp*i&&my<esp+(esp*i)&&mx>0&&mx<250){
       click_pais(total_paises[i]);
     }
  } 


//--------bot-años-fecha-------------
  pushMatrix();
  translate(botx[2],boty[2]);
  noStroke();  
  rectMode(CORNER);
  fill(350,30); 
  for(int j=0;j<anio.length;j++){ 
   if(mx>botx[2]&&mx<botx[2]+100&&my>boty[2]+(12*j)-5&&my<boty[2]+(12*j)+10){
     rect(30,12*j,-an_sel[j],10);
     pressed_fecha(anio[j]);
   }
  }  
  popMatrix();    
 
}//--------/mousePressed------------


void new_carga(){
   background(#20181f); 
  for(int i=0;i<v2.length;i++){   
  v3 =splitTokens(v2[i],";");   
  int[] v3b =splitTokens(v2[i],";"); 
  text(v3[0]+"--"+v3[9],xlist,ylist+10*i); 
  } 
}


 

/*
String[] v2 =split(v1,'\n');
for(int i=0;i<v2.length;i++){
   text(v2[i],10,10+(10*i));
}
v2 =split(v1,'\n');
for(int i=0;i<v2.length;i++){  //text(v2[i],10,10+(10*i));
v3 =split(v2[i],',');
text(v3[1],10,10+(10*i));
for(int j=0;j<v3.length;j++){  //text(v3[j],10+(10*j),10+(10*i));
 //sbase[i][j]=v3[j];
}}

*/

