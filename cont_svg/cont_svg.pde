PShape p;
PShape[] pm=new PShape[7];
int v;

void setup(){
  size(300,200);
  colorMode(HSB,360,100,100);
  background(312,29,13);
  p=loadShape("imagenes/cont1.svg");
    
  p.disableStyle();
  for(int i=0;i<pm.length;i++){    
      pm[i]=p.getChild(i); 
      pm[i].scale(0.78); 
  }
  
}

void draw(){ 
  noLoop();
  
  beginShape();
  fill(360);
  for(int i=0;i<pm.length;i++){ shape(pm[i],-30,-30); }
  fill(300);
  shape(pm[1],-30,-30);
  
  endShape();  

}


