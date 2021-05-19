var ball, bin1, bin2, bin3,ground,groundObject,ballObject,binObject;
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
	//bin1 = createSprite(700, 680, 70, 10);
     //bin2 = createSprite(740, 620, 10, 100);
	 //bin3 = createSprite(660, 650, 10, 70);
	ball = new BallClass(200, 680, 10 );
	ground = new Ground(400, 690, 800, 10);
	bin1 = new Bin(700, 680, 70, 10);
	bin2 = new Bin(740, 630, 10, 100);
bin3 = new Bin (660, 630, 10, 100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 
 
}

 function keyPressed(){
	 if (keyCode === UP_ARROW){
Matter.Body.applyForce(ball.body, ball.body.position,{x:15, y:-22});

	 }
 }
 //groundObject.display();
  binObject.display();
  ballObject.display();

