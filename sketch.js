

var fixedRect,movingRect;
var gameObject1,gameObject2;


function setup() {
  createCanvas(800,400);

  gameObject1 = createSprite(400,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  
  gameObject1.shapeColor = "red";
  gameObject2.shapeColor = "red";

}
function draw() {
  background(0); 

  gameObject1.x = mouseX;
  gameObject1.y = mouseY;

  if(isTouching(gameObject1,gameObject2)) {
    gameObject1.shapeColor = "yellow";
    gameObject2.shapeColor = "yellow";  

  }
  else {
    gameObject1.shapeColor = "red";
    gameObject2.shapeColor = "red";  
  }

  drawSprites();
}
