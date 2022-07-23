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

// Setting the countdown
var countDown = 60

function setTimer() {
    var timerInt = setInterval(function() {
      countDown--;
      timeEl.textContent = "Timer: " + countDown;

      if(countDown === 0) {
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