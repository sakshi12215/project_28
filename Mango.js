class Mango{
    constructor(x, y, radius){
        var options={
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body=Bodies.circle(x, y, radius,options)
        this.x = x
       this.y=y
        this.width = radius
        this.height = radius
        this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world,this.body)
    }
        display(){
            var pos = this.body.position
            fill(255)
            ellipseMode(CENTER);
            fill("pink")
            ellipse(pos.x,pos.y,this.width,this.height)
            imageMode(CENTER);
            image(this.image, pos.x,pos.y, this.width, this.height);
        }
    }