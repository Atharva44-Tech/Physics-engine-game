const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world,obj1;
var rect2;

var ground1;



function setup() {
  createCanvas(1200,400);
  
  engine = Engine.create();
  world = engine.world;

 

  square1=new Square(700,320,70,70);
  square2=new Square(920,320,70,70);  
  square3=new Square(700,240,70,70);
  square4=new Square(920,240,70,70);
  square5=new Square(810,160,70,70);
  enemy1=new Enemy(810,350);
  enemy2=new Enemy(810,220);
ground1=new ground(600,395,1200,10);
stone=new Stone(50,600);
}

function draw() {
  background("lightBlue"); 
  Engine.update(engine); 
 
  square1.display(); 
  square2.display();
  square3.display();
  square4.display();
  square5.display();
 ground1.display();
enemy1.display();
enemy2.display();
stone.display();
}