//Psuedocode:

// user will be desplayed a main page with a brief description of the quiz along with a start button
// user will click the start button to proceed to the quiz
//  once start button is clicked; the timer will begin to countdown to 0 along with displaying the first question of the quiz
// the question will display 4 choiced that act as buttons 
// when user clicks button they will be displayed a message if they correctly chosose the right choice or not; along with proceeding to the next question all at once
// if the user chose the wrong choice 10 secs will be deducted from the timer
// user will proceed to the next question; and so on;
// when the user finds the end of the quiz they will be displayed final results and an opion to enter their name to add to their score.
// user will finally be taken to the highscores page that has the previous quiz results.

// Assign variables 
var timeEl = document.querySelector(".timer");
var highscores = document.querySelector(".highscores");
var questionTitle = document.querySelector(".title");
var question = document.querySelector("#question");

// New button elements with id
var choice1 = document.createElement("button");
choice1.setAttribute("id", "choiceOne")
var choice2 = document.createElement("button");
choice2.setAttribute("id", "choiceTwo")
var choice3 = document.createElement("button");
choice3.setAttribute("id", "choiceThree")
var choice4 = document.createElement("button");
choice4.setAttribute("id", "choiceFour")

// Setting the countdown
// used activity 09 to help get this right
document.getElementById('button1').addEventListener('click', function (){
  var countDown = 60;

  var timerInt = setInterval(function() {
    countDown--;
    timeEl.textContent = "Timer: " + countDown;
    questionOne();
    

    if(countDown === 0) {
      clearInterval(timerInt);
      // Calls function that is the end game 
      gameOver();
    }

  }, 1000);
});

// Functions for the questions
function questionOne(){
  questionTitle.textContent = "Question 1";
  question.textContent = "this is the first question";
  question.style.fontSize = "50px";
  document.body.appendChild(choice1);
  choice1.textContent = "Choice 1";
  document.body.appendChild(choice2);
  choice2.textContent = "Choice 2";
  document.body.appendChild(choice3);
  choice3.textContent = "Choice 3";
  document.body.appendChild(choice4);
  choice4.textContent = "Choice 4";
}

function questionTwo() {
  questionTitle.textContent = "Question 2";
  question.textContent = "this is the first question";
  question.style.fontSize = "50px";
  document.body.appendChild(choice1);
  choice1.textContent = "Choice 1";
  document.body.appendChild(choice2);
  choice2.textContent = "Choice 2";
  document.body.appendChild(choice3);
  choice3.textContent = "Choice 3";
  document.body.appendChild(choice4);
  choice4.textContent = "Choice 4";
}

function questionThree() {
  questionTitle.textContent = "Question 3";
  question.textContent = "this is the first question";
  question.style.fontSize = "50px";
  document.body.appendChild(choice1);
  choice1.textContent = "Choice 1";
  document.body.appendChild(choice2);
  choice2.textContent = "Choice 2";
  document.body.appendChild(choice3);
  choice3.textContent = "Choice 3";
  document.body.appendChild(choice4);
  choice4.textContent = "Choice 4";
}

function questionFour() {
  questionTitle.textContent = "Question 4";
  question.textContent = "this is the first question";
  question.style.fontSize = "50px";
  document.body.appendChild(choice1);
  choice1.textContent = "Choice 1";
  document.body.appendChild(choice2);
  choice2.textContent = "Choice 2";
  document.body.appendChild(choice3);
  choice3.textContent = "Choice 3";
  document.body.appendChild(choice4);
  choice4.textContent = "Choice 4";
}

function questionFive() {
  questionTitle.textContent = "Question 5";
  question.textContent = "this is the first question";
  question.style.fontSize = "50px";
  document.body.appendChild(choice1);
  choice1.textContent = "Choice 1";
  document.body.appendChild(choice2);
  choice2.textContent = "Choice 2";
  document.body.appendChild(choice3);
  choice3.textContent = "Choice 3";
  document.body.appendChild(choice4);
  choice4.textContent = "Choice 4";
}

// function to create the game over screen;
function gameOver() {
    questionTitle.textContent = "The Quiz is over!";
    question.textContent = "Time: 0";
    question.style.fontSize = "21px";
    choice1.style.display = "none";
    choice2.style.display = "none";
    choice3.style.display = "none";
    choice4.style.display = "none";
  }
  
  setTimer();