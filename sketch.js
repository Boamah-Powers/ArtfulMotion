// loads necessary dependencies before sketch begins
function preload() {
  
  // loading background image
  backgroundImage = loadImage('images/reas_tissue_p_5.jpg');
  
  // loading tracks
  for (const track of tracks) {
    loadedTracks.push(loadSound('music/' + track));
  }
  
  // loading mode images
  model1Image = loadImage('images/Screenshot 2023-10-08 at 3.26.22 PM.png');
  model2Image = loadImage('images/Screenshot 2023-10-08 at 6.00.01 PM.png');
  
  // storing video feed to video_feed variable
  video_feed = createCapture(VIDEO);
  
  // video_feed.size(CANVAS_WIDTH, CANVAS_HEIGHT);
  
  // prevents duplicate feed on the canvas
  video_feed.hide();
  
  // ------- handpose model --------
  
  // loading handpose model from ml5
  handpose = ml5.handpose(video_feed, modelLoaded);
  
  handpose.on('hand', results => {
      hand = results;
  })
  
  // ------- handpose model --------
  
  // ------- soundclassifier model --------
  
  // adjusting the probability threshold to produce a result
  // const options = { probabilityThreshold: 0.7 };
  
  // loads the 18w speech commands
  // classifier = ml5.soundClassifier(soundModel + 'model.json', options, modelReady);
  
  // ------- soundclassifier model --------
}

function setup() {
  // creating canvas
  createCanvas(windowWidth, windowHeight);
  
  // drawing background image
  image(backgroundImage, 0, 0, width, height);
  
  // computes positions and sizes based on current size
  colorPicker1_x = (5/138) * windowWidth;
  colorPicker2_x = (37/69) * windowWidth;
  colorPicker1_y = (1/8) * windowHeight;
  colorPicker2_y = (1/8) * windowHeight;
  colorPickerWidth = (59/138) * windowWidth;
  colorPickerHeight = (45/68) * windowHeight;
  
  // creates color picker objects
  create_color_picker();
  
  // hides color pickers at the beginning of the program
  colorPicker1.hide();
  colorPicker2.hide();
  
  // starts audio recognition
  //classifier.classify(gotResult);
  
  // print button on sketch
  createPrintButton();
  
  // creating volume slider
  createVolumeSlider();
  
  // playing music
  loadedTracks[indexOfTrackPlaying].loop();
  
}


function draw() {
  
  // determines which page to display
  switch (state) {
    case "menu":
      drawMenu();
      break;

    case "instructions":
      drawInstructions();
      break;
      
    case "select_colors":
      drawSelectColors();
      break;

    case "select_mode":
      drawSelectMode();
      break;
      
    case "create_art":
      drawArt();
      break;      
  }
  
  // adds back button if on any other page except menu and main sketch
  if (state != "menu" && state != "create_art") {
    drawBackButton();
  }
  
  // draws music control buttons
  drawMusicControls();
}

// function to resize the canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  // refreshes the background when the window is resized
  if (state == "create_art") {
    background(255);
  }
  
}