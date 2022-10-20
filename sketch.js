
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj,leftSide,rightSide

function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2

}

groundObj=new Ground(width/2,670,width,20);
leftSide=new Ground(600,600,20,120);
rightSide=new Ground(800,600,20,120);


ball=Bodies.circle(200,200,20, ball_options)
World.add(world,ball)
	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,40,40)
  groundObj.display();
  leftSide.display();
  rightSide.display();
  drawSprites();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:60,y:-60})
	}


}



