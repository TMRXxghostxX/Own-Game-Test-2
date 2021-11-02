const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var sword1;
var world, knight;

var launcherObject;
var launchForce = 100;

function preload(){
  knight = loadImage("Knight_Pixel_Art-removebg.png")
}

function setup() {
sword1 = new Sword(235, 420, 30);
  createCanvas(800,400);
  launcherObject = new Launcher(sword1.body, { x: 235, y: 420 });
  Engine.run(engine);
  world = engine.world;
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  sword1.display();
}

function mouseDragged() {
  Matter.Body.setPosition(sword1.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  launcherObject.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(sword1.body, { x: 235, y: 300 });
    launcherObject.attach(sword1.body);
  }
}