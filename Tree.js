class Tree {
    constructor(x,y) {
    this.x = x;
    this.y = y;
    this.treeWidth = 450;
    this.treeHeight = 600;
    this.treeThickness = 10;
    this.image = loadImage("images/tree.png");
    this.bottomBody=Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeThickness, {isStatic:true})
    World.add(world, this.bottomBody)
    }
    display(){
      var pos =this.bottomBody.position;
      push();
      translate(pos.x, pos.y+10);
      imageMode(CENTER);
      fill(255);
      image(this.image, 0,-this.treeHeight/2,this.treeWidth, this.treeHeight)
      pop();
    }
  };
