class Box{
  constructor(x,y){
    var option = {
      isStatic : true
    }
    this.x = x;
    this.y = y;
    this.thickness = 20;
    this.width = 200;
    this.height = 175;
    this.image = loadImage("dustbin.png")
    this.Bottom = Bodies.rectangle(this.x,this.y,this.width,this.thickness,option);
    this.left = Bodies.rectangle(this.x-this.width/2,this.y -this.height/2,this.thickness,this.height,option);
    this.right = Bodies.rectangle(this.x+this.width/2,this.y -this.height/2,this.thickness,this.height,option);

    World.add(world,this.Bottom);
    World.add(world,this.left);
    World.add(world,this.right);
  }

  display(){
             var pos = this.Bottom.position;
             var Lpos = this.left.position;
             var Rpos = this.right.position;
              rectMode(CENTER); 
              fill("white"); 
              rect(pos.x,pos.y,this.width,this.thickness);
              rect(Lpos.x,Lpos.y,this.thickness,this.height);
              rect(Rpos.x,Rpos.y,this.thickness,this.height);
              imageMode(CENTER);
              image(this.image,this.x,this.y-this.height/2,this.width+10,this.height+10);

  }
}




















/*
class Box{
    constructor(x,y,width,height){
        var option = { isStatic : true
         
       }
       this.x = x;
       this.y = y;
       this.width = 200;
       this.thickness = 20;
       this.height = 200;
       this.image = loadImage("dustbin.png")
        this.Bottombody = Bodies.rectangle(this.x,this.y,this.width,this.thickness,option); 
        this.Leftbody = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,option); 
        
        this.Rightbody = Bodies.rectangle(x,y,width,height,option); 
        
        
        //this.image=loadImage("dustbin.png");
        World.add(world, this.Bottombody);
        World.add(world, this.Leftbody);
        } 
        display(){
             var pos = this.Bottombody.position
             var Lpos = this.Leftbody.position
              rectMode(CENTER); 
              fill("red"); 
              rect(pos.x,pos.y,this.width,this.height);
              rect(Lpos.x,Lpos.y,this.width,this.height);
              //image(this.image,this.x,this.y,this.width,this.height)
            }
}
*/