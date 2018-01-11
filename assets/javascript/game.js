

// Global Variable
var crystalValues = [1,2,3,4,5,6,7,8,9,10,11,12];
var crystalValue;

var computerValues = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120];
var computerValue;

var counter = 0;
var crystalCounter = 0;
var crystalCounterP = document.getElementById("crystalCounter");
crystalCounterP.innerHTML = crystalCounter;

var wins = 0;
var losses = 0;
var winsP = document.getElementById("wins");
winsP.innerHTML = "Wins: " + wins;
var lossesP = document.getElementById("losses");
lossesP.innerHTML = "Losses: " + losses;

var setCrystalValue1;
var setCrystalValue2;
var setCrystalValue3;
var setCrystalValue4;


// Random Crystal Value Generator
function beginLevel1() {
    crystalValue = crystalValues[Math.floor(Math.random() * crystalValues.length)];
	// console.log("Crystal Value: " + crystalValue);
	counter ++;
	setCrystalValue();
}


// Random Computer Value Generator
function beginLevel2() {
	computerValue = computerValues[Math.floor(Math.random() * computerValues.length)];
	// console.log("Computer Value: " + computerValue);

	var computerValueP = document.getElementById("computerValue");
	computerValueP.innerHTML = "The Computer's Random Number is: " + computerValue;
}



// Set each Crystal Value
function setCrystalValue() {

	if (counter === 1) {
		setCrystalValue1 = crystalValue;
		// console.log("Crystal Value 1: " + setCrystalValue1);
		beginLevel1();
	}

	if (counter === 2) {	
		setCrystalValue2 = crystalValue;
		// console.log("Crystal Value 2: " + setCrystalValue2);
		beginLevel1();
	}
		
	if (counter === 3) {
		setCrystalValue3 = crystalValue;
		// console.log("Crystal Value 3: " + setCrystalValue3);
		beginLevel1();
	}

	if (counter === 4) {
		setCrystalValue4 = crystalValue;
		// console.log("Crystal Value 4: " + setCrystalValue4);
	}	
}

  
// Assign values to each Crystal -Crystal 1
$(".crystal-image1").on("click", function() {

    // Adds crystal 1 value to total crystal value.
    crystalCounter += setCrystalValue1;

    // New counter value each time the crystal is clicked.
    // alert("Your new score is: " + crystalCounter);

	var crystalCounterP = document.getElementById("crystalCounter");
	crystalCounterP.innerHTML = crystalCounter;

    if (crystalCounter === computerValue) {
      alert("You win!");
      wins++;
      // console.log("Wins: " + wins);
      counter = 0;
      crystalCounter = 0;
      beginLevel1();
      beginLevel2();
    }

    else if (crystalCounter >= computerValue) {
      alert("You lose!!");
      losses++;
      // console.log("Losses: " + losses);
      counter = 0;
      crystalCounter = 0;
      beginLevel1();
      beginLevel2();
    }

	var winsP = document.getElementById("wins");
	winsP.innerHTML = "Wins: " + wins;

	var lossesP = document.getElementById("losses");
	lossesP.innerHTML = "Losses: " + losses;

  });


// Assign values to each Crystal -Crystal 2
$(".crystal-image2").on("click", function() {

    // Adds crystal 2 value to total crystal value.
    crystalCounter += setCrystalValue2;

    // New counter value each time the crystal is clicked.
    // alert("Your new score is: " + crystalCounter);

	var crystalCounterP = document.getElementById("crystalCounter");
	crystalCounterP.innerHTML = crystalCounter;

    if (crystalCounter === computerValue) {
      alert("You win!");
      wins++;
      // console.log("Wins: " + wins);
      counter = 0;
      crystalCounter = 0;
      beginLevel1();
      beginLevel2();
    }

    else if (crystalCounter >= computerValue) {
      alert("You lose!!");
      losses++;
      // console.log("Losses: " + losses);
      counter = 0;
      crystalCounter = 0;
      beginLevel1();
      beginLevel2();
    }

	var winsP = document.getElementById("wins");
	winsP.innerHTML = "Wins: " + wins;

	var lossesP = document.getElementById("losses");
	lossesP.innerHTML = "Losses: " + losses;

  });


// Assign values to each Crystal -Crystal 3
$(".crystal-image3").on("click", function() {

    // Adds crystal 3 value to total crystal value.
    crystalCounter += setCrystalValue3;

    // New counter value each time the crystal is clicked.
    // alert("Your new score is: " + crystalCounter);

	var crystalCounterP = document.getElementById("crystalCounter");
	crystalCounterP.innerHTML = crystalCounter;

    if (crystalCounter === computerValue) {
      alert("You win!");
      wins++;
      // console.log("Wins: " + wins);
      counter = 0;
      crystalCounter = 0;
      beginLevel1();
      beginLevel2();
    }

    else if (crystalCounter >= computerValue) {
      alert("You lose!!");
      losses++;
      // console.log("Losses: " + losses);
      counter = 0;
      crystalCounter = 0;
      beginLevel1();
      beginLevel2();
    }

	var winsP = document.getElementById("wins");
	winsP.innerHTML = "Wins: " + wins;

	var lossesP = document.getElementById("losses");
	lossesP.innerHTML = "Losses: " + losses;

  });


// Assign values to each Crystal -Crystal 4
$(".crystal-image4").on("click", function() {

    // Adds crystal 4 value to total crystal value.
    crystalCounter += setCrystalValue4;

    // New counter value each time the crystal is clicked.
    // alert("Your new score is: " + crystalCounter);

	var crystalCounterP = document.getElementById("crystalCounter");
	crystalCounterP.innerHTML = crystalCounter;

    if (crystalCounter === computerValue) {
      alert("You win!");
      wins++;
      // console.log("Wins: " + wins);
      counter = 0;
      crystalCounter = 0;
      beginLevel1();
      beginLevel2();
    }

    else if (crystalCounter >= computerValue) {
      alert("You lose!!");
      losses++;
      // console.log("Losses: " + losses);
      counter = 0;
      crystalCounter = 0;
      beginLevel1();
      beginLevel2();
    }

	var winsP = document.getElementById("wins");
	winsP.innerHTML = "Wins: " + wins;

	var lossesP = document.getElementById("losses");
	lossesP.innerHTML = "Losses: " + losses;

  });


beginLevel1();
beginLevel2();  

