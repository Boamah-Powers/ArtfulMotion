function drawSelectColors() {
  // unhides the color pickers
  colorPicker1.show();
  colorPicker2.show();
  
  // drawing background image
  image(backgroundImage, 0, 0, width, height);
  
  // writing header to screen
  stroke('#96B752');
  fill(0);
  textFont('fantasy');
  textSize((10/276) * windowWidth);
  selectColorsHeader_x = (54/138) * windowWidth;
  selectColorsHeader_y = (11/136) * windowHeight;
  text(selectColorsHeader, selectColorsHeader_x, selectColorsHeader_y);
  
  // next button
  textSize((12/276) * windowWidth);
  nextButtonWidth = textWidth(nextButton);
  nextButton_x = (5/138) * windowWidth;
  nextButton_y = (16/17) * windowHeight;
  text(nextButton, nextButton_x, nextButton_y);
  highlightNextButton();
  
  // computes positions and sizes based on current size
  colorPicker1_x = (5/138) * windowWidth;
  colorPicker2_x = (37/69) * windowWidth;
  colorPicker1_y = (1/8) * windowHeight;
  colorPicker2_y = (1/8) * windowHeight;
  colorPickerWidth = (59/138) * windowWidth;
  colorPickerHeight = (45/68) * windowHeight;  
  
  // draws color picker object and samples to canas
  drawPickerImages();
  
  // updates the size and position of the color picker
  updatePickerParams();
} 

// creates color picker objects
function create_color_picker() {
  // color picker 1
  colorPicker1 = createColorPicker('#ed225d');
  colorPicker1.position(colorPicker1_x, colorPicker1_y + colorPickerHeight + 5);
  colorPicker1.size(colorPickerWidth, 20);

  
  // color picker 2
  colorPicker2 = createColorPicker('#A3B630');
  colorPicker2.position(colorPicker2_x, colorPicker2_y + colorPickerHeight + 5);
  colorPicker2.size(colorPickerWidth, 20);
  
}

// draws color picker object and samples to canas
function drawPickerImages() {
  // color picker 1
  stroke(colorPicker1.color());
  fill(colorPicker1.color());
  rect(colorPicker1_x, colorPicker1_y, colorPickerWidth, colorPickerHeight);
  
  // color picker 2
  stroke(colorPicker2.color());
  fill(colorPicker2.color());
  rect(colorPicker2_x, colorPicker2_y, colorPickerWidth, colorPickerHeight);
}

// updates the size and position of the color picker
function updatePickerParams() {
  // updates position
  colorPicker1.position(colorPicker1_x, colorPicker1_y + colorPickerHeight + 5);
  colorPicker2.position(colorPicker2_x, colorPicker2_y + colorPickerHeight + 5);
  
  // updates size
  colorPicker1.size(colorPickerWidth, 20);
  colorPicker2.size(colorPickerWidth, 20);
}

// highlights the next button when the mouse is over it
function highlightNextButton() {
  if (mouseX >= nextButton_x && mouseX <= nextButton_x + nextButtonWidth && mouseY >= nextButton_y - textAscent() * ascentScale && mouseY <= nextButton_y ) {
    fill('#96B752');
    text(nextButton, nextButton_x, nextButton_y);
    
    // if mouse is pressed on next, proceed to select mode
    if (mouseIsPressed) {
      colorPicker1.hide();
      colorPicker2.hide();
      state = "select_mode";
    }
  }
}