const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground,division;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

  ground = new Ground();
  division = new Division();
 
}

function draw() {
  background(255,255,255);  
  drawSprites();
  Engine.update(engine);

  for (var k = 0; k<=width; k = k + 80){
    divisions.push(new Divisions(k,height.divisionsHeight/2,10,divisionHeight));

  }
  ground.display();
  division.display();
}