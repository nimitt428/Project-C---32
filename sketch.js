const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball,ball2;
var blower;
var blowerMouth;
var button , button2;

function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  ball2 = Bodies.circle(200,290,50,50)
  World.add(world,ball2)
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);
  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");

  button.mousePressed(blow);

  //buttonPressed(blow);
  
  //button = mousePressed(blow);
  
  //button.mousePressed();
   
  
  button2 = createButton("press to blow yellow ball")
  button2.position(50,400) 
  button2.size(120,70)
  button2.class("blowButton");
  button2.mousePressed(blow2)
}

function draw() {
  background(59);
  Engine.update(engine);
  fill("yellow")
  ellipse(ball2.position.x,ball2.position.y,50)

  blower.show();
  ball.show();
  blowerMouth.show();
}

function blow() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.05});

  

  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
  
  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0.05, y:0.05});
  
  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:-0.05, y:0});

}
function blow2(){
Matter.Body.applyForce(ball2, {x:0, y:0}, {x:0, y:-0.05});
}