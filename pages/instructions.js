function drawInstructions() {
  // drawing background image
  image(backgroundImage, 0, 0, width, height);
  
  // computes new x and y position after resizing
  instructionsHeader_x = (54/138) * windowWidth;
  instructionsHeader_y = (11/136) * windowHeight;
  
  // grey background for text
  fill(200, 200, 200);
  noStroke();
  rect((5/138) * windowWidth, (18/136) * windowHeight, 
       (1280 / 1380) * windowWidth, (39/68) * windowHeight);
  
  // Instructions header
  stroke(0);
  fill(0);
  textSize((10/276) * windowWidth);
  textFont('fantasy');
  text(instructionsHeader, instructionsHeader_x, instructionsHeader_y);
  
  // instructions text
  textSize((6/276)*windowWidth);
  let startingY = (25/136) * windowHeight;
  for (let i = 0; i < instructions.length; i++) {
    text(instructions[i], ((6)/138) * windowWidth, (((i*7) / 136) * windowHeight) + startingY);
  }
}