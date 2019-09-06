var alphabet= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var compIndex=Math.floor(Math.random()*alphabet.length);
console.log ("CompIndex" + compIndex);
var guesses =10
var guessedLetters = [];
var compChoice = alphabet[compIndex];
var wins = 0;
var losses = 0;
console.log ("Secret Answer " + compChoice);

// html bridges
var $wins = document.getElementById("#wins");
var $losses = document.getElementById('#losses');
var $guesses = document.getElementById('#guesses-left');
var $guessedLetters = document.getElementById('#letters-guessed');

document.onkeyup = function(event){
    var letter = event.key.toLowerCase();
    console.log(letter);
// letter is a letter and not already guessed
    if (alphabet.includes(letter) && !guessedLetters.includes(letter)) {
        if (letter === compChoice){
            alert("You Win!");
            wins++
            startGame()
        } else {
            guesses--;
            guessedLetters.push(letter)
            
        }
        if (guesses === 0 ) {
            alert("You Lost!");
            losses++
            startGame()
        }
        updateDisplay()
    }
}

function startGame () {
    guesses = 10;
    guessedLetters = [];
    compIndex=Math.floor(Math.random()*alphabet.length);
    compChoice = alphabet[compIndex];
console.log ("Secret Answer " + compChoice);
    updateDisplay()
}

function updateDisplay() {
    $wins.textContent = ("Wins: " + wins);
    $losses.textContent = ("Losses: " + losses);
    $guesses.textContent = ("Guesses Remaining: " + guesses);
    // var lettersString = ("");
    // for (var i = 0 ; i < guessedLetters.length; i++) {
    //     lettersString+= (guessedLetters[i] + " ");
    // };
    // $guessedLetters.textContent  (lettersString);
}

// startGame();