// What is needed for a guesing game?

// 1.  A range for our user to guess between. This should be 1-10.
// 2.  A randomized computer answer.
// 3.  A user guess that will provide a prompt
// 4.  A guess count (for loop variable declaration)
// 5.  gameLost = false


// Logic
// 1.  A way to validate the user guess
// 2.  Check if the user guess === the computer answer and alert that he / she won
// 3.  If the user guess is greater than the computer answer - nudge him or her to guess lower
// 4.  If the user guess is lower than the computer answer - nudge him or her to guess higher
// 5.  Handle the case when a user loses


// let guess =  document.getElementById('guess')

// let button = document.querySelector('.guess');
// button.addEventListener('click', guessNum);
// document.body.appendChild(button)
document.getElementById('guess').onclick = gues
button.addEventListener('click', guessNum);


function guessNum() {

    let numGuess = prompt('Please guess a number between 0 and 10')
    const rando = Math.floor(Math.random() * 10)
    console.log(numGuess);
    console.log(rando)
    if(numGuess > 10){
        console.log('Your number is too big')
    } else if(numGuess < 0){
        console.log('Your number is too low')
    } else if(numGuess === rando){
        alert('You won!!')
    } else if(numGuess < rando){
        alert('Guess higher')
    } else if(numGuess > rando){
        alert('Your number is lower')
    } 

}

guessNum();







// *** You will need to explore documentation on parseInt(), prompt, alert, Math.floor(), and Math.random()

//? not required:  If you liked to style it, feel free to add a stylesheet to your HTML.

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS
