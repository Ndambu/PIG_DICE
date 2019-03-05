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
   if (this.rolls === 1);
  alert("You rolled a one! Next player's turn")
}
 //user Interface Logic

//$(document).ready(function() {
 //$("button#rolled").click(function() {
