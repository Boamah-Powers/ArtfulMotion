function createEndButton() {
  
  stroke('#96B752');
  fill(0);
  
  // next button
  textSize((12/276) * windowWidth);
  endButtonWidth = textWidth(endButton);
  endButton_x = (5/138) * windowWidth;
  endButton_y = (16/17) * windowHeight;
  text(endButton, endButton_x, endButton_y);
  highlightEndButton();
}

// highlights the end button when the mouse is over it
function highlightEndButton() {
  if (mouseX >= endButton_x && mouseX <= endButton_x + endButtonWidth && mouseY >= endButton_y - textAscent() * ascentScale && mouseY <= endButton_y ) {
    fill('#96B752');
    text(endButton, endButton_x, endButton_y);
    
    // if mouse is pressed on next, proceed to select mode
    if (mouseIsPressed) {
      printButton.hide();
      points = [];
      state = "menu";
    }
  }
}