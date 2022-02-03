class Snow {
    constructor(x,y) {
      var options = {
          density: 0.05
      }
      this.body = Bodies.rectangle(x,y,50,60,options);
      this.image = loadImage("snow5.webp")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      
      image(this.image, pos.x, pos.y, 50, 60);
    }
  };
