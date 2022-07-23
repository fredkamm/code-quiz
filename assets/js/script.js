//Psuedocode:

// user will be desplayed a welcome message and brief description of the quiz along with a start button
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
var choice1 = document.querySelector("#button1");
var choice2 = document.querySelector("#button2");
var choice3 = document.querySelector("#button3");
var choice4 = document.querySelector("#button4");
var questionTitle = document.querySelector(".title");
var question = document.querySelector("#question");

// global variables
var countDown= 60;

// setting up the start button
function choice1Btn(){
    questionTitle.textContent = "Question 1";
    question.textContent = "this is the first question";
    question.style.fontSize = "50px";
    choice1.textContent = "choice one";
    choice2.style.visibility = "visible";
    choice3.style.visibility = "visible";
    choice4.style.visibility = "visible";

}

// making <p> tag invisible
// function hidePara(){
//     var removePara = document.getElementById('intro');
//     if (removePara.style.visibility=='visible') {
//         removePara.style.visibility= 'hidden';
//     }
//     else
//         removePara.style.visibility='visible'
// }


// Setting the countdown
function setTimer() {
    var timerInt = setInterval(function() {
      countDown--;
      timeEl.textContent = "Timer: " + countDown;

      if(countDown <= 0) {
        clearInterval(timerInt);
        // Calls function that is the end game 
        gameOver();
      }

    }, 1000);
  }
setTimer();

//   function gameOver() {
//     timeEl.textContent = " ";
//     var imgEl = document.createElement("img");
//     imgEl.setAttribute("src", "images/image_1.jpg");
//     history.appendChild(imgEl);
  
//   }
  
//   setTimer();