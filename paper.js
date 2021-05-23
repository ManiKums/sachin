class Paper{
    constructor(x,y,radius){
        
        var option={
            'restotution':0.3,
            'friction':0.5,
            'density':1.2
        }


        this.body = Bodies.circle(x,y,radius,option)
        this.x=x

        this.y=y

        this.radius=radius
        World.add(world,this.body)
    }
    display(){
        fill("yellow")
        push()
        translate(this.body.position.x,this.body.position.y)

        ellipseMode(RADIUS)

     

        ellipse(this.body.position.x,this.body.position.y,this.radius)
        
        pop()
    }
}