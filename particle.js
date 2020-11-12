class Particle {
    constructor(x,y) {
      var options = {
          'isStatic':true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x,y,50, options);
      this.x = x;
      this.y = y;
      this.r = 50;
      this.color=color(random(0,255),random(0,255),random(0,255));
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     fill("pink");
     ellipseMode(CENTER);
     ellipse(0,0,this.r,this.r); 
     
      pop();
    }
  }
  