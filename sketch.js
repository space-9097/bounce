
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ball2;
var ground;
var stand
var leftwall
var rightwall

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var ball2_options = {
    restitution: 1.05,
    frictionAir:0.001
  }
   
   var ground_options ={
     isStatic: true
   };
  
   

   leftwall = Bodies.rectangle(10,200,1,400,ground_options);
   World.add(world, leftwall)

   rightwall = Bodies.rectangle(390,200,1,400,ground_options);
  World.add(world, rightwall)
  
   ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  stand = Bodies.rectangle(250,100,100,20,ground_options);
  World.add(world,stand);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(200,10,30,ball2_options);
  World.add(world,ball2);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);

  ellipse(ball2.position.x,ball2.position.y,20);
  rect(stand.position.x,stand.position.y,200,10);
  rect(leftwall.position.x,leftwall.position.y,1,400);
  rect(rightwall.position.x,rightwall.position.y,1,400);

}

