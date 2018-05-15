var btn1 = document.getElementById('rock')
var btn2 = document.getElementById('paper')
var btn3 = document.getElementById('scissors')

var pc = ['Rock', 'Paper', 'Scissors']

btn1.addEventListener("click", myFunction1);
function myFunction1() {
  btn1.innerHTML = "Selected";
  setTimeout(function(){
  document.getElementById("rock").innerHTML = "Rock";
  }, 1000);
  var userInput = "Rock"
  myFunction4(userInput)
}

btn2.addEventListener("click", myFunction2);
function myFunction2() {
  btn2.innerHTML = "Selected";
  setTimeout(function(){
  document.getElementById("paper").innerHTML = "Paper";
}, 1000);
  var userInput = "Paper"
  myFunction4(userInput)
}

btn3.addEventListener("click", myFunction3);
function myFunction3() {
  btn3.innerHTML = "Selected";
  setTimeout(function(){
  document.getElementById("scissors").innerHTML = "Scissors";
}, 1000)
  var userInput = "Scissors"
  myFunction4(userInput)
}

function myFunction4(userInput) {
  var random = pc[Math.floor(Math.random() * pc.length)];
  if ((userInput == 'Rock' && random == 'Scissors')||(userInput == 'Paper' && random == 'Rock')||(userInput == 'Scissors' && random == 'Paper')) {
    alert(`Pc chose ${random}. You Win!`)
  } else if (userInput == random) {
    alert(`Pc chose ${random}. Tie!`)
  } else {
    alert(`Pc chose ${random}. You Lose!`)
  }
}
