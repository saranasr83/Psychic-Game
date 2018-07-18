//computer choices are 26 letters of alphabets
computerOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//the value of wins and losses variable are 0 at the beginning
var gameData = {
    Wins: 0,
    Losses: 0,
    guessesLeft: 9,
}


function game() {
    var guessedLetter = [];

    // Randomly chooses a choice from the options array. This is the Computer's choice.
    var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log("computer answer is:" + computerChoice)

    // This function is run whenever the user presses a key.
    document.onkeyup = function (event) {
        //make sure you clear any previous "game over!" text:
        document.getElementById("gameover").textContent = ""

        // Determines which key was pressed.
        var playerGuess = event.key;
        //player choices are 26 letters of alphabets..inLowerCase()
        playerGuess = playerGuess.toLowerCase()

        //if letter player types and it is not the correct guess, the letter should show up on the screen
        if (playerGuess !== computerChoice) {
            guessedLetter.push(playerGuess)
            document.getElementById("guesses").textContent = guessedLetter
            //calculation of the remaining players guesses by decreasing 1 from (guesses left) whenever player types a letter wrong.
            gameData.guessesLeft--
            //change the value for guesses left
            document.getElementById("remainingG").textContent = gameData.guessesLeft
        }
        //another condition/rules of the game.if the player guesses right letter it will add up to wins
        if (playerGuess === computerChoice) {
            gameData.Wins++
            document.getElementById("wins").textContent = gameData.Wins
            //and also resets the number of guesses left back to 9
            gameData.guessesLeft = 9
            document.getElementById("gameover").textContent = "Congratulations, you won! a new game will start by guessing/pressing a new letter..."
            game();
        }
        //another conditions/rules of the game. if the player get 9 wrong guesses it will add up to losses
        //whenever the guess left is equal to 0 everything resets.
        if (gameData.guessesLeft === 0) {
            gameData.Losses++
            document.getElementById("losses").textContent = gameData.Losses

            document.getElementById("gameover").textContent = "game over! a new game will start by guessing/pressing a new letter..."

            //and also resets the number of guesses left back to 9
            gameData.guessesLeft = 9

            //lets start a new game:                    
            game();
        }
    }

};


game();