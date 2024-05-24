
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  

  if (keyDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyDown(DOWN_ARROW)) 
  {
    background("green");
  }

  if(keyDown(RIGHT_ARROW)) {
    background("red");
    
  }
  
  drawSprites();
}

