//if we click on stat/reset
     //if we are playing 
        //reload the page
    //if we are not playing the game
         //set score to 0
        //show coundown box
        //reduce the time by one second in loop

            //timeleft?
               //yes->continue
               //no->gameover
            //change button to reset
            //generate new question& answer
//if we click on answer box
   //if we are playing 
       //correct?
         //yes
             //increse score
             //show correct box for 1sec
             //generate new Q&A
        //no
           //show try again box for 1sec
// Variables
// JavaScript for Math Game

// Variables
var playing = false;
var score = 0;
var timeRemaining;
var correctAnswer;

// Click on the Start/Reset button
document.getElementById("startreset").onclick = function () {
  if (playing) {
    // Reload the page to start over
    location.reload();
  } else {
    // Start the game
    playing = true;
    score = 0;
    timeRemaining = 60;

    // Show countdown box
    document.getElementById("timeremaining").style.display = "block";
    document.getElementById("startreset").innerHTML = "Reset Game";

    // Start the countdown
    startCountdown();

    // Generate a new question and answer
    generateQA();
  }
};

// Click on an answer box
for (var i = 1; i <= 4; i++) {
  document.getElementById("box" + i).onclick = function () {
    if (playing) {
      if (this.innerHTML == correctAnswer) {
        // Correct answer
        score++;
        document.getElementById("scoreValue").innerHTML = score;
        hide("wrong");
        show("correct");
        setTimeout(function () {
          hide("correct");
        }, 1000);

        // Generate a new question and answer
        generateQA();
      } else {
        // Wrong answer
        hide("correct");
        show("wrong");
        setTimeout(function () {
          hide("wrong");
        }, 1000);
      }
    }
  };
}

// Functions

// Start countdown
function startCountdown() {
  var timer = setInterval(function () {
    timeRemaining--;
    document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
    if (timeRemaining == 0) {
      stopCountdown(timer);
      show("gameover");
      document.getElementById("gameover").innerHTML =
        "<p>Game Over!</p><p>Your score is " + score + "</p>";
      hide("timeremaining");
      hide("correct");
      hide("wrong");
      playing = false;
      document.getElementById("startreset").innerHTML = "Start Game";
    }
  }, 1000);
}

// Stop countdown
function stopCountdown(timer) {
  clearInterval(timer);
}

// Generate a new question and answer
function generateQA() {
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;
  var operator = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];

  // Create the question and calculate the correct answer
  document.getElementById("question").innerHTML = num1 + " " + operator + " " + num2;
  correctAnswer = calculateAnswer(num1, num2, operator);

  // Randomly position the correct answer among the answer boxes
  var correctPosition = Math.floor(Math.random() * 4) + 1;
  document.getElementById("box" + correctPosition).innerHTML = correctAnswer;

  // Fill other answer boxes with random incorrect answers
  for (var i = 1; i <= 4; i++) {
    if (i !== correctPosition) {
      var wrongAnswer;
      do {
        wrongAnswer = generateWrongAnswer();
      } while (wrongAnswer === correctAnswer || isDuplicate(wrongAnswer, i));

      document.getElementById("box" + i).innerHTML = wrongAnswer;
    }
  }
}

// Calculate the correct answer
function calculateAnswer(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "NaN";
  }
}

// Generate a random incorrect answer
function generateWrongAnswer() {
  return Math.floor(Math.random() * 20) + 1;
}

// Check if an answer is already used in a specific box
function isDuplicate(answer, box) {
  for (var i = 1; i <= 4; i++) {
    if (document.getElementById("box" + i).innerHTML == answer && i !== box) {
      return true;
    }
  }
  return false;
}

// Show an element
function show(id) {
  document.getElementById(id).style.display = "block";
}

// Hide an element
function hide(id) {
  document.getElementById(id).style.display = "none";
}
document.getElementById("gameover").onclick = function () {
    hide("gameover");
  };