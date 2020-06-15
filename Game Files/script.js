let operationNamesArray = [
  "Tiger Strike",
  "Blue Sun",
  "Hidden Lilly",
  "Urban Garden",
  "Evening Light",
  "Trident",
  "Sunken Coast",
  "Mongoose",
  "Urgent Fury",
  "Teardrop",
  "Broken Glass",
  "Capital Storm",
];

//Game vars
let teamOneTickets = 1000;
let teamTwoTickets = 1000;
let teamOneCash = 50000;
let teamTwoCash = 50000;
//DOM vars
let teamOneTicketTitle = document.getElementById("teamOneTickets");
let teamTwoTicketTitle = document.getElementById("teamTwoTickets");
let teamOneCashTitle = document.getElementById("teamOneCash");
let teamTwoCashTitle = document.getElementById("teamTwoCash");

//Constructor for the unit type
function UnitType(unit, atk, cost) {
  this.unitName = unit;
  this.attackDmg = atk;
  this.costOfUnit = cost;
}

const footSoldier = new UnitType("Foot Soldier", 1, 100);

//Generates the name of the operation at game start
function operationGenerator() {
  var arrayLength = operationNamesArray.length;
  var randomNum = Math.floor(Math.random() * arrayLength + 1);
  var opName = operationNamesArray[randomNum - 1];

  document.getElementById("operationName").innerHTML = "Operation " + opName;
}

//Function is employed at game start
function gameStart() {
  operationGenerator();
  teamTwoTicketTitle.innerHTML = teamTwoTickets;
  teamOneTicketTitle.innerHTML = teamOneTickets;
  teamOneCashTitle.innerHTML = "$" + teamOneCash;
  teamTwoCashTitle.innerHTML = "$" + teamTwoCash;
}

gameStart();
