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
var startButton = document.querySelector("#button1");

var timerInt;
var countDown= 60;

// New button elements for the HTML with ID
var choice1 = document.createElement("button");
choice1.setAttribute("id", "choiceOne");
var choice2 = document.createElement("button");
choice2.setAttribute("id", "choiceTwo");
var choice3 = document.createElement("button");
choice3.setAttribute("id", "choiceThree");
var choice4 = document.createElement("button");
choice4.setAttribute("id", "choiceFour");

var choices = [choice1, choice2, choice3, choice4];

// created elements that show if the choice is correct
var correct = document.createElement("p");
correct.setAttribute("id", "correctChoice");
var incorrect = document.createElement("p");
incorrect.setAttribute("id", "incorrectChoice");



// creating the user input element
var submitDiv = document.createElement("div")

var userInput = document.createElement("input");
userInput.setAttribute("type", "text");
userInput.setAttribute("id", "userInput")

var submitBtn = document.createElement("button");
submitBtn.setAttribute("id", "submit");



// start button that starts the timer 
startButton.addEventListener('click', questionOne, setTimer);

// Setting the countdown
// used activity 09 to help get this right
function setTimer(){
    timerInt = setInterval(function() {
    countDown--;
    timeEl.textContent = "Timer: " + countDown;
    

    if(countDown === 0) {
      clearInterval(timerInt);
      gameOver();
    }

  }, 1000);
}; 

// Functions for each displayed questions
function questionOne(){
  setTimer();
  choiceAppear();
  ques1Choices();
  gotoQuesTwo();
  questionTitle.textContent = "Question 1";
  question.textContent = "Which represents the logical OR?";
}

function questionTwo() {
  choiceAppear();
  ques2Choices();
  gotoQuesThree();
  questionTitle.textContent = "Question 2";
  question.textContent = "The simple assignment operator __ is used to assign a value to a variable.";
  
}

function questionThree() {
  choiceAppear();
  ques3Choices();
  gotoQuesFour();
  questionTitle.textContent = "Question 3";
  question.textContent = "This data tyoer can only have one of two values i.e. true/false";
}

function questionFour() {
  choiceAppear();
  ques4Choices();
  gotoQuesFive();
  questionTitle.textContent = "Question 4";
  question.textContent = "The logical NOT is displayed as:";
}

function questionFive() {
  choiceAppear();
  ques5Choices();
  gotoGameOver();
  questionTitle.textContent = "Question 5";
  question.textContent = "The value ___ represents the intentional absence of any object value.";
}

// function to create the game over screen;
function gameOver() {
    questionTitle.textContent = "The Quiz is over!";
    question.textContent =  "Your time: " + countDown;
    clearInterval(timerInt);
    question.style.fontSize = "21px";
    choicesDisappear();

    document.body.appendChild(userInput);
    document.body.appendChild(submitBtn);
    submitBtn.textContent = ("submit");
}


// functions that were repeating are below; tried to clean it up above as best as i could

// function making choices disappear
function choicesDisappear(){
  for(var i = 0; i  < choices.length; i++)

    choices[i].style.display = "none";
}

// function making choices appear
function choiceAppear(){
  for(var i = 0; i  < choices.length; i++)

  document.body.appendChild(choices[i]);
  question.style.fontSize = "30px";
}

// functions that make buttons go to next question
function gotoQuesTwo(){
  choice1.addEventListener('click', questionTwo);
  choice2.addEventListener('click', questionTwo, wrongChoice);
  choice3.addEventListener('click', questionTwo, wrongChoice);
  choice4.addEventListener('click', questionTwo, wrongChoice);
}
function gotoQuesThree(){
  choice1.addEventListener('click', questionThree);
  choice2.addEventListener('click', questionThree, wrongChoice);
  choice3.addEventListener('click', questionThree, wrongChoice);
  choice4.addEventListener('click', questionThree, wrongChoice);
}
function gotoQuesFour(){
  choice1.addEventListener('click', questionFour);
  choice2.addEventListener('click', questionFour, wrongChoice);
  choice3.addEventListener('click', questionFour, wrongChoice);
  choice4.addEventListener('click', questionFour, wrongChoice);
}
function gotoQuesFive(){
  choice1.addEventListener('click', questionFive);
  choice2.addEventListener('click', questionFive, wrongChoice);
  choice3.addEventListener('click', questionFive, wrongChoice);
  choice4.addEventListener('click', questionFive, wrongChoice);
}
function gotoGameOver(){
  choice1.addEventListener('click', gameOver);
  choice2.addEventListener('click', gameOver, wrongChoice);
  choice3.addEventListener('click', gameOver, wrongChoice);
  choice4.addEventListener('click', gameOver, wrongChoice);
}

// function to change the text of the choices
function ques1Choices(){
  choice1.textContent = "||";
  choice2.textContent = "&&";
  choice3.textContent = "+=";
  choice4.textContent = "?";
}
function ques2Choices(){
  choice1.textContent = "=";
  choice2.textContent = "+";
  choice3.textContent = ";";
  choice4.textContent = "' '";
}
function ques3Choices(){
  choice1.textContent = "Boolean";
  choice2.textContent = "String";
  choice3.textContent = "Number";
  choice4.textContent = "Array";
}
function ques4Choices(){
  choice1.textContent = "!";
  choice2.textContent = "1";
  choice3.textContent = "?";
  choice4.textContent = "not";
}
function ques5Choices(){
  choice1.textContent = "Null";
  choice2.textContent = "Nothing";
  choice3.textContent = "Empty";
  choice4.textContent = "Anything Else";
}

function correctChoice(){
  document.body.appendChild(correct);
  correct.textCont = "Correct!"
}
 
// subtracting 10 seconds on wrong choice
// this works on the clock but i dont know how to apply it to a click on certain buttons
function wrongChoice(){
  countDown = countDown - 10;
}