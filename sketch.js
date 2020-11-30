const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var div1, div2, div3, div4, div5, div6, div7, div8;

var particles = []
var divisions = []
var plinkos = []
var divisionHeight = 300
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  ground = new Ground(600,height,1200,20);
  for(var k = 0; k<= width; k = k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var j = 40; j<= width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for(var j = 15;j <= width; j=j+50){
    plinkos.push(new Plinko(j,175))
  }
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER)
  background(0); 
  for (var p = 0; p < plinkos. length; p++) {
    
    plinkos [p] . display() ;
  }
    for (var j = 0; j < particles.length; j++) {

      particles [j] . display() ;
    }
      for (var k = 0; k < divisions. length; k++) {
      
      divisions [k] . display() ;
      }
      
    if (frameCount%60===0) {
     particles . push (new Particle( random(width/2-50, width/2+50), 10, 10));
    }
  ground.display()
  
}