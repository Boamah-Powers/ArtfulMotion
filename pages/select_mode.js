function drawSelectMode() {
  // drawing background image
  image(backgroundImage, 0, 0, width, height);
  
  // writing header to screen
  stroke('#96B752');
  fill(0);
  textFont('fantasy');
  textSize((10/276) * windowWidth);
  selectionModeHeader_x = (54/138) * windowWidth;
  selectionModeHeader_y = (11/136) * windowHeight;
  text(selectionModeHeader, selectionModeHeader_x, selectionModeHeader_y);
  
  
  // computes positions and sizes based on current size
  model1Image_x = (5/138) * windowWidth;
  model2Image_x = (37/69) * windowWidth;
  model1Image_y = (1/8) * windowHeight;
  model2Image_y = (1/8) * windowHeight;
  imageWidth = (59/138) * windowWidth;
  imageHeight = (45/68) * windowHeight;  
  
  highlightModeOption();
  
  // drawing images to screen
  if (state == "select_mode") {
    image(model1Image, model1Image_x, model1Image_y, imageWidth, imageHeight);
    image(model2Image, model2Image_x, model2Image_y, imageWidth, imageHeight);
  }
  
}

// highlights background if mouse is within an option
function highlightModeOption() {
  if (mouseX >= model1Image_x && mouseX <= model1Image_x + imageWidth && 
      mouseY >= model1Image_y && mouseY <= model1Image_y + imageHeight) {
    // grey background for model 1 image
    fill('#96B752');
    stroke('#96B752');
    rect(model1Image_x - 5, model1Image_y - 5, imageWidth + 10, imageHeight + 10);
    
    if (mouseIsPressed) {
      renderMode = 1;
      state = "create_art";
      background(255);
    }
    
    // grey background for model 2 image
    fill(170, 170, 170);
    noStroke();
    if (state == "select_mode") {
      rect(model2Image_x - 5, model2Image_y - 5 , imageWidth + 10, imageHeight + 10);
    }
  }
  else if (mouseX >= model2Image_x && mouseX <= model2Image_x + imageWidth && 
           mouseY >= model2Image_y && mouseY <= model2Image_y + imageHeight) {
    // grey background for model 2 image
    fill('#96B752');
    stroke('#96B752');
    rect(model2Image_x - 5, model2Image_y - 5 , imageWidth + 10, imageHeight + 10);
    
    if (mouseIsPressed) {
      renderMode = 2;
      state = "create_art";
      background(255);
    }
    
    // grey background for model 1 image
    fill(170, 170, 170);
    noStroke();
    if (state == "select_mode") {
      rect(model1Image_x - 5, model1Image_y - 5, imageWidth + 10, imageHeight + 10);
    }
  }
  else {
    fill(170, 170, 170);
    noStroke();
    rect(model1Image_x - 5, model1Image_y - 5, imageWidth + 10, imageHeight + 10);
    rect(model2Image_x - 5, model2Image_y - 5 , imageWidth + 10, imageHeight + 10);
  }
}
