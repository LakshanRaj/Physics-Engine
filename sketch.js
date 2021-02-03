const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var myground;

function setup() {
  createCanvas(800,400);
  myengine = Engine.create();
  myworld = myengine.world;
  var options = {
    isStatic:true,
  }


  myground=Bodies.rectangle(200,200,500,10,options);
  
  World.add(myworld,myground);
}

function draw() {
background(0); 
Engine.update(myengine);
rectMode(CENTER);
rect(myground.position.x,myground.position.y,500,10);


  
}