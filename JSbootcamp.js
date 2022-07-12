let shoppingList = ['cheese','cereal','ice','bacon'];


// console.log(shoppingList[0])
// console.log(shoppingList[1])
// console.log(shoppingList[2])
// console.log(shoppingList[3])

// shoppingList[1] = 'milk';
// shoppingList[10] = 'bacon';

// console.log(shoppingList)

// const lastItem = shoppingList.pop()
// shoppingList.push('crackers')
// const firstItem = shoppingList.shift()
// shoppingList.unshift('ice cream')


// console.log(shoppingList)
// console.log(lastItem)
// console.log(firstItem)

// const array1 = [1,2,3]
// const array2 = [4,5,6]

// let array3 = array1.concat(array2)
// let array4 = [...array1,...array2]    //Same result but using spread
// console.log(array3)
// console.log(array4)


// let fruits = ['apple','orange']
// let veggies = ['carrot','onion']
// let meats = ['chicken','steak','elk']

// let fruitAndVeggies = fruits.concat(veggies)
// let fruitAndVeggies = [...fruits,...veggies]
// console.log(fruitAndVeggies)

// let newArray = fruits.concat(veggies,meats)
// console.log(newArray)


// const fitbitData = [
//     34567,
//     123,
//     67789,
//     211,
// ];

// let fitbitData2 = {
//     totalSteps    : 31245,
//     totalFloors   : 1234,
//     caloriesBurnt : 3456,
// };

// console.log(fitbitData2['totalSteps'])      //Two different methods for accessing the object
// console.log(fitbitData2.totalSteps)

// const numbers = {
//     100: 'one hundred',
//     16:'sixteen',
//     yellow: 1234,
// };

// const userReviews = {};

// userReviews.checking = 100;              //Two different methods to add key/value pair to an object
// userReviews['gazza84'] = 9.8;
// console.log(userReviews);
// console.log(userReviews['gazza84']);

// const student = {
//     firstName : 'Gary',
//     lastName : 'Hughes',
//     exams : {
//         maths : 98,
//         science : 99
//     }
// }


// student['exams']['art'] = 23
// console.log(student['exams']['maths'])
// console.log(student)
// student['firstName'] = 'Bob'
// student.exams.testing = 124;
// console.log(student)

// let nums = [1,2,3];
// let mystery = [1,2,3];
// let moreNums = nums


// const animals = ['lion','tiger','donkey']

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i],i)
// }




// const examScores = [1,2,3,4,5,6,7,8,9,10]

// for (let i = 0; i < examScores.length;i++) {
//     console.log(i,examScores[i])
// }

// examScores.forEach((score) => console.log(score))



const myStudents = [
    {
        firstName : 'Gary',
        mark      : 100,
    },
    {
        firstName : 'Cassie',
        mark      : 70,
    },
    {
        firstName : 'Caiden',
        mark      : 87
    },  
    {
        firstName : 'Lucas',
        mark      : 50,
    },
    {
        firstName : 'Mason',
        mark      : 30,
    },
    {
        firstName : 'Logan',
        mark      : 15,
    },
]

// console.log(myStudents[2]['mark'])
// console.log(myStudents[2].mark)

// for (i=0; i < myStudents.length; i++) {
//     studentName = myStudents[i]['firstName']
//     studentScore = myStudents[i]['mark']
//     console.log(`Students name : ${studentName} and score : ${studentScore}`)
// }

// let total = 0
// for (i=0;i< myStudents.length;i++) {
//     total += myStudents[i]['mark']
// }

// console.log(`Average mark is: ${total/myStudents.length}`)


// const word = 'stressed';
// let endWord = ''
// for (let i = word.length -1; i>= 0; i--) {
//     endWord += word[i]
// }

// console.log(endWord)


// for (let i = 1; i <= 5; i++) {
//     console.log(i);
//     for (let j = 10; j >= 0; j-= 5) {
//         console.log('  ' ,j)
//     }
// }


const gameBoard = [
    [1,2,3,4,],
    [6,8,3,1,],
    [9,5,8,2,],
    [1,21,1,3,],
]; 

let totalScore = 0;

// for (let i = 0;i<gameBoard.length;i++){
//     for (let j=0;j<gameBoard[i].length;j++) {
//         totalScore += gameBoard[i][j]
//     }
// }


// for (let i = 0; i < gameBoard.length; i++) {
//     let row = gameBoard[i];
//     for(let j = 0; j < row.length; j++) {
//         totalScore += row[j];
//     }
// }

// console.log(totalScore)

// let j = 1
// while (j <= 10) {
//     console.log('yo yo yo')
//     j++
// }


// const target = Math.floor(Math.random() * 10) +1;
// let roll = 0
// console.log(`The target is ${target}`)
// while (roll !== target) {
//     roll = Math.floor(Math.random()*10) + 1
//     console.log(roll)
// }
// console.log('Congratualtions you win!!')

// const target = Math.floor(Math.random() * 10);
// let guess = 0

// while (true) {
//     if (target === guess) break;                  //The break, breaks you out of the while loop
//     console.log(`Target : ${target} Guess : ${guess}`)
//     guess = Math.floor(Math.random()*10)       
// }
// console.log('Congratualtions you win!!')


// let animals = ['lion','tiger','donkey']

// for (i = 0; i < animals.length; i++){         //This is long winded so better to use For Of loop
//     console.log(animals[i])
// }

// for (animal of animals) {   //Much cleaner syntax
//     console.log(animal)
// }

// for (char of 'supercalafrajalicious') {
//     console.log(char.toUpperCase());
// } 

const magicSquare = [
    [2,7,6],
    [9,5,1],
    [4,3,8],
]


// for (let row of magicSquare) {
//     let sum = 0;
//     for(num of row) {
//         sum += num;
//     }
//     console.log(`${row} added together equal : ${sum}`)
// }

//USING A NORMAL FOR LOOP
// for ( let i = 0; i < magicSquare.length;i++){
//     let row = magicSquare[i]
//     let sum = 0
//     for (let j = 0; j < row.length; j++) {
//         sum += row[j]
//     }
//     console.log(`${row} summed together : ${sum}`)
// }

//USING A FOR OF LOOP.........cleaner syntax
// for(let row of magicSquare){
//     let sum = 0
//     for(num of row) {
//         sum += num
//     }
//     console.log(`${row} summed together : ${sum}`)
// }


const movieReviews = {
    Movie1   :67,
    Movie2   :68,
    Movie3   :69,
    Movie4   :17,
    Movie5   :27,
    Movie6   :37,
}

// //Iterating over an object use : Object.keys / Object.values
// for (let x of Object.keys(movieReviews)) {
//     console.log(`Movie: ${x} Score : ${movieReviews[x]}`)
    
// }

// for (keys in movieReviews) {
//     console.log(`Movie : ${keys}  Score : ${movieReviews[keys]}`)
// }

// let total = 0
// let numberOfObjects = 0
// for ( movie in movieReviews) {
//     total += movieReviews[movie];
//     numberOfObjects++
// }

// console.log(total/numberOfObjects)


///FUNCTIONS

// function talking() {
//     console.log('loading...');
//     console.log('loading...');
//     console.log('loading...');
// }
// talking();
// talking();
// talking();

// for(let i = 0; i<=6;i++){
//     talking();
// }


// function dieRoll(){
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(`Your rolled ${roll}`);
// }

// for (let i=1;i<=6;i++){
//     dieRoll();
// }


// function greet(name) {
//     console.log(`Hello ${name}, how are you?`)
// }

// for (let i = 0; i < 10; i++) {
//     greet('Gary')
// }


// function multiply(num1=10,num2=10) {     //Function with 2 parameters, when you call the function you pass in 2 arguments
//     return num1 * num2;
// }
// console.log(multiply(2,7))


//CHALLENGE 1
//ATTEMPT1
// function isValidPassword(password,username) {
//     if (password.length >= 8) {
//         if (password.indexOf(' ') === -1) {
//             if (password.indexOf(username) === -1) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// console.log(isValidPassword('testing13',123));

//ATTEMPT2
// function isValidPassword(password,username) {            //Fail fast, Return early
//     if (password.length < 8) {
//         return false
//     }
//     if (password.indexOf(' ') !== -1) {
//         return false
//     }
//     if (password.indexOf(username) !== -1) {
//         return false
//     }
//     return true
// }   

// console.log(isValidPassword('testtest',123));


//ATTEMPT 3
// function isValidPassword(password,username) {
//     const passLength = password.length < 8;
//     const passSpace = password.indexOf(' ') !== -1;
//     const passName = password.indexOf(username) !== -1;
//     if (passLength || passSpace || passName) {
//         return false
//     }
//     return true
// }

// console.log(isValidPassword('testtest',123))


// //CHALLENGE 2
// const numbersList = [1,2,3,4,5,6,7,8,9];

// function average(listOfNum) {
//     let total = 0
//     for (num in listOfNum) {
//         total += listOfNum[num];
//     }
//     return total / listOfNum.length;
// }

// console.log(average(numbersList));


//CODEWARS TEST, RETURN 2 SMALLEST NUMBERS OF AN ARRAY ADDED TOGETHER
// function sumTwoSmallestNumbers(numbers) {  
//     let firstNumber = Math.min(...numbers)
//     let newArray = numbers.filter(function(value,index,arr) {
//         return value > firstNumber
//     })
//     let secondNumber = Math.min(...newArray)
//     let total = firstNumber + secondNumber
//     return total
//   }

// console.log(sumTwoSmallestNumbers([1,3,3,4,5]))


//CHALLENGE 3 

//ATTEMPT 1 ..... "char OF alphabet...not...char IN alphabet!"
// function isPangram(sentence) {
//     let lowerCased = sentence.toLowerCase();
//     const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//     let total = 0
//     for(char of alphabet) {
//         if (lowerCased.indexOf(char) !== -1) {
//             total += 1
//         }
//     }
//     if (total === 26) {
//         return true
//     }
//     return false
// }

// console.log(isPangram('the quick brown fox jumps over the lazy dog'))


// //CODE ALONG
// function isPangram(sentence) {
//     let lowerCased = sentence.toLowerCase();
//     for (let char of "abcdefeghijklmnopqrstuvwxyz") {
//         if (!lowerCased.includes(char)) {
//             return false
//         }
//     }
//     return true
// }


//CHALLENGE 4

// function pick(arr) {
//     let randomPick =Math.floor(Math.random() * arr.length);
//     return arr[randomPick]
// }

// function getCard() {
//     const cardValue = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
//     const cardSuits = ['clubs','spades', 'hearts', 'diamonds'];
//     let pickedCard = {};
//     let selectedValue = pick(cardValue);
//     let selectedSuit = pick(cardSuits);
//     pickedCard['value'] = selectedValue;
//     pickedCard['suit'] = selectedSuit;
//     return pickedCard;
// }

// console.log(getCard())

// function doubleArr(arr) {
//     const newArr = []
//     for (let num of arr) {
//         let double = num * 2;
//         newArr.push(double)
//     }
//     return newArr
// }

// console.log(doubleArr([1,2,3,4,5]))

//DECLARING A FUNCTION AND ASSIGNING IT TO A VARIABLE
// function add(x,y) {
//     return x + y;
// }

// const sum = function (x,y) {
//     return x+y;
// }

// const product = function multiply(x,y) {
//     return x * y;
// }

// function add(x,y){
//     return x + y;
// }

// function subtract(x,y)  {
//     return x - y;
// }

// function divide(x,y) {
//     return x / y;
// }

// function multiply(x,y) {
//     return x * y;
// }

// const operations = [add,subtract,divide,multiply]

// for (let func of operations) {
//     let result = func(30,5);
//     console.log(result);
// }

// //HIGHER ORDER FUNCTIONS

// function callThrice(func) {
//     func();
//     func();
//     func();
// }

// function laugh() {
//     console.log('HAHAHAHAHA')
// }

// callThrice(laugh)


// function nTimes(action,num) {
//     for (let i = 0; i < num; i++) {
//         action();
//     }      
// }


// function callNumerous(func,num){
//     for (let i = 0; i<num;i++){
//         func()
//     }
// }

// function cry(){
//     console.log('Waahhhh')
// }

// callNumerous(cry,10)
// callNumerous(laugh,10)

// function randomPick(f1,f2){
//     let randomNumber = Math.random();
//     if (randomNumber < 0.5){
//         f1();
//     } else {
//         f2();
//     }
//     console.log(randomNumber)
// }

// randomPick(cry,laugh);



//RETURNING FUNCTIONS

// function multiplyBy(num) {
//     return function(x) {
//         return num * x;
//     }
// }

// const triple = multiplyBy(3);
// const double = multiplyBy(2);
// const quad = multiplyBy(4);
// const halve = multiplyBy(0.5);

// console.log(triple(5));
// console.log(double(5));
// console.log(quad(5));
// console.log(halve(100))



// function makeBetweenFunc(min,max){
//     return function(num) {
//         return num > min && num <= max;
//     }
// }

// const checkAge = makeBetweenFunc(0,18);
// const smokingAge = makeBetweenFunc(0,16);

// console.log(checkAge(16));
// console.log(smokingAge(12));


// function hello(){
//     console.log('Finally!');
// }

// setTimeout(hello,5000);

// setTimeout(function(){
//     console.log('Welcome!');
// },5000);


// const btn = document.querySelector('button');
// btn.addEventListener('click',function(){
//     alert('You pressed a button!');
// })


// const numbers = [1,2,3,4,5,6,7,8,9]

// numbers.forEach(function(num) {
//     console.log(num*num);
// })

// numbers.forEach((n) => {   //ARROW FUNCTION
//     console.log(n*n);
// })

// function printTriple(n) {
//     console.log(n * 3);
// }

// numbers.forEach(printTriple)


//MAP
// const text = ['test1','test2','test3','test4'];
// const newText = text.map(function(t) {
//     return t.toUpperCase();
// })
// console.log(newText)


// const numbersDoubled = numbers.map(function(num) {
//     return num*2;
// })
// console.log(numbersDoubled)

// const numDetail = numbers.map(function(num){
//     return {
//         value:num,
//         isEven:num % 2 === 0
//     }
// })
// console.log(numDetail)

// const words = ['apple','orange','tunafish']

// const newWords = words.map(function(word) {
//     return word.toUpperCase().split('').join('.')
// })

// console.log(newWords)

//ARROW FUNCTIONS
// const square = function(num) {   //OLD VERSION
//     return num * num
// }
// console.log(square(10))

// const square = (num) => {        //SHORTER VERSION
//     return num * num
// }
// console.log(square(10))

// const square = (num) => num * num   //SHORTEST VERSION
// console.log(square(10))

// const isEven = (num) => num % 2 === 0;
// console.log(isEven(12))

// const nums = [1,2,3,4,5,6,7,8,9]

// const newNums = nums.map((num) => num * 2)
// console.log(newNums)

// const isEven = nums.map((num) => num % 2 === 0)
// console.log(isEven)

// const oddEven = nums.map(function(num) {
//     if (num % 2 === 0){
//         return 'even'
//     } return 'odd'
// })
// console.log(oddEven)

// const oddEven = nums.map((num) => (num % 2 === 0 ? 'even' : 'odd'))
// console.log(oddEven)

//ARRAY.FIND()

const movies = [
    'Terminator',
    'Bugs Life',
    'Man on Fire',
    'Mr Deeds'
]



// const movie1 = movies.find(function(movie){
//     return movie.includes('Bugs')
// })
// console.log(movie1)

// const movie2 = movies.find((movie) => movie.includes('Bugs'))
// console.log(movie2)

// const movie3 = movies.find((movie) => movie.indexOf('Man on Fire') !== -1)
// console.log(movie3)


// const evens = nums.filter(function(num) {   //NORMAL FUNCTION
//     return num % 2 === 0;
// })

// const evens = nums.filter((x) => x % 2 === 0)   //SHORTER ARROW FUNCTION

// console.log(evens)


// const odds = nums.filter(function(num) {   //NORMAL FUNCTION
//     return num % 2 === 1;
// })

// const odds = nums.filter((x) => x % 2 === 1)

// console.log(odds)


const words = ['dog', 'dig', 'log', 'bag']

// const wordLength = words.every(function(word) {
//     return word.length >= 3;
// })
// console.log(wordLength)

// const dWords = words.every((word) => word.includes('d'))
// console.log(dWords)

// const gWords = words.every((word) => word.includes('g'))
// console.log(gWords)


const mixedNumbers = [4,2,9,6,8,5,3,12,3,4,5]  //SORT CHANGES THE ARRAY IN PLACE

// const sortedNumbers = mixedNumbers.sort(function(a,b) {
//     return a - b;
// })
// console.log(sortedNumbers)

// const newSortedNumbers = mixedNumbers.sort((a,b) => b - a)
// console.log(newSortedNumbers)

//DESTRUCTURING

const runner1 = {
    first: 'Gary',
    last: 'Hughes',
    country: 'Wales',
    title: 'Master of the universe'
}

const runner2 = {
    first: 'Cassie',
    last: 'Couzens',
    country: 'Wales',
    title: 'Pain in the arse'
}

// function print(person) {         //1st level DESTRUCTURING
//     const {first,last,title} = person
//     console.log(`Runner: ${first} ${last}, ${title}`)
// }

// function print({first,last,title}) {         //DESTRUCTURING as you pass in parameters
//     console.log(`Runner: ${first} ${last}, ${title}`)
// }

// function print({
//     first : firstName,
//     last : lastName,
//     title : titleName,
// }) {
//     console.log(`The winner is ${firstName} ${lastName}, ${titleName}`)
// }

// print(runner1)
// print(runner2)


const response = [
    'HTTP/1.,1',
    '200 OK',
    'application/json',
]

// function parseResponse([protocol,statusCode,contentType]) {
//     console.log(`Status: ${statusCode}`)
// }

// function parseResponse([,statusCode]) {
//     console.log(`Status: ${statusCode}`)
// }

// parseResponse(response)


// const role = 'host';
// const person = 'Jools Holland';

// const role2 = 'Director';
// const person2 = 'James Cameron'

// const team = {};            //THIS IS THE CURRENT/OLD METHOD FOR ADDING TO AN OBJECT
// team[role] = person;        
// team[role2] = person2

// const team = {
//     [role] : person,             //USING COMPUTED PROPERTIES
//     [role2] : person2    
// }

// console.log(team)

// function addProp(obj,k,v) {      //USUAL METHOD, COPY OBJECT THEN COPY NEW KEY:VALUE PAIR INTO THE NEW OBJECT
//     const copy = {...obj};
//     copy[k] = v;
//     return copy;
// }

// const addProp = (obj,k,v) => {      //COMPUTED VERSION OF THE ABOVE
//     return {
//         ...obj,
//         [k]:v
//     }
// }

// const newTeam = addProp(team,'happy', ':-)')

// console.log(newTeam)



// const testArr =[2.3,4.5,2.1,78.9,5.6];

// const getStats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum,val) => sum + val);
//     const avg = sum / arr.length
//     return {
//         max,
//         min,
//         sum,
//         avg,
//     }
// }

// const stats = getStats(testArr)
// console.log(stats)



//METHODS

// const math = {                  //OLD SYNTAX FOR CREATING AN OBJECT WITH METHODS
//     add: function(x,y){
//         return x + y;
//     },
//     multiply: function(x,y) {
//         return x * y;
//     },
// }


// const math = {                      //NEW CLEANER SYNTAX
//     add(x,y){
//         return x + y
//     },
//     multiply(x,y) {
//         return x * y
//     },
// }
// console.log(math)
// console.log(math.multiply(2,10))


//THIS

// function sayHi() {
//     console.log('HI');
//     console.log(this);
// }

// sayHi()


// const person1 = {            //EITHOUT DETRUCTURING FOR CALLING .THIS
//     first: 'Cherilyn',
//     last: 'Sarkisian',
//     nickName: 'Cher',
//     fullName() {
//         console.log(`${this.first} ${this.last}, or better known as ${this.nickName}`);
//     },
// }

// console.log(person1.first)
// console.log(person1.last)
// console.log(person1.nickName)


// const person = {            //THIS IS NOT SCOPED TO THE WINDOW BUT THE FUNCTION ITS IN
//     first: 'Cherilyn',
//     last: 'Sarkisian',
//     nickName: 'Cher',
//     fullName() {
//         const {first,last,nickName} = this
//         return(`${first} ${last}, or better known as ${nickName}`);
//     },
//     printBio() {
//         console.log(this);
//         const fullName = this.fullName();
//         console.log(`${fullName} is a person!`)
//     },
//     laugh : () => {
//         console.log(this);              //ARROW FUNCTION ONLY REFERENCE THE WINDOW, DO NOT USE!
//         console.log(`${this.nickname} says HAHAHAHA`)
//     }
// }


// person.nickName = 'CHERRRR'             //THIS WILL ONLY BE SET TO THE CONTAINING OBJECT IF REFERNECED WHEN CALLED I.E PERSON PRINTBIO
// console.log(person.fullName())          //OTHERWISE IT WILL ALWAYS REFERENCE TO THE WINDOW
// // console.log(person)
// const printBio = person.printBio();     //SO PERSON.PRINTBIO WILL REFERENCE THE PERSON OBJECT
// console.log(printBio)                   //BUT THIS WILL REFERENCE THE WINDOW



// const annoyer = {
//     phrases:['test1','test2','test3'],
//     pickPhrase() {
//         const {
//             phrases
//         } = this;
//         let idx = Math.floor(Math.random() * phrases.length);
//         return phrases[idx]
//     },
//     start() {
//         this.timerId = setInterval(() => {
//             console.log(this.pickPhrase())
//         },2000)
        
//     },
//     stop() {
//         clearInterval(this.timerId)
//         console.log('STOPPED')
//     }
// }



//DECK OF CARDS CODE ALONG
// function makeDeck() {
//     const deck = [];
//     const suits = ['hearts', 'diamonds', 'spades','clubs'];
//     const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
//     for (let suit of suits) {
//         for (let value of values.split(',')) {
//             deck.push({
//                 suit,
//                 value,
//             })
//         }
//     }
//     return deck;
// }


// function drawCard(deck) {
//     return deck.pop();
// }



// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);

// console.log(card1);
// console.log(myDeck);


// function deleteNth(arr,i) {
//     let holdingObj = {};
//     return arr.filter(function(j) {
//         holdingObj[j] = (holdingObj[j] || 0) +1;
//         return holdingObj[j] <= i;
//     });
// }
// let result = deleteNth([1,2,3,4,3,4,2,2],2)
// console.log(result);


