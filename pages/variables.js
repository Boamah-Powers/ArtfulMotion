// variable to indicate state of the program
let state = "menu";

// variables for menu text
let menuHeader = "Menu";
let menuHeader_x;
let menuHeader_y;
let menuOption1 = "* Start sketch";
let menuOption1_x;
let menuOption1_y;
let menuOption1Width;
let menuOption2 = "* Instructions";
let menuOption2_x;
let menuOption2_y;
let menuOption2Width;
let menuOption3 = "* Exit";
let menuOption3_x;
let menuOption3_y;
let menuOption3Width;

// variables for instructions page text
let instructionsHeader = "Instructions";
let instructionsHeader_x;
let instructionsHeader_y;
let instructions = [
  "Welcome to ArtfulMotion – an interactive digital art experience where you can engage with your",
  "computer using your webcam and microphone. To begin your creative journey, access the 'Start",
  "Sketch' option from the menu. Here, you can select your preferred color palette and drawing",
  "mode to shape your artistic vision. ArtfulMotion offers two distinctive drawing modes to",
  "explore.",
  "",
  "Within the main sketch interface, you have the flexibility to either print your masterpiece or",
  "conclude your artistic session. Immerse yourself in the accompanying music as you craft your",
  "unique art. Unleash your creativity and enjoy the artistic process!",
];


// variable for background image
let backgroundImage;

// variables for Select mode screen text
let selectColorsHeader = "Select colors";
let selectColorsHeader_x;
let selectColorsHeader_y;

// variables for color picker objects
let colorPicker1;
let colorPicker2;
let colorPicker1_x;
let colorPicker2_x;
let colorPicker1_y;
let colorPicker2_y;
let colorPickerWidth;
let colorPickerHeight;

// variables for next button
let nextButton = "Next";
let nextButton_x;
let nextButton_y;
let nextButtonWidth;

// variables for print button
let printButton;
let printButton_x;
let printButton_y;

// variables for end button
let backButton = "Back";
let backButton_x;
let backButton_y;
let backButtonWidth;

// variables for back button
let endButton = "End";
let endButton_x;
let endButton_y;
let endButtonWidth;

// variables for Select mode screen text
let selectionModeHeader = "Select mode";
let selectionModeHeader_x;
let selectionModeHeader_y;

// variables for images
let model1Image;
let model2Image;

let model1Image_x;
let model2Image_x;
let model1Image_y;
let model2Image_y;

let imageWidth;
let imageHeight;

// variable to scale text ascent
let ascentScale = 0.8;

// variables for music
let tracks = [
  'Mozart_DonGiovanni.mp3',
  'NonPioAndraiFarfalloneAmoroso.mp3',
  'marriage_of_figaro.mp3'
];
let loadedTracks = [];
let indexOfTrackPlaying = 0;

// variables for previous track button
let prevTrackButton = "⏮";
let prevTrackButton_x;
let prevTrackButton_y;
let prevTrackButtonWidth;

// variables for next track button
let nextTrackButton = "⏭";
let nextTrackButton_x;
let nextTrackButton_y;
let nextTrackButtonWidth;

// variables for play and pause track button
let playPauseButton = "⏯";
let playPauseButton_x;
let playPauseButton_y;
let playPauseButtonWidth;

// variable for volume slider
let volumeSlider;
let volumeSlider_x;
let volumeSlider_y;
let volumeSliderWidth;

// variable for the mode to render in;
let renderMode;

let video_feed;            // variable for video feed
let videoScale = 5;        // variable to scale the video feed
let handpose;              // hand pose model
let hand = [];             // result from hand pose detection

let points = [];           // array of points created

let classifier;            // variable to hold speech recognition model
let drawing_flag = true;  // tracks whether pen down or up

// Teachable Machine model URL:
let soundModel = 'https://teachablemachine.withgoogle.com/models/W8iESZuaB/';