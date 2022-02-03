var bgImg
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow = [];
var snow1


function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  snow1 = new Snow(50,50)
  for(var i=0; i<100; i++){
    snow.push(new Snow(random(0,800), random(-400,-200)))
  }
}

function preload(){
  bgImg = loadImage("snow1.jpg")
}

function draw() {
  background(bgImg);  
  Engine.update(engine)
  for(var i=0; i<100; i++){
  snow[i].display()
  
  }
  snow1.display()
  drawSprites();
}