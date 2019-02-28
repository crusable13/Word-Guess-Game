var wordsList = ["jaime", "ned", "daenerys", "cersei", "aegon", "arya",
  "tyrion", "sandor", "melisandre", "bronn", "varys", "samwell", "bran", "petyr", "brienne", "theon", "sansa", "joffrery"];

var chosenWord = "";

var lettersInChosenWord = [];


var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];


var letterGuessed = "";


var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


function startGame() {


  numGuesses = 9;

  chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];


  lettersInChosenWord = chosenWord.split("");


  numBlanks = lettersInChosenWord.length;


  console.log(chosenWord);


  blanksAndSuccesses = [];


  wrongGuesses = [];


  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }


  document.getElementById("guesses-left").innerHTML = numGuesses;


  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {


  var letterInWord = false;

  for (var i = 0; i < numBlanks; i++) {

    if (chosenWord[i] === letter) {


      letterInWord = true;
    }
  }


  if (letterInWord) {


    for (var j = 0; j < numBlanks; j++) {


      if (chosenWord[j] === letter) {


        blanksAndSuccesses[j] = letter;
      }
    }


    console.log(blanksAndSuccesses);
  }


  else {


    wrongGuesses.push(letter);


    numGuesses--;

  }

}


function roundComplete() {


  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);


  document.getElementById("guesses-left").innerHTML = numGuesses;


  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");


  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");


  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {


    winCounter++;


    alert("You win!");


    document.getElementById("win-counter").innerHTML = winCounter;


    startGame();
  }


  else if (numGuesses === 0) {

    lossCounter++;

    alert("You lose");


    document.getElementById("loss-counter").innerHTML = lossCounter;


    startGame();

  }

}

startGame();

document.onkeyup = function (event) {

  letterGuessed = String.fromCharCode(event.which).toLowerCase();

  checkLetters(letterGuessed);

  roundComplete();
};
