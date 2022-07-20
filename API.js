
// fetch("https://swapi.dev/api/people/1/")
// .then((res) => {                    //if there is a repsonse then call function
//     console.log('RESOLVED!', res);
//     return res.json();
// })
// .then((data) => {                   //then print out the data from the api
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/");   //it the returns the new request
// })
// .then((res) => {                    //if there is a response call the function
//     console.log('RESOLVED2!')
//     return res.json();              //print out text"RESOLVED2" then return res.josn, so in a json format we can use
// })
// .then((data) => {                   //once that json data is responded, print it out
//     console.log(data);
// })
// .catch((err) => {                 //This catches the error instead of stopping our code
//     console.log('ERROR!', err);
// });


//USING AN ASYNC FUNCTION INSTEAD


// You have to wrap an async function with 'try' 'catch' to prevent error stopping the code
// const loadStarWarsPeople = async () => {
//     try{
//         const res = await fetch("https://swapi.dev/api/people/1/");
//         const data = await res.json();
//         console.log(data)
//         const res3 = await fetch("https://swapi.dev/api/people/3/");
//         const data3 = await res3.json();
//         console.log(data3);
//     } catch (err) {
//         console.log('ERROR!!!')
//     }
// };

// loadStarWarsPeople();


// INTRODUCING AXIOS

// axios.get("https://swapi.dev/api/people/1/")
// .then ((res) => {
//     console.log('RESPONSE OK', res)
// })
// .catch((err) => {
//     console.log('ERROR!', err)
// })

//REFACTORING TO BE ASYNC FUNCTION

// const getStarWarsPerson = async (id) => {
//     try{
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data)
//     } catch (err) {
//         console.log('Error!!')
//     }
    
// }

// getStarWarsPerson(37);

//New joke button and list

// const jokes = document.querySelector('#jokes')
// const button = document.querySelector('button')

// const addNewJoke = async () => {
//     const jokeText = await getDadJoke()
//     console.log(jokeText)
//     const newLi = document.createElement('LI');
//     newLi.append(jokeText);
//     jokes.append(newLi)
// }

// const getDadJoke = async() => {
//     try{
//         const config = {headers: {Accept: 'application/json'}};
//     const res = await axios.get("https://icanhazdadjoke.com/", config);
//     return res.data.joke;
//     } catch (err) {
//         return 'No Jokes Available'
//     }
    
// }

// button.addEventListener('click', addNewJoke)
