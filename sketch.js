
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
	bob1 =new Bob(230,400,20);
	bob2 =new Bob(240,53,20);
	bob3 =new Bob(260,45,20);
	bob4 =new Bob(348,28,20);
	bob5 =new Bob(209,300,20);

	roof1=new roof(200,300,400,20);
	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope2=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope3=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope4=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope5=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 

  function display(){
	  Bob1.display();
	  Bob2.display();
	  Bob3.display();
	  Bob4,display();
	  Bob5.display();







  }
}



