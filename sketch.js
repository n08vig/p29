const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var polygon, polygon_Img;
var slingshot;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25;
var stand1, stand2;
var holder;

function preload() {
  polygon_Img = loadImage("polygon.png");

}

function setup() {
  createCanvas(900, 400);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground = new Ground();

  stand1 = new Stand(100, 39, 40, 10);
  stand2 = new Stand(150, 39, 40, 10);
  
  slingshot = new Slingshot(this.ball, {x:100, y:200});

  polygon = Bodies.circle(50, 200, 20);

  //Level 1
  box1 = new Box(300, 275, 30, 40);
  box2 = new Box(330, 275, 30, 40);
  box3 = new Box(360, 275, 30, 40);
  box4 = new Box(390, 275, 30, 40);
  box5 = new Box(420, 275, 30, 40);
  box6 = new Box(450, 275, 30, 40);
  box7 = new Box(480, 275, 30, 40);
 
  //Level 2
  box8 = new Box(330, 235, 30, 40);
  box9 = new Box(360, 235, 30, 40);
  box10 = new Box(390, 235, 30, 40);
  box11 = new Box(420, 235, 30, 40);
  box12 = new Box(450, 235, 30, 40);
  
  //Level 3
  box13 = new Box(360, 195, 30, 40);
  box14 = new Box(390, 195, 30, 40);  
  box15 = new Box(420, 195, 30, 40);
 
  //Top
  box16 = new Box(390, 155, 30, 40);

  //Level 1
  box17 = new Box(650, 170, 30, 40);
  box18 = new Box(680, 170, 30, 40);
  box19 = new Box(710, 170, 30, 40);
  box20 = new Box(740, 170, 30, 40);
  box21 = new Box(770, 170, 30, 40);

  //Level 2
  box22 = new Box(680, 140, 30, 40);
  box23 = new Box(710, 140, 30, 40);
  box24 = new Box(740, 140, 30, 40);

  //Top
  box25 = new Box(710, 110, 30, 40);
}

function draw() {
  background(0);

  ground.display();

  stand1.display();
  stand2.display();
  
  slingshot.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display(); 
  box15.display(); 
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  imageMode(CENTER);
  image(polygon_Img, ball.position.x, ball.position.y, 40, 40);
}

function mouseDragged() {

}

function mouseReleased() {
  
}
