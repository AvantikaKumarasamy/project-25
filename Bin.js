class Bin extends BaseClass{
    constructor(x,y,width,height){
      super(x,y,width,height);

      var options={
         isStatic:true,
        'restitution':0.3,
        'friction':0.8
      }
  
      this.image=loadImage("sprites/dustbingreen.png");

     
     
    }
    




}