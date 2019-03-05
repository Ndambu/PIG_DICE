// Business (or back-end) logic:

var playerOne = {};
var playerTwo = {};

var diceRoll = function() {
  Math.floor(Math.random()*6)+1;
}

function Player() {
  this.roll = 0;
  this.yourScore = 0;
  this.total= 0;
}

Player.prototype.rolls = function() {
   if (this.rolls === 1) {
  alert("You rolled a one! Next player's turn")
  }
  else {
    this.yourScore += this.total;
  }
}

Player.prototype.hold = function() {
  this.yourScore += this.total;
  this.total = 0;
  alert("Next Player")
}

 //user Interface Logic
 $(document).ready(function() {
   $(document).click(function(){
     playerOne = new Player();
     playerTwo = new Player();
     $("button#roller").click(function (){
       playerOne.roll = diceRoll();
     });
   });
 });

//$(document).ready(function() {
 //$("button#rolled").click(function() {
