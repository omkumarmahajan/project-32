class box{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
         
          //isStatic:true
    }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.Visibility=255;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      
      if(this.body.speed<3){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
      }
       else{
        World.remove(world,this.body)
        
        this.Visibility= this.Visibility-5;
        tint(255,this.Visibility)   
       }
        pop();
      }

      score()
      {
        if (this.Visibility<0 && this.Visibility<105)
        {
          score++;
        }
      }
}