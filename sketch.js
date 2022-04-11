
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball2;
var slab;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var ball2_options = {
    restitution: 0.85,
    frictionAir: 0.02
  }
   
   var ground_options ={
     isStatic: true
   }
   
   var slab_options = {
     isStatic: true
   }
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(300,10,30, ball2_options);
  World.add (world,ball2);
  
  slab = Bodies.rectangle (200,200,200,20);
  World.add (world,slab);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  fill ('red');
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball2.position.x, ball2.position.y,30);
  fill ('blue');
  rect(slab.position.x, slab.position.y, 200,20);
  console.log('hello',slab);


}

