
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(400,650,800,20);

	left= new Bin(510,600,20,100);
	right=new Bin(690,600,20,100);
	bottom=new Bin(600,640,200,20);

	paper=new Paper(100,600);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 // displaying the bodies
  ground.display();
  left.display();
  right.display();
  bottom.display();
  paper.display();

  //calling function
 // keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:120,y:-120});
	}
}



