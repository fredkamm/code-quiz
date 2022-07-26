//Psuedocode:
// users will be displayed the home page with a start button
// when user clicks start button
// then the timer will begin
// question one will display along with 4 choices
  // if user clicks the correct choice
  // then question 2 will display
  // if they get choice wrong
  // then 10 seconds will be deducted from the timer
  // question two will display along with 2 choices
  // if user clicks the correct choice
  // then question 2 will display
  // if they get choice wrong
  // then 10 seconds will be deducted from the timer
  // question three will display along with 2 choices
  // if user clicks the correct choice
  // then question 2 will display
  // if they get choice wrong
  // then 10 seconds will be deducted from the timer
  // question four will display along with 2 choices
  // if user clicks the correct choice
  // then question 2 will display
  // if they get choice wrong
  // then 10 seconds will be deducted from the timer
// question five will display along with 2 choices
  // if user clicks the correct choice
  // then question 2 will display
  // if they get choice wrong
  // then 10 seconds will be deducted from the timer
// if user completes quiz before timer they will be displayed the final screen and the timer will stop
// user will then enter their name along with their score
// users will be taken to the high score page


// Assign variables 
var timeEl = document.querySelector(".timer");
var highscores = document.querySelector(".highscores");
var questionTitle = document.querySelector(".title");
var question = document.querySelector("#question");
var startButton

// New button elements with id
var choice1 = document.createElement("button");
choice1.setAttribute("id", "choiceOne")
var choice2 = document.createElement("button");
choice2.setAttribute("id", "choiceTwo")
var choice3 = document.createElement("button");
choice3.setAttribute("id", "choiceThree")
var choice4 = document.createElement("button");
choice4.setAttribute("id", "choiceFour")

// element that shows the answer
var showAnswer =document.createElement("div")
showAnswer.setAttribute('id', 'answer')

// Setting the countdown
// used activity 09 to help get this right
var countDown= 60;

document.getElementById('button1').addEventListener('click', questionOne, setTimer);

function setTimer(){
  var timerInt = setInterval(function() {
    countDown--;
    timeEl.textContent = "Timer: " + countDown;
    

    if(countDown === 0) {
      clearInterval(timerInt);
      // Calls function that is the end game 
      gameOver();
    }

  }, 1000);
}; 

// Functions for the questions
function questionOne(){
  setTimer();
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
  choice1.addEventListener('click', questionTwo);
  choice2.addEventListener('click', questionTwo);
  choice3.addEventListener('click', questionTwo);
  choice4.addEventListener('click', questionTwo);
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
  choice1.addEventListener('click', questionThree);
  choice2.addEventListener('click', questionThree);
  choice3.addEventListener('click', questionThree);
  choice4.addEventListener('click', questionThree);
}

function questionThree() {
  questionTitle.textContent = "Question 3";
  question.textContent = "this is the first question";
  question.style.fontSize = "50px";
  document.body.appendChild(choice1);
  choice1.textContent = "Choice 1";
  choice1.addEventListener('click', questionFour);
  document.body.appendChild(choice2);
  choice2.textContent = "Choice 2";
  choice2.addEventListener('click', questionFour);
  document.body.appendChild(choice3);
  choice3.textContent = "Choice 3";
  choice3.addEventListener('click', questionFour);
  document.body.appendChild(choice4);
  choice4.textContent = "Choice 4";
  choice4.addEventListener('click', questionFour);
}

function questionFour() {
  questionTitle.textContent = "Question 4";
  question.textContent = "this is the first question";
  question.style.fontSize = "50px";
  document.body.appendChild(choice1);
  choice1.textContent = "Choice 1";
  choice1.addEventListener('click', questionFive);
  document.body.appendChild(choice2);
  choice2.textContent = "Choice 2";
  choice2.addEventListener('click', questionFive);
  document.body.appendChild(choice3);
  choice3.textContent = "Choice 3";
  choice3.addEventListener('click', questionFive);
  document.body.appendChild(choice4);
  choice4.textContent = "Choice 4";
  choice4.addEventListener('click', questionFive);
}

function questionFive() {
  questionTitle.textContent = "Question 5";
  question.textContent = "this is the first question";
  question.style.fontSize = "50px";
  document.body.appendChild(choice1);
  choice1.textContent = "Choice 1";
  choice1.addEventListener('click', gameOver);
  document.body.appendChild(choice2);
  choice2.textContent = "Choice 2";
  choice2.addEventListener('click', gameOver);
  document.body.appendChild(choice3);
  choice3.textContent = "Choice 3";
  choice3.addEventListener('click', gameOver);
  document.body.appendChild(choice4);
  choice4.textContent = "Choice 4";
  choice4.addEventListener('click', gameOver);
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
  
