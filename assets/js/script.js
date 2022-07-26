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


// Assign variables from HTML
var timeEl = document.querySelector(".timer");
var highscores = document.querySelector(".highscores");
var questionTitle = document.querySelector(".title");
var question = document.querySelector("#question");
var startButton = document.querySelector("#button1")

// New button elements for the HTML with ID
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

var countDown= 60;

// start button that starts the timer 
startButton.addEventListener('click', questionOne, setTimer);

// Setting the countdown
// used activity 09 to help get this right
function setTimer(){
  var timerInt = setInterval(function() {
    countDown--;
    timeEl.textContent = "Timer: " + countDown;
    

    if(countDown === 0) {
      clearInterval(timerInt);
      gameOver();
    }

  }, 1000);
}; 

function stopTimer(){
 stop(timerInt);
}

// Functions for the questions
function questionOne(){
  setTimer();
  choiceAppear();
  ques1Choices();
  gotoQuesTwo();
  questionTitle.textContent = "Question 1";
  question.textContent = "this is the first question";
}

function questionTwo() {
  choiceAppear();
  ques2Choices();
  gotoQuesThree();
  questionTitle.textContent = "Question 2";
  question.textContent = "this is the first question";
  
}

function questionThree() {
  choiceAppear();
  ques3Choices();
  gotoQuesFour();
  questionTitle.textContent = "Question 3";
  question.textContent = "this is the first question";
}

function questionFour() {
  choiceAppear();
  ques4Choices();
  gotoQuesFive();
  questionTitle.textContent = "Question 4";
  question.textContent = "this is the first question";
}

function questionFive() {
  choiceAppear();
  ques5Choices();
  gotoGameOver();
  questionTitle.textContent = "Question 5";
  question.textContent = "this is the first question";
}

// function to create the game over screen;
function gameOver() {
    questionTitle.textContent = "The Quiz is over!";
    question.textContent =  "Your time: " + countDown;
    question.style.fontSize = "21px";
    choicesDisappear();
}




// functions that were repeating are below; tried to clean it up above as best as i could


// function making choices disappear
function choicesDisappear(){
  choice1.style.display = "none";
  choice2.style.display = "none";
  choice3.style.display = "none";
  choice4.style.display = "none";
}

// function making choices appear
function choiceAppear(){
  document.body.appendChild(choice1);
  document.body.appendChild(choice2);
  document.body.appendChild(choice3);
  document.body.appendChild(choice4);
  question.style.fontSize = "50px";
}
// functions that make buttons go to next question
function gotoQuesTwo(){
  choice1.addEventListener('click', questionTwo);
  choice2.addEventListener('click', questionTwo);
  choice3.addEventListener('click', questionTwo);
  choice4.addEventListener('click', questionTwo);
}
function gotoQuesThree(){
  choice1.addEventListener('click', questionThree);
  choice2.addEventListener('click', questionThree);
  choice3.addEventListener('click', questionThree);
  choice4.addEventListener('click', questionThree);
}
function gotoQuesFour(){
  choice1.addEventListener('click', questionFour);
  choice2.addEventListener('click', questionFour);
  choice3.addEventListener('click', questionFour);
  choice4.addEventListener('click', questionFour);
}
function gotoQuesFive(){
  choice1.addEventListener('click', questionFive);
  choice2.addEventListener('click', questionFive);
  choice3.addEventListener('click', questionFive);
  choice4.addEventListener('click', questionFive);
}
function gotoGameOver(){
  choice1.addEventListener('click', gameOver);
  choice2.addEventListener('click', gameOver);
  choice3.addEventListener('click', gameOver);
  choice4.addEventListener('click', gameOver);
}

// function to change the text of the choices
function ques1Choices(){
  choice1.textContent = "Choice 1";
  choice2.textContent = "Choice 2";
  choice3.textContent = "Choice 3";
  choice4.textContent = "Choice 4";
}
function ques2Choices(){
  choice1.textContent = "Choice 1";
  choice2.textContent = "Choice 2";
  choice3.textContent = "Choice 3";
  choice4.textContent = "Choice 4";
}
function ques3Choices(){
  choice1.textContent = "Choice 1";
  choice2.textContent = "Choice 2";
  choice3.textContent = "Choice 3";
  choice4.textContent = "Choice 4";
}
function ques4Choices(){
  choice1.textContent = "Choice 1";
  choice2.textContent = "Choice 2";
  choice3.textContent = "Choice 3";
  choice4.textContent = "Choice 4";
}
function ques5Choices(){
  choice1.textContent = "Choice 1";
  choice2.textContent = "Choice 2";
  choice3.textContent = "Choice 3";
  choice4.textContent = "Choice 4";
}
