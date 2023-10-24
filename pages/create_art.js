function drawArt() {
  
  // scaling video to avoid distortion
  let aspectRatio = video_feed.height/video_feed.width;
  
  // mirroring feed from the webcam
  // -- beginning of transformation
  push();
  translate(width, 0);
  scale(-1, 1);
  if (drawing_flag) {
    loadKeyPoints();
    drawKeyPoints();
  }
  image(video_feed, width - ( width / videoScale ), 0,  
        width / videoScale , (width /videoScale) * aspectRatio);
  pop();
  // -- ending of transformation
  
  // print button
  updatePrintButton();
  
  // end button
  createEndButton();

}

// ------- handpose model --------

function modelLoaded() {
  print(" Handpose model ready");
}

// A function to create points for the detected keypoints
function loadKeyPoints() {
  for (let i = 0; i < hand.length; i += 1) {
    const prediction = hand[i];
    for (let j = 0; j < prediction.landmarks.length; j += 1) {
      const keypoint = prediction.landmarks[j];
      let x = map(keypoint[0], 0, video_feed.width, 0, width);
      let y = map(keypoint[1], 0, video_feed.height, 0 , height);
      points.push(new Point(x, y, prediction.handInViewConfidence));
    }
  }
}

// function to draw detected keypoints
function drawKeyPoints() {
  if (renderMode == 1) {
    for (const point of points) {
      point.draw();
    }
  }
  else {
    beginShape();
    for (const point of points) {
      point.draw();
    }
    endShape();
    points = [];
  }
  
}

// ------- handpose model --------


// ------- soundclassifier model --------

// function modelReady() {
//   // classify sound
//   print("Sound classifier model ready")
//   // classifier.classify(gotResult);
// }

// function gotResult(error, result) {
//   // checks if an error occurs and logs it to the console
//   if (error) {
//     print(error);
//     return;
//   }
  
//   print(result[0].label);
  
//   // log the result
//   if (result[0].label == "pause") {
//     drawing_flag = false;
//   }
//   else if (result[0].label == "start") {
//     drawing_flag = true;
//   }
// }

// ------- soundclassifier model --------
