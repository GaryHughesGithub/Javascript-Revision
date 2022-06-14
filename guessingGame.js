//MY FIRST ATTEMPT
let maximum = prompt('What is your maximum number?');
let answer = Math.floor(Math.random() * maximum + 1);

let guess = prompt(`Guess a number between 0 and ${maximum}`)
let totalGuess = 0
while (guess != answer){
    totalGuess++
    if (guess > answer) {
        guess = prompt('Your guess was too high, try again..')
    } else {
        guess = prompt('Your guess was too low, try again..')
    }
}
totalGuess++
console.log('Well done, that is the correct answer!')
console.log(`It took you ${totalGuess} guesses!`)


// // CODE ALONG ANSWER
// let maximum = parseInt(prompt('Enter the maximum number!'));
// while (!maximum) {
//     maximum = prompt('Please enter a vaild number')
// }

// const targetNum = Math.floor(Math.random() * maximum + 1);
// let attempts = 1;

// let guess = parseInt(prompt('Enter your first guess'))
// while (parseInt(guess) != targetNum) {
//     if (guess === 'q'){
//         break;
//     }
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt('Too high! Enter a new guess')
//     } else {
//         guess = prompt('Too Low, Enter new guess')
//     }
// }
// if (guess === 'q'){
//     console.log('You Quitter!')
// } else{
//     console.log('You got it!')
//     console.log(`It took you ${guess} guess's`)
// }
