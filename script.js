// Global variables
var resultParagraph = document.getElementById("result");
var random;
var range = 100;
var nextRandom = Math.floor(Math.random() * range + 1);



// Function to generate a random number
function generateRandom() {
    random = nextRandom;
    nextRandom = Math.floor(Math.random() * range + 1);
    console.log(random);
    resultParagraph.innerHTML = random;
}

// Function for the higher button
function higher() {
   if (nextRandom > random) {
    window.alert("You win!");
   }
   else if (nextRandom < random) {
    window.alert("you lose.");
   }
   generateRandom();
}

// Function for the lower button
function lower() {
    if (nextRandom < random) {
        window.alert("You win!");
       }
       else if (nextRandom > random) {
        window.alert("you lose.");
       }
       generateRandom();
   
}

//Generate a number to start the game!
generateRandom();