class division {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(240,400,50,240,options);
      this.width = 240;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
