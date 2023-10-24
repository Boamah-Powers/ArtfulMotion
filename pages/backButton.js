function drawBackButton() {
  
  stroke('#96B752');
  fill(0);
  
  // next button
  textSize((12/276) * windowWidth);
  backButtonWidth = textWidth(backButton);
  backButton_x = (109/138) * windowWidth ;
  backButton_y = (11/136) * windowHeight;
  text(backButton, backButton_x, backButton_y);
  highlightBackButton();
  
}

// highlights the next button when the mouse is over it
function highlightBackButton() {
  if (mouseX >= backButton_x && mouseX <= backButton_x + backButtonWidth && mouseY >= backButton_y - textAscent() * ascentScale && mouseY <= backButton_y ) {
    fill('#96B752');
    text(backButton, backButton_x, backButton_y);
    
    // if mouse is pressed on next, proceed to select mode
    if (mouseIsPressed) {
      switch (state) {
        case "select_colors":
          colorPicker1.hide();
          colorPicker2.hide();
          state = "menu";
          break;
        case "select_mode":
          state = "select_colors";
          break;
        case "instructions":
          state = "menu";
          break;
      }
    }
  }

}