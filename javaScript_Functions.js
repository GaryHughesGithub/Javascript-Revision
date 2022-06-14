//FUNCTIONS
//DEFINE THE FUNCTION AND THEN EXECUTE IT

// function sing() {
//     console.log('Happy Birthday to you!');
// }

// sing();
// sing();
// sing();

// function greet() {
//     console.log('Hi!')
// }

// greet()

///////////////////////////////////////

// function greet(name) {
//     console.log(`Hi ${name}`)
// }

// greet('Gary')
// greet('Cassie')

////////////////////////////////////////

// function greet2(firstName,lastName) {
//     console.log(`Welcome ${firstName[0]} ${lastName}`)
// }

// greet2('Gary', 'Hughes')


/////////////////////////////////////////

const students = ['Gary','Cassie', 'Caiden', 'Lucas', 'Mason', 'Logan']

// function greetings(list1) {
//     for (let name in list1) {
//         console.log(`Welcome, ${list1[name]}`)
//     }
// }

// greetings(students)

/////////////////////////////////////////

// function repeat(str,num) {
//     let total = []
//     for (let i = 0; i < num; i++) {
//         total.push(str) 
//     } 
//     console.log(total)   
// }

// repeat('check',10)


//////////////////////////////////////////

// function capitalize(str) {
//     let returnStr = ""
//     returnStr += str[0].toUpperCase()
//     returnStr += str.slice(1,str.length)
//     return returnStr
// }

// console.log(capitalize('cassie'))




//FUNCTION EXPRESSION

//Normal method of creating a function
// function add(num) {
//   console.log(num * num);
// }
// add(10)

//Alternative method by assigning to a variable
// const add2 = function (num){
//   console.log(num * num);
// }

// add2(10)

///////////////////////////////////////////

//HIGHER ORDER FUNCTIONS
//passing a function as an argument

// let greet = function() {
//   console.log('Hello World')
// }

// greet()

// function callTwice(func) {
//   func();
//   func();
// }

// function rollDie() {
//   const roll = Math.floor(Math.random()*6) + 1
//   console.log(roll)
// }

// callTwice(rollDie)



// function rollTenTimes(func) {
//   for(i=0;i<10;i++) {
//     func();
//   }
// }


// rollTenTimes(rollDie)


///////////////////////////////////////////

//RETURNING FUNCTIONS

// function makeMysteryFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function() {
//       console.log('You win this is the good function!')
//     }
//   }else {
//     return function() {
//       alert('You have been given a computer virus! Close this window!')
//     }

//   }
// }

// const testing123 = makeMysteryFunc()
// testing123()


////////////////////////////////////////////


// function makeBetweenFunction(min,max) {
//   return function (num) {
//     return num >= min && num <= max;
//   }
// }

// const ageCheck = makeBetweenFunction(50,100)

// console.log(ageCheck(20))
// console.log(ageCheck(60))
// console.log(ageCheck(120))

// const isChild = makeBetweenFunction(0,18)
// const isAdult = makeBetweenFunction(19,65)
// const isPensioner = makeBetweenFunction(66,120)


// console.log(isChild(5));
// console.log(isChild(25));

// console.log(isAdult(5));
// console.log(isAdult(25));

// console.log(isPensioner(25));
// console.log(isPensioner(75));

///////////////////////////////////////////////

//DEFINING METHODS

//below myMath is my own oject with its methods attached, 
//and is called like a method

// const myMath = {
//   square: function(num) {
//     return num ** 2;
//   },
//   cubed: function(num) {
//     return num ** 3;
//   },
//   oddEven: function(num) {
//     if (num % 2 === 0) {
//       return `${num} is an even number!`;
//     } else {
//       return `${num} is an odd number`;
//     }
//   }
// }

// console.log(myMath.square(10))
// console.log(myMath.cubed(10))
// console.log(myMath.oddEven(10))

//due to this being used heavily in JavaScript, following is the short
//hand way of the syntax, leaving out the function keyword:

// const myMath = {
//   square(num) {
//     return num ** 2;
//   },
//   cubed(num) {
//     return num ** 3;
//   },
//   oddEven(num) {
//     if (num % 2 === 0) {
//       return `${num} is an even number!`;
//     } else {
//       return `${num} is an odd number`;
//     }
//   }
// }

// console.log(myMath.square(10))
// console.log(myMath.cubed(10))
// console.log(myMath.oddEven(10))

// const square = {
//   area: function(side) {
//       return side ** 2;
//   },
//   perimeter: function(side) {
//       return side * 4;
//   }
// }

// console.log(square.area(10))


/////////////////////////////////////////

//this.### allows you to call upon methods and data from the object your inside

// const cat = {
//   name: 'Blue Steele',
//   color: 'grey',
//   breed: 'scottish fold',
//   meow(){
//     console.log(`${this.name} sings : MEOW MIX PLEASE DELIVER!`)
//     console.log(this.name,this.color)
//   }
// }

// cat.meow()  //this.meow ....'this' refers to the cat object

// const meow2 = cat.meow;
// console.log(meow2())        // this wouldnt work, as it then tries to refer to the default
//                             //object i.e. the window.meow2 object


/////////////////////////////////////////



//FOREACH METHOD

const numbers = [1,2,3,4,5,6,7,8,9,10]

// function print(element) {
//   console.log(element)
// }

// numbers.forEach(print)

// numbers.forEach(function(el) {
//   if (el % 2 === 0) {
//     console.log(el)
//   }
// })


const movies = [
  {
    title: 'Alien',
    score: 70
  },
  {
    title: 'Man on fire',
    score: 98
  },
  {
    title: 'Avengers',
    score: 76
  },
  {
    title: 'Spiderman',
    score:87
  }
]

// movies.forEach(function(movie) {
//   console.log(`${movie.title} has a score of ${movie.score}/100`)
// })


//MAP METHOD


// let doubles = numbers.map(function(num) {
//   return num * 2;
// })

// console.log(doubles)

//////////////////////////////////////


// let movieList = movies.map(function(film) {
//   return film.title;
// })

// console.log(movieList)

///////////////////////////

// let movieScore = movies.map(function(score) {
//   return score.score;
// })

// console.log(movieScore)

///////////////////////////


//ARROW FUNCTIONS -- NEWER JAVASCRIPT WAY OF CREATING FUNCTIONS

// const add = function(x,y) {         //older method
//   return x + y;
// }

// const add = (x,y) => {             //newer method
//   return x + y;
// }


// const square = (x) => {
//   return x ** 2;
// }

// console.log(square(10))


// const rollDie = () => {
//   return (Math.floor(Math.random() * 6) + 1);
// }

// console.log(rollDie())


//IMPLICIT RETURNS

// const rollDie = () => (               //you can leave off the return 
//   Math.floor(Math.random() * 6) + 1
// )
// console.log(rollDie())


// const add = (a,b) => a+b          // removed the return and brackets, and 
//                                   // can be programmed on the 1 line
// console.log(add(1,2))


////////////////////////////

// const movieReport = movies.map(function(movie) {    //mapping over the array and objects
//   return(`${movie.title} - ${movie.score} / 100`)
// })
// console.log(movieReport)


//newer arrow method

// const movieReport = movies.map((movie) => (       //you would probably leave it as this but...
//   `${movie.title} - ${movie.score} / 100`
// ))
// console.log(movieReport)


// const movieReport = movies.map((movie) => `${movie.title} - ${movie.score} / 100`)
// console.log(movieReport)                          //it can be placed on 1 line like this


//setTimeout   +    setInterval

// const pauseTime = setTimeout(function() {
//   console.log('Hello!!')
// },3000)


// console.log('Hello?....')
// const pauseTime = setTimeout(function() {
//   console.log('Is anybody there??!!')
// },3000)


// console.log('Hello?....')
// const pauseTime = setTimeout(function() {
//   console.log('Is anybody there??!!')
// },3000)


// const id = setInterval(() => {
//   console.log(Math.random())
// }, 2000);

// clearInterval(id)

/////////////////////////////////////////////


//FILTER

//the filter method take an anonomous function to call back the desired data

// let newNumbers = numbers.filter(n => {
//   return n <= 5
// })

// console.log(numbers)
// console.log(newNumbers)



// const bestMovies = movies.filter(movie => {
//   return movie.score > 80
// })
// console.log(bestMovies)



// const badMovies = movies.filter(m => m.score < 80)
// console.log(badMovies)

// const badTitles = badMovies.map(m => m.title)
// console.log(badTitles)

// const badMovies = movies.filter(m => m.score< 80).map(m => m.title);
// console.log(badMovies)


//EVERY + SOME

// const everyTest = numbers.every(score => score >= 5)
// console.log(everyTest)

// const someTest = numbers.some(score => score >= 5)
// console.log(someTest)


// const someMovies = movies.some(movie => movie.score > 70)
// console.log(someMovies)

// const everyMovies = movies.every(movie => movie.score > 70)
// console.log(everyMovies)


/////////////////////////////////////////


//REDUCE

const prices = [9.99, 1.50, 23.45, 67.99,0.49]

// let total = 0
// for (let price of prices) {
//   total += price
// }
// console.log(total)

// const total = prices.reduce((total,price) => {
//   return total + price
// })
// console.log(total)


// const total = prices.reduce((total,price)=>(total + price)) //implicit return
// console.log(total)


// const minPrice = prices.reduce((min, currentPrice) => {     //Min Price
//   if (currentPrice < min) {
//     return currentPrice;
//   }
//   return min;
// })
// console.log(minPrice)

// const maxPrice = prices.reduce((max, currentPrice) => {     //Max Price
//   if (currentPrice > max) {
//     return currentPrice;
//   }
//   return max;
// })
// console.log(maxPrice)


// const bestMovie = movies.reduce((bestMovie, currentMovie) => {   //return highest rated movie
//   if (currentMovie.score > bestMovie.score) {
//     return currentMovie
//   }
//   return bestMovie
// })
// console.log(bestMovie)


// const evens = [2,4,6,8,10,12]
// const totalEvens = evens.reduce((sum,num) => sum + num)  //without initial value
// console.log(totalEvens)


// const evens = [2,4,6,8,10,12]
// const totalEvens = evens.reduce((sum,num) => sum + num , 100)  //with initial value
// console.log(totalEvens)



//DEFAULT PARAMS

// const rollDie = function rollDie(numSides = 6) {
//   return Math.floor(Math.random() * numSides ) +1
// }
// console.log(rollDie())

// const greet = function greet(msg = 'Howdy', person = 'Stranger') {
//   return `${msg}, ${person}`
// }
// console.log(greet('Yo', 'Jeff'))
// console.log(greet())
// console.log(greet(msg = 'Hey there'))


