const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var score = 0;
var bg
function preload(){
polygon_img = loadImage("polygon.png")
 getBackgroundImage();
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  land = new Ground()
   stand1 = new Stand(390,300,250,10);
   stand2 = new Stand(700,200,200,10);

     //big building 
     //floor1
   box1 = new box(300,275,30,40)
   console.log(box1);
   box2 = new box(330,275,30,40)
   box3 = new box(360,275,30,40)
   box4 = new box(390,275,30,40)
   box5 = new box(420,275,30,40)
   box6 = new box(450,275,30,40)
   box7 = new box(480,275,30,40) 

   //floor2
    box8 = new box(330,235,30,40)
    box9 = new box(360,235,30,40)
    box10 = new box(390,235,30,40)
    box11 = new box(420,235,30,40)
    box12 = new box(450,235,30,40)

    //floor 3

    box13= new box(360,195,30,40);
    box14= new box(390,195,30,40);
    box15= new box(420,195,30,40);
    
    // floor 4
    box16 = new box(390,155,30,40);
 //ball
    

    //small building
    // floor 1
     room1 =  new box(640,175,30,40);
     room2 = new  box(670,175,30,40);
     room3 =  new  box(700,175,30,40);
     room4 = new   box(730,175,30,40);
     room5 = new  box(760,175,30,40);

     //floor2
     room6 = new  box(670,135,30,40);
     room7 = new  box(700,135,30,40);
     room8 = new  box(730,135,30,40);

     //floor3
      room9 = new  box(700,95,30,40);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});


  }

function draw() {
  if(bg)
  background (bg);  
  drawSprites();

 //getBackgroundImage();

  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the box and room ",100,30);

  textSize(20);
  fill("lightyellow")
  text("Score:" + score,width-200,50);

  //Engine.update(engine);
  land.display();
  stand1.display();
  stand2.display();
   
  fill("blue")
   box1.display();
   box1.score();
   box2.display();
   box2.score();
   box3.display();
   box3.score();
   box4.display();
   box4.score();
   box5.display();
   box5.score();
   box6.display();
   box6.score();
   box7.display();
   box7.score();
   fill("red");

   box8.display();
   box8.score();
   box9.display();
   box9.score();
   box10.display();
   box10.score();
   box11.display();
   box11.score();
   box12.display();
   box12.score();
   fill("pink");

   box13.display();
   box13.score();
   box14.display();
   box14.score();
   box15.display();
   box15.score();
   fill("yellow");
   box16.display();
   box16.score();
   fill("orange");

   room1.display();
   room1.score();
   room2.display();
   room2.score();
   room3.display();
   room3.score();
   room4.display();
   room4.score();
   room5.display();
   room5.score();
   fill("lightblue");

   room6.display();
   room6.score();
   room7.display();
   room7.score();
   room8.display();
   room8.score();
   fill("lightgreen");
   room9.display();
   room9.score();
   fill("gold");
   imageMode(CENTER)
   image(polygon_img ,ball.position.x,ball.position.y,40,40);
 
   slingShot.display();
 }
 function mouseDragged(){
   Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
 }
 function mouseReleased(){
  slingShot.fly();
 }

 function keyPressed(){
  if(keyCode === 32){
       slingShot.attach(this.ball)
  }
}

async function getBackgroundImage(){
var response = await fetch(" http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responsejson = await response.json();
console.log(responsejson.datetime);
var hour = responsejson.datetime.slice(11,13)

if (hour>=06 && hour<=18){
bg ="red"
} else {
bg = "yellow"
}
}