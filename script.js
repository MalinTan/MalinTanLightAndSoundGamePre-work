// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = new Array(8);
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var strikeCounter = 0;
var timer;
var timeForGuess = 21; // you have 60 seconds to guess
var clueHoldTime = 1000; //how long to hold each clue's light/sound

function startGame() {
  //initialize game variables
  progress = 0;
  clueHoldTime = 1000;
  gamePlaying = true;
  strikeCounter = 0;
  timeForGuess = 21;

  //hides the timer
  document.getElementById("time").innerHTML = "You have 20 seconds to guess";

  //hides the images
  document.getElementById("yes").classList.add("hidden");
  document.getElementById("no1").classList.add("hidden");
  document.getElementById("no2").classList.add("hidden");
  document.getElementById("no3").classList.add("hidden");

  //reset strike counter text
  document.getElementById("strikes").innerHTML = "You have 0 strikes";

  //shows the start button and hides the end button
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("endBtn").classList.remove("hidden");
  randomizePattern();
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  clearInterval(timer);
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("endBtn").classList.add("hidden");
}

// Function that creates the pattern in the game
function randomizePattern() {
  for (let i = 0; i < pattern.length; i++) {
    pattern[i] = Math.floor(Math.random() * 6) + 1;
  }
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

// Play clues functions
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playMusic(btn);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  document.getElementById("yes").classList.add("hidden");
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime = clueHoldTime - 110;
  timer = setInterval(displayTime, 1000);
}

// Display time function
function displayTime() {
  timeForGuess = timeForGuess - 1;
  if (timeForGuess == 0) {
    //you ran out of time to guess
    loseGame();
  } else {
    //update the timer
    document.getElementById("time").innerHTML =
      "You have " + timeForGuess + " seconds to guess";
  }
}

// Guess check function
function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  } else if (btn == pattern[guessCounter]) {
    document.getElementById("yes").classList.remove("hidden");
    if (guessCounter < progress) {
      //check the next guess
      guessCounter++;
    } else if (progress == pattern.length - 1) {
      // you Win
      winGame();
    } else {
      //move on to the next clue sequence
      progress++;
      clearInterval(timer);
      timeForGuess = 21;
      setTimeout(playClueSequence, 500);
    }
  } else {
    //you lose now check the strike number
    //also add a strike
    strikeCounter++;

    //update strike counter
    document.getElementById("yes").classList.add("hidden");
    document.getElementById("no" + strikeCounter).classList.remove("hidden");
    document.getElementById("strikes").innerHTML =
      "You have " + strikeCounter + " strikes";
    if (strikeCounter == 3) {
      //you lost the game
      loseGame();
    }
  }
}

// Win and lose game functions
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Congratulations. You won!");
}

// New Sound Synthesis Functions
const musicMap = {
  1: "https://cdn.glitch.com/9a12b68e-2051-42e8-8018-7a3fb3c162a4%2F112568__juskiddink__piano-f-minor-chord-5th-octave.wav?v=1616274018055",
  2: "https://cdn.glitch.com/9a12b68e-2051-42e8-8018-7a3fb3c162a4%2F127165__daphne-in-wonderland__piano-chord-hit-3a.wav?v=1616274144110",
  3: "https://cdn.glitch.com/9a12b68e-2051-42e8-8018-7a3fb3c162a4%2F419492__plasterbrain__melancholy-ui-chime.flac?v=1616274428695",
  4: "https://cdn.glitch.com/9a12b68e-2051-42e8-8018-7a3fb3c162a4%2F488796__phonosupf__piano-chord-7.wav?v=1616274491796",
  5: "https://cdn.glitch.com/9a12b68e-2051-42e8-8018-7a3fb3c162a4%2F128795__mtcband__chord-11.wav?v=1616275704368",
  6: "https://cdn.glitch.com/9a12b68e-2051-42e8-8018-7a3fb3c162a4%2F177257__sergeeo__ukulele-chord-3-acorde-de-ukelele-3.wav?v=1616275704997"
};

function playMusic(btn) {
  var music = new Audio(musicMap[btn]);
  music.play();
}

// Old Sound Synthesis Functions
const freqMap = {
  1: 225.5,
  2: 600.5,
  3: 150.4,
  4: 475.9,
  5: 200,
  6: 250.5
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
