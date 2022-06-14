// First JavaScript 

// console.log('Hello from our first file');

// let userAge = prompt('What is your age?');
// if (userAge >= 65) {
//     console.log('Your way to old for this site!!');
// } 


// let random = Math.floor(Math.random() * 10 + 1);

// console.log(random)

// if (random <= 5) {
//     console.log('Your number is less than or equal to 5!')
// } else {
//     console.log('Your number is greater than 5!')
// }




// let age = prompt('What is your age?');

// if (age <= 5) {
//     console.log('Your ticket price is $5')
// } else if (age <= 10) {
//     console.log('Your ticket price is $10')
// } else if (age <= 65) {
//     console.log('Your ticket price is $20')
// } else {
//     console.log('Your ticket price is $10')
// }


// const password = prompt('Please enter a new password');

// //PASSWORD MUST BE 6+ CHARACTORS LONG
// if (password.length < 6) {
//     console.log('That password is not long enough!')
// } else {
//     console.log('Password length is acceptable!')
// }

// //PASSWORD MUST NOT HAVE SPACES
// if (password.indexOf(' ') === -1) {
//     console.log('password charactors are correct!')
// } else {
//     console.log('No spaces are allowed in your password')
// }


// //NESTING THE LOGIC
// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log('Valid Password!')
//     } else {
//         console.log('Password must not contain spaces!!')
//     }
// } else {
//     console.log('That password is not long enough!')
// }


//TRUTHY and FALSY values
// const userInput = prompt('Enter something')

// if (userInput) {
//     console.log('Truthy')
// } else{
//     console.log('Falsy')
// }

// if (0) {
//     console.log('Truthy')
// } else {
//     console.log('Falsy')
// }

//LOGICAL OPERATORS

// const password = prompt('Enter your password')

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('Password Valid')
// } else {
//     console.log('Password Invalid, incorrect format!')
// }


// const age = prompt('How old are you?')

// if (age <= 5) {
//     console.log('FREE');
// } else if (age >= 65 || (age > 5 && age <= 10) ) {
//     console.log('$10');
// } else {
//     console.log('$20');
// }


// let firstName = prompt('Enter your first name:');

// if (!firstName) {
//     firstName = prompt('Please enter your first name:');
// }


//USING NOT (!) OPERATION TO NEGATE THE WHOLE LINE OF LOGIC
// const age = 45;
// if (!((age >= 0 && age <5) || age >= 65)) {
//     console.log('You do not ride for free!!');
// }


//SWITCH STATEMENT

// const day = 7;
// switch(day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//     case 7:
//         console.log('Weekend!');
//         break;
//     default:
//         console.log('Invalid day number!')
// }


//Cool function to get the actual day
switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
     console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
}