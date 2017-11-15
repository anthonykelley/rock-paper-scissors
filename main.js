var btn1 = document.getElementById('rock')
var btn2 = document.getElementById('paper')
var btn3 = document.getElementById('scissors')

var userInput = []



btn1.addEventListener("click", myFunction1);
function myFunction1() {
  btn1.innerHTML = "Selected";
  setTimeout(function(){ 
  document.getElementById("rock").innerHTML = "Rock";
  }, 1000);
  userInput.push("Rock");
}

btn2.addEventListener("click", myFunction2);
function myFunction2() {
  btn2.innerHTML = "Selected";
  setTimeout(function(){ 
  document.getElementById("paper").innerHTML = "Paper";
}, 1000);
  userInput.push("Paper");
}

btn3.addEventListener("click", myFunction3);
function myFunction3() {
  btn3.innerHTML = "Selected";
  setTimeout(function(){ 
  document.getElementById("scissors").innerHTML = "Scissors";
}, 1000)
  userInput.push("Scissors");
}

