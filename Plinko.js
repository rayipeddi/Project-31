class Plinko{
    constructor(x,y){
        var options = {
            'isStatic': true,
        }
        this.r = 10;

        this.body = Bodies.circle(x,y,this.r,options);
        this.x = x;
        this.y = y;
        World.add(world, this.body)
    }
    display(){
        ellipseMode(CENTER)
        push()
        var pos = this.body.position
        ellipse(pos.x,pos.y,this.r,this.r)
        pop()
    }
}