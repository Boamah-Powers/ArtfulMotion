function createPrintButton () {
  // print button on sketch
  printButton  = createButton('Print');
  printButton_x = (130/138) * windowWidth ;
  printButton_y = (8/136) * windowHeight;
  printButton.position(printButton_x, printButton_y);
  printButton.size((10/161) * windowWidth, (40/477) * windowHeight);
  printButton.mousePressed(printCanvas);
  printButton.style('font-size', '20px');
  printButton.hide();
}

function updatePrintButton() {
  // resizes print button
  printButton_x = (120/138) * windowWidth ;
  printButton_y = (6/136) * windowHeight;
  printButton.size((10/161) * windowWidth, (40/477) * windowHeight);
  printButton.position(printButton_x, printButton_y);
  printButton.show();
}

// function to print piece
function printCanvas() {
  saveCanvas('my_piece', 'jpg');
}