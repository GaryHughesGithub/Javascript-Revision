//FOR LOOP

// for (let i = 0; i<=10; i++){
//     console.log(i);
// }


// for (let i = 0; i<=20; i++) {
//     console.log('Hello' + i);
// }


// for (let i = 0;i<=5;i++){
//     console.log('Hi');
// }

// for (let i=0;i<=100;i+=5){
//     console.log(i);
// }


// for (let i = 100;i>=0;i-=10) {
//     console.log(i);
// }


// const animals = ['tiger','rhino','lion','kangaroo'];

// for (let i = 0; i < animals.length; i++) {
//     console.log(i,animals[i]);
// }

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }

// //reversing the list of animals from the array
// for (let i = animals.length-1; i >=0 ; i--) {
//     console.log(animals[i])
// }

//NESTED LOOPS

// for (let i =0; i<= 5; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j <= 3; j++) {
//         console.log(`       j is: ${j}`)
//     }
// }

// const seatingChart = [
//     ['Gary','Cassie' ,'Caiden'],
//     ['Lucas' , 'Mason', 'Logan'],
//     ['Ryan', 'Paige', 'Rhys']
// ]

// for ( let i = 0; i < seatingChart.length;i++) {
//     console.log(`Row ${i+1}`)
//     const row = seatingChart[i]
//     for ( let j = 0; j<row.length;j++) {
//         console.log(j+1,row[j])
//     }
// }


//WHILE LOOPS

// let num = 1;
// while(num<=10){
//     console.log(num)
//     num++;
// }

// const secret = "Password";

// let guess = prompt('What is the password?')
// while (guess !== secret) {
//     guess = prompt('What is the password?')
// }
// console.warn('Well done you guessed correctly!')


// let userInput = prompt('Hey say something!')
// while (true) {
//     userInput = prompt(userInput);
//     if (userInput.toLowerCase() === 'stop copying me'){
//         break;
// }
// }
// console.log('You win!')


// let userInput = prompt('How old are you?')
// while (userInput<18) {
//     userInput = prompt('Sorry too young for da club!')
//     if (userInput >= 18) {
//         break;
//     }
// }
// console.log('Congrats you can come in da club!')