
const Engine=Matter.Engine;
const World=Matter.World; 
const Bodies=Matter.Bodies;
var engine, world;
 var ground, ball

function setup() {

 var canvas=createCanvas(400,400);
 
engine = Engine.create();
 world = engine.world;
 ball=Bodies.circle(200,100,20,{restitution:1})
 World.add(world,ball)
 ground=Bodies.rectangle(200,390,200,20,{isStatic:true})
 World.add(world,ground)
}

function draw() {
  background('hotpink');
  Engine.update(engine)  
  ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  drawSprites();
}