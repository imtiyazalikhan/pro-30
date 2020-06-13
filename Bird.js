class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg=loadImage("sprites/smoke.png");
    this.trajetory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){
    var position=[this.body.position.x,this.body.position.y];
    this.trajetory.push(position);
    }
    for(var i=0;i<this.trajetory.length;i++){
        image(this.smokeimg,this.trajetory[i][0],this.trajetory[i][1]);
    }

  }
}
