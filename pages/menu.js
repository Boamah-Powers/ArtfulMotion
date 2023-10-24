function drawMenu() {
  // drawing background image
  image(backgroundImage, 0, 0, width, height);
  
  // computes new x and y position after resizing
  menuHeader_x = (25/138) * windowWidth;
  menuHeader_y = (39/136) * windowHeight;
  menuOption1_x = (7/138) * windowWidth;
  menuOption1_y = (3/8) * windowHeight;
  menuOption2_x = (7/138) * windowWidth;
  menuOption2_y = (63/136) * windowHeight;
  menuOption3_x = (7/138) * windowWidth;
  menuOption3_y = (75/136) * windowHeight;
  
  // grey background for text
  fill(200, 200, 200);
  noStroke();
  rect((5/138) * windowWidth, (29/136) * windowHeight, (20 / 69) * windowWidth, (7/17) * windowHeight);
  
  // Menu header
  stroke(0);
  fill(0);
  textSize((3/69)*windowWidth);
  textAlign(CENTER);
  textFont('fantasy');
  text(menuHeader, menuHeader_x, menuHeader_y);
  
  // Menu options
  textSize((2/69)*windowWidth);
  textAlign(LEFT);
  textFont('cursive');
  
  // helps track boundaries of text
  menuOption1Width = textWidth(menuOption1);
  menuOption2Width = textWidth(menuOption2);
  menuOption3Width = textWidth(menuOption3);
  
  highlightMenuOption();
  
}

// function to create highlighting effect for menu items
function highlightMenuOption() {
  if (mouseX >= menuOption1_x && mouseX <= menuOption1_x + menuOption1Width && mouseY >= menuOption1_y - textAscent() * ascentScale && mouseY <= menuOption1_y) {
    stroke('#96B752');
    fill('#96B752');
    text(menuOption1, menuOption1_x, menuOption1_y);
    stroke(0);
    fill(0);
    text(menuOption2,menuOption2_x, menuOption2_y);
    text(menuOption3, menuOption3_x, menuOption3_y);
    
    // if mouse is pressed on start sketch, proceed to select colors page
    if (mouseIsPressed) {
      state = "select_colors";
    }
  }
  else if (mouseX >= menuOption2_x && mouseX <= menuOption2_x + menuOption2Width && mouseY >= menuOption2_y - textAscent() * ascentScale && mouseY <= menuOption2_y) {
    stroke('#96B752');
    fill('#96B752');
    text(menuOption2, menuOption2_x, menuOption2_y);
    stroke(0);
    fill(0);
    text(menuOption1, menuOption1_x, menuOption1_y);
    text(menuOption3, menuOption3_x, menuOption3_y);
    
    // if mouse is pressed, show instructions page
    if (mouseIsPressed) {
      state = "instructions";
    }
  }
  else if (mouseX >= menuOption3_x && mouseX <= menuOption3_x + menuOption3Width && mouseY >= menuOption3_y - textAscent() * ascentScale && mouseY <= menuOption3_y) {
    stroke('#96B752');
    fill('#96B752');
    text(menuOption3, menuOption3_x, menuOption3_y);
    stroke(0);
    fill(0);
    text(menuOption1, menuOption1_x, menuOption1_y);
    text(menuOption2, menuOption2_x, menuOption2_y);
    
    // if mouse is pressed, close sketch
    if (mouseIsPressed) {
      remove();
    }
  }
  else {
    stroke(0);
    fill(0);
    text(menuOption1, menuOption1_x, menuOption1_y);
    text(menuOption2, menuOption2_x, menuOption2_y);
    text(menuOption3, menuOption3_x, menuOption3_y);
  }
  
}
