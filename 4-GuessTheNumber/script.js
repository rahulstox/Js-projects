let RandomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessslot = document.querySelector(".guesses");
const guessRemaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");


const p = document.createElement('p');

let prevGuess = [];

let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess)
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a Valid Number");
  } else if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      DisplayGuess(guess);
      DisplayMessage(`Game Over. Random Number was ${RandomNum}`);
      EndGame();
    } else {
      DisplayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === RandomNum) {
    DisplayMessage(`You guessed it Right`);
    EndGame();
  } else if (guess < RandomNum) {
    DisplayMessage("Too Low");
  } else if (guess > RandomNum) {
    DisplayMessage("Too High");
  }
}

function DisplayGuess(guess) {
    userInput.value = '';
    guessslot.innerHTML += `${guess} |  ` 
    numGuess++;
    guessRemaining.innerHTML = `${10-numGuess}`

}

function DisplayMessage(message) {
    lowOrHi.innerHTML=`<<h2>${message}</h2>`;
}

function newGame() {
    const newGameButton = document.querySelector(`#newGame`)
    newGameButton.addEventListener('click',function(e){
        RandomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess=1;
        guessslot.innerHTML= ''
        guessRemaining.innerHTML = `${10-numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame = true;

    })


}

function EndGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML =`<h2 id = "newGame"> Start new Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
