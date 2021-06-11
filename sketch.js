var ballProperty;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground1 = new Ground(800,680);
  
	Engine.run(engine);

  ball1 = new Ball(100,400,30);

  dustbin1 = new Dustbin(450,630,10,80);
  dustbin2 = new Dustbin(600,630,10,80);
  dustbin3 = new Dustbin(524,670,150,10);

  
}
function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();

  ball1.display();

  dustbin1.show();
  dustbin2.show();
  dustbin3.show();

}

function keyPressed(){
  if (keyCode === UP_ARROW){
  console.log("key pressed")
  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:30,y:-30});
  }
  }





