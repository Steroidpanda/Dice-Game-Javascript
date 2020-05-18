// var to hold function details for Play 1 and 2//
var playerOne = GenerateUrlPath();
var playerTwo = GenerateUrlPath();

//functions - need to work on and attach to buttons for better triggering//
ChangeDiceImage();
NotifyUser();

// Recursive function to generate random number and URL path for img src//
function GenerateUrlPath() {
  var srcPath = "images/dice" + RandomNumber() + ".png";

  function RandomNumber() {
    var randomNumber = Math.round(Math.random() * 5);
    randomNumber += 1;
    return randomNumber;
  }
  return srcPath;
}

//function to change image for each player//
function ChangeDiceImage() {
  var changeDiceImage1 = document.querySelector('.img1').setAttribute('src', playerOne);
  var changeDiceImage2 = document.querySelector('.img2').setAttribute('src', playerTwo);
}

//recursive function to compare dice rolls and then notify user//
function NotifyUser() {
  var heading = document.querySelector('h1');
  heading.innerHTML = CompareDiceRolls();

  function CompareDiceRolls() {
    var result = '';
    if (playerOne > playerTwo) {
      return result = "Player One Wins";
    } else if (playerOne < playerTwo) {
      return result = "Player Two Wins";
    } else {
      return result = "Draw";
    }
  }
}
