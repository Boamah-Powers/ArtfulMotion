function drawMusicControls() {
  
  stroke('#96B752');
  fill(0);
  
  // previous track button
  textSize((10/276) * windowWidth);
  prevTrackButtonWidth = textWidth(prevTrackButton);
  prevTrackButton_x = (37/69) * windowWidth ;
  prevTrackButton_y = (16/17) * windowHeight;
  text(prevTrackButton, prevTrackButton_x, prevTrackButton_y);
  
  // play and pause track button
  textSize((10/276) * windowWidth);
  playPauseButtonWidth = textWidth(playPauseButton);
  playPauseButton_x = (41/69) * windowWidth ;
  playPauseButton_y = (16/17) * windowHeight;
  text(playPauseButton, playPauseButton_x, playPauseButton_y);
  
  // next track button
  textSize((10/276) * windowWidth);
  nextTrackButtonWidth = textWidth(nextTrackButton);
  nextTrackButton_x = (45/69) * windowWidth ;
  nextTrackButton_y = (16/17) * windowHeight;
  text(nextTrackButton, nextTrackButton_x, nextTrackButton_y);
  
  highlightMusicControlButtons();
  resizeVolumeSlider();
  
  // adjusts volume of track playing 
  loadedTracks[indexOfTrackPlaying].setVolume(volumeSlider.value());
}

// highlights the music control buttons when the mouse is over it
function highlightMusicControlButtons() {
  if (mouseX >= prevTrackButton_x && mouseX <= prevTrackButton_x + prevTrackButtonWidth &&
      mouseY >= prevTrackButton_y - textAscent() * ascentScale && mouseY <= prevTrackButton_y ) {
    fill('#96B752');
    text(prevTrackButton, prevTrackButton_x, prevTrackButton_y);
    
    if (mouseIsPressed) {
      prevTrack();
    }
    
    stroke('#96B752');
    fill(0);
    text(playPauseButton, playPauseButton_x, playPauseButton_y);
    text(nextTrackButton, nextTrackButton_x, nextTrackButton_y);

  }
  else if (mouseX >= playPauseButton_x && mouseX <= playPauseButton_x + playPauseButtonWidth &&
      mouseY >= playPauseButton_y - textAscent() * ascentScale && mouseY <= playPauseButton_y ) {
    fill('#96B752');
    text(playPauseButton, playPauseButton_x, playPauseButton_y);
    
    if (mouseIsPressed) {
      playPauseTrack();
    }
    
    stroke('#96B752');
    fill(0);
    text(prevTrackButton, prevTrackButton_x, prevTrackButton_y);
    text(nextTrackButton, nextTrackButton_x, nextTrackButton_y);
    
  }
  else if (mouseX >= nextTrackButton_x && mouseX <= nextTrackButton_x + nextTrackButtonWidth &&
      mouseY >= nextTrackButton_y - textAscent() * ascentScale && mouseY <= nextTrackButton_y ) {
    fill('#96B752');
    text(nextTrackButton, nextTrackButton_x, nextTrackButton_y);
    
    if (mouseIsPressed) {
      nextTrack();
    }
    
    stroke('#96B752');
    fill(0);
    text(prevTrackButton, prevTrackButton_x, prevTrackButton_y);
    text(playPauseButton, playPauseButton_x, playPauseButton_y);
  }
}

// function to move to next track
function nextTrack() {
  // stop current playing track
  loadedTracks[indexOfTrackPlaying].stop();
  
  // increment index of loaded tracks
  indexOfTrackPlaying = (indexOfTrackPlaying + 1) % loadedTracks.length;
  
  // play next track
  loadedTracks[indexOfTrackPlaying].loop();
}

// function to pause and play tracks
function playPauseTrack() {
  // check if the current track is playing
  if (loadedTracks[indexOfTrackPlaying].isPlaying()) {
    loadedTracks[indexOfTrackPlaying].pause();
  }
  else {
    // play track if paused
    loadedTracks[indexOfTrackPlaying].loop();
  }
}

// function to go to previous track
function prevTrack() {
  // stop current playing track
  loadedTracks[indexOfTrackPlaying].stop();
  
  // decrement index of loaded tracks
  indexOfTrackPlaying = indexOfTrackPlaying == 0 ? loadedTracks.length - 1 : (indexOfTrackPlaying - 1);
  
  // play next track
  loadedTracks[indexOfTrackPlaying].loop();
}

// create volume slider object
function createVolumeSlider() {
  textSize((10/276) * windowWidth);
  volumeSlider = createSlider(0, 1, 0.5, 0.01);
  volumeSlider_x = (49/69) * windowWidth;
  volumeSlider_y = (16/17) * windowHeight - textAscent() * 0.5;
  volumeSlider.style('background-color', '#96B752');
  volumeSlider.position(volumeSlider_x, volumeSlider_y);
  
}

function resizeVolumeSlider() {
  textSize((10/276) * windowWidth);
  volumeSlider_x = (49/69) * windowWidth;
  volumeSlider_y = (16/17) * windowHeight - textAscent() * 0.5;
  volumeSlider.position(volumeSlider_x, volumeSlider_y);
  volumeSliderWidth = (160/1380) * windowWidth;
  volumeSlider.style('width', '' + volumeSliderWidth + 'px');
}