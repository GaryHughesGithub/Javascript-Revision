//FUNCTION SCOPE

//If totalEggs was defined inside the function is would not be 
//accesable from out side of it.But we can define a global funtion and
//update it inside a function, not a common practice:
// let totalEggs = 0;
// function collectEggs() {
//   totalEggs = 6;
// }

// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

//Avariable outside the function will be referenced first, can be used insdie
//the function, where as a variable inside the fucntion cannot be
//used outside of the function...It is outside the SCOPE of the function
// let bird = 'Scarlet Macaw';
// function birdWatch() {
//   let bird = 'Great Blue Heron';
//   console.log(bird)
// }

// birdWatch()
// console.log(bird)


///////////////////////////////////

