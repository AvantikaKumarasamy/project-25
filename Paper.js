class Paper{
  constructor(x,y){
    super(x,y,50,50);
    var options={
        isStatic:false,
        'restitution':0.8,
        'friction':0.5,
        'density':1.2
    }
   
    Matter.Bodies.circle(x,y,70);
    this.image=loadImage("sprites/paper.png");
   
  }
  



}