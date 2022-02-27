PFont f1,f2,f2b;
Objs ob1;
Objs ob2;
boolean on1=false;
boolean on2=false;
boolean on3=false;


/*
float[] v3=new float[5];
float[] v4=new float[15];
float n2=0;
float n3=0;
float n4=0;*/


void setup(){  
  size(500,400);
  colorMode(HSB,360,100,100,100);
  background(0);  
  
   String[] fontList = PFont.list();
     f1 = createFont("Vrinda-48.vlw",32);
     f2 = createFont("ArialMT-48.vlw",32);
     f2b = createFont("HelveticaLTStd-Blk-48.vlw",32);

  /* for(int i=0;i<v3.length;i++){ v3[i]=random(50,100);  }   
   for(int i=0;i<v4.length;i++){ v4[i]=random(200,300); }    */
   
   ob1=new Objs(50,100,150,width,1,270,336);
   ob2=new Objs(15,150,200,height,2,200,270);
}

void draw(){ 
  background(0);
  ob1.draw(mouseX,mouseY); ob2.draw(mouseX,mouseY); 
  
  pushMatrix();
  translate(width/2,height/2);
  fill(0); noStroke(); ellipse(0,0,150,150);    
  noFill(); stroke(360,20); ellipse(0,0,140,140); ellipse(0,0,145,145);   
  fill(360);
  text(ob1.result_pos(),-20,-10); 
  text(ob1.result_val(),-20,0);   
  text(ob2.result_pos(),-20,20); 
  text(ob2.result_val(),-20,30); 
  popMatrix(); 
}

void mouseMoved(){ }
void mousePressed(){ ob1.press(); ob2.press();}


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
  
  Objs(int cant_,float min_,float max_,float movp_,float movm_,float cmin_,float xmax_){  
    min=min_;
    max=max_;
    mov_pant=movp_;
    mov_mouse=movm_;
    mvx=0;
    cmin=cmin_;
    cmax=xmax_;
    
    vx=new float[cant_];
    for(int i=0;i<vx.length;i++){ vx[i]=random(min,max); }   
  }
  
void draw(float x,float y){ visual_total(mouseX,mouseY); }


void visual_total(float x,float y){ esfera(x,y); }

void press(){ for(int i=0;i<vx.length;i++){ vx[i]=random(min,max); } }

void esfera(float mx,float my){  
  posX=width/2;
  posY=height/2;
  nx=0;
  ny=0;     
  
  float vcir=mx;

  if(mov_mouse==1){ mvx=mx; }
  if(mov_mouse==2){ mvx=my; }
  
 
  float vl1=constrain(map(mvx,0,mov_pant,0,180),0,180);                        //rotate()
  int vcont=(int)constrain(map(mvx,0,mov_pant,0,vx.length),0,vx.length);       //posicion seleccion

  float vlx=radians(360)/vx.length;    //posicion cos/sin
  float vly=radians(360)/vx.length;

  
  pushMatrix();  
  translate(posX,posY);  
  rotate(radians(PI+vl1)); 
  for(int i=0;i<vx.length;i++){
      float col=map(vx[i],min,max,0,100);
      float col2=map(vx[i],min,max,cmin,cmax);     
     
         strokeWeight(0.5);         
         stroke(col2,col,100,30); line(0,0,cos(nx)*vx[i],sin(ny)*vx[i]); 
         fill(col2,col,100,50);  noStroke();  ellipse(cos(nx)*vx[i],sin(ny)*vx[i],10,10);    
         noFill(); stroke(200);
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
     
    pushMatrix();    
    translate(posX,posY);
    rotate(radians(PI+vl1));      
    fill(colb2,100,100,50);  noStroke();  ellipse(cos(0+(vlx*vcont)) * vx[vcont],sin(0+(vly*vcont)) * vx[vcont],20,20);    
    stroke(colb2,colb,100); line(0,0,cos(0+(vlx*vcont)) * vx[vcont],sin(0+(vly*vcont)) * vx[vcont]); 
    popMatrix();    

   res_pos=vcont;
   res_val=vx[vcont];

 }
 
float result_pos(){ float respos=res_pos; return respos;}
float result_val(){ float resval=res_val; return resval; }

  
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

