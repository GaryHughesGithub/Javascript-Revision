const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.85,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]


// const goodBooks = books.filter((book) => book.rating > 4.7);
// console.log(goodBooks)

// const fantasy = books.filter(function(book) {
//   return book.genres.includes('fantasy')
// })

// const fantasy = books.filter((b) => b.genres.includes('fantasy'))

// console.log(fantasy)


// const titleCheck = books.filter((b) => b.title.indexOf('Lord of the flies') === 0)
// console.log(titleCheck)

// const query = 'THE'
// const results = books.filter(function(book) {
//   return book.title.toLowerCase().includes(query.toLowerCase())
// })

// console.log(results)


// const rating = books.some(function(book) {
//   return book.rating > 4;
// })
// console.log(rating)


// const any2Authors = books.some((book) => book.author >= 2)
// console.log(any2Authors)

// books.sort(function(a,b) {
//   return a.rating - b.rating;
// })
// console.log(books)


const nums = [1,2,3,4,5,6,7,8,9]

// const total = nums.reduce(function(acc,val) {
//   return acc + val;
// },100)

// const total = nums.reduce((acc,val) => acc + val)

// console.log(total)

// const max = nums.reduce(function(max,val) {
//   if (val > max) return val
//   return max
// })

// const max = nums.reduce((max,val) => {
//   if (val > max) return val;
//   return max
// } )

// const max = nums.reduce((max,val) => {
//   return Math.max(max,val)
// })
// console.log(max)

// const min = nums.reduce((min,val) => Math.min(min,val))

// console.log(min)

const votes = ['n','y','n','n','y','n','n','y','n'];

// const results = votes.reduce((tally,val) => {
//   if (tally[val]) {
//     tally[val]++;
//   } else {
//     tally[val] = 1;
//   }
//   return tally
// },{})

// const results = votes.reduce((tally,val) => {   //SHORTER WAY TO DOING THE ABOVE
//   tally[val] = (tally[val] || 0) + 1;
//   return tally
// }, {})

// console.log(results)

// const groupedBooks = books.reduce((tally,book) => {
//   const key = Math.floor(book.rating);
//   if (!tally[key]) tally[key] = [];
//   tally[key].push(book)
//   return tally
// },{})
// console.log(groupedBooks)


// const test = 'abcdefg'
// console.log(test.split('').join(','))







//OLD METHOD, BEFORE REST WAS DEVELOPED
// function sum() {
//   const argArr = [...arguments]     //ARGUMENTS IS SOMETHING THAT ALL ELEMENTS HAS AS AN ATTRIBUTE
//   return argArr.reduce((total,val) => {
//     return total + val
//   })
// }

//NEWEST VERSION - MUCH CLEANER
// function sum(...nums) {
//   return nums.reduce((total,val) => {
//     return total + val
//   })
// }

// function fullName(first,last, ...titles) {   //REST PARAMETER HAS TO BE THE LAST DECLARED IN A FUCNTION
//   console.log('first',first)
//   console.log('last',last)
//   console.log('titles',titles)
// }


// const multiply = (...nums) => {     //COLLECTS ALL ARGUMENTS PASSED IN AND MULTIPLIES THEM ALL TOGETHER
//   nums.reduce((total,val) => total * currVal)
// }



// const todo = document.querySelector('#todos .todo')

// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-Through';
// todo.style.opacity = '50%';




//////////////////////////////////////
// EVENTLISTENERS
//////////////////////////////////////

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//   console.log('You clicked me!')
// })

// btn.addEventListener('mouseover', () => {
//   btn.innerText = 'Stop touching me!'
// })

// btn.addEventListener('mouseout', () => {
//   btn.innerText = 'Click me!'
// })



///////////////////

// const btn = document.querySelector('.impossible_button')

// btn.addEventListener('mouseover', () => {
//   const height = Math.floor(Math.random() * window.innerHeight);
//   const width = Math.floor(Math.random() * window.innerWidth);
//   btn.style.left = `${width}px`;
//   btn.style.top = `${height}px`;
// });

// btn.addEventListener('click', () => {
//   document.body.style.backgroundColor = 'green';
//   alert('You got me!!')
// })

//////////////////////


const colors = ['red', 'green', 'yellow', 'blue', 'magenta',];


const changeColor = function(evt) {
  console.log(evt)
  const h1 = document.querySelector('.colorH1');
  h1.style.color = this.style.backgroundColor
}

const container = document.querySelector('#boxes');

for (let color of colors) {
  const box = document.createElement('div');
  box.style.backgroundColor = color;
  box.classList.add('box');
  container.appendChild(box);
  box.addEventListener('click', changeColor);
}


////////////////////////////////

// document.body.addEventListener('keypress', (evt) => {
//   console.log(evt)
// })

////////////////////////////////

// const input = document.querySelector('#items');

// input.addEventListener('keydown', (evt) => {
//   console.log('KEYDOWN');
// })

// input.addEventListener('keypress', (evt) => {
//   console.log('KEYPRESSED');
// })

// input.addEventListener('keyup', (evt) => {
//   console.log('KEYUP');
// })

// input.addEventListener('keyup', (evt) => {
//   console.log(evt.key);
// })

//////////////////////////////////

// const addItem = document.querySelector('#items');
// const uL = document.querySelector('#shoppingList')

// addItem.addEventListener('keypress', function(evt) {
//   if (evt.key === 'Enter') {
//     if (!this.value) {
//       return;
//     }
//     //add a new item to the shopping list
//     const newItemText = this.value;               //when using this. you cannot use an arrow function!
//     const newItem = document.createElement('li');
//     newItem.innerText = newItemText;
//     uL.appendChild(newItem);
//     this.value = '';
//   }
// });

///////////////////////////////////