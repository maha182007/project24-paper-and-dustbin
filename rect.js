class Dustbin  { 
    constructor(x,y,w,h){
        var property = {
            isStatic : true
        }
        this.dustbin1 = Bodies.rectangle(x,y,w,h,property) ;
        World.add(world,this.dustbin1);

        this.width=w;
        this.height=h;
    }

    show(){
        rectMode(CENTER);
        rect(this.dustbin1.position.x,this.dustbin1.position.y,this.width,this.height);
    }
}
   
