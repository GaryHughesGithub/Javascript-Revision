//Nested changes of background color, so that they change after each other
//rather than triggering timers at the same time.

// setTimeout(function() {
//     document.body.style.backgroundColor = 'orange';
//     setTimeout(function() {
//         document.body.style.backgroundColor = 'blue';
//         setTimeout( () => {
//             document.body.style.backgroundColor = 'indigo';
//         },2000);
//     },2000);
// },2000);


//Same effect but declared within a function

// const delayedColorChange = function(newColor,delay, doNext) {
//     setTimeout(function() {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();   //you can call doNext(), but this line also checks that an argument was
//     },delay)      // passed inot the paremter of the function, so it doesnt throw up an error
// }


//function calling the same function, same effect calls after the time elapses
//rather than triggering at the same time
//the third passed in parameter is called callback, and is commonly used

// delayedColorChange('olive', 5000, () => {
//     delayedColorChange('teal', 2000, function() {
//         delayedColorChange('purple', 2000)   //no call back is passed in to doNext, so it will stop
//     })
// });



//fakecallBack success and failure are defined when the function is called

// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection Timeout :(')
//         } else {
//             success(`Here is your fake data from ${url}`)
//         }
//     }, delay)
// }

// fakeRequestCallback('books.com',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//     }, function (err) {
//             console.log("ERROR!!!", err)
//     });

//nested version
// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response);
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response);
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN!!!!")
//                         console.log(response);
//                     }, function (err) {
//                             console.log("ERROR!!! 3rd Page", err)
//                     })
//             },function (err) {
//                 console.log("ERROR!!! 2nd Page", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
// });


//PROMISES

const fakeRequest = (url) => {
    return new Promise((resolve,reject) => {
        const randomNumber = Math.random();
        setTimeout(() => {
            if (randomNumber < 0.7) {
                resolve('HERE"S YOUR FAKE DATA'); 
            }
            reject('REQUEST TIMEOUT')          
        }, 2000);
    })
}

fakeRequest('testing/test/test.com/page1')
    .then((data) => {
        console.log('data page1:',data);
        fakeRequest('testing/test/test.com/page2')
            .then( (data) => {
                console.log('data page2:',data);
            })
            .catch( (err) => {
                console.log('OH SHITE THERES AN ERROR ON PAGE2!', err);
            })
    })
    .catch((err) => {
        console.log('OH SHITE THERES AN ERROR ON PAGE1!', err);
    });


//REWRITING THE COLOR CHANGE NESTED FUNCTIONS AS PROMISE

// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }

// delayedColorChange('pink', 2000)
// .then(() => {
//     delayedColorChange('red', 2000)
// })

//SIMPLIFY FUTHER WITH IMPLICIT RETURN
// delayedColorChange('red', 2000)
//     .then(() => delayedColorChange('orange', 2000))
//     .then(() => delayedColorChange('yellow', 2000))
//     .then(() => delayedColorChange('green', 2000))
//     .then(() => delayedColorChange('blue', 2000))
//     .then(() => delayedColorChange('indigo', 2000))
//     .then(() => delayedColorChange('violet', 2000))


//ASYNC FUNCTIONS / KEYWORD

// async function hello() {

// }

// const sing = async() => {
//     return 'LA LA LA'
// }

// sing()
//     .then((data) => {
//         console.log('PROMISE RESOLVED WITH:', data) 
//     })
//     .catch(err => {
//         console.log('OH NO, PROMISE REJECTED')
//         console.log(err)
//     })

//     const login = async (username, password) => {
//         if(!username || !password) throw 'Missing credentials!'
//         if(password === 'corgifeetarecute') return 'Welcome'
//         throw 'INVALID PASSWORD TRY AGAIN'
//     }





//     login('GAZZALED84','corgifeetarecute')
//         .then (msg => {
//             console.log('Welcome you are logged in!')
//             console.log(msg)
//         })
//         .catch (err => {
//             console.log('ERROR')
//             console.log(err)
//         })



//ASYNC FUNCTIONS


// async function rainbow() {
//     await delayedColorChange('blue', 2000)
//     console.log('Now its blue!')
//     await delayedColorChange('green', 2000)
//     console.log('Now its green!')
//     await delayedColorChange('orange', 2000)
//     console.log('Now its orange!')
//     await delayedColorChange('olive', 2000)
//     console.log('Now its olive!')
//     await delayedColorChange('red', 2000)
//     console.log('Now its red!')
//     return 'ALL DONE!'
// }

// rainbow().then (() => console.log('END OF TEST'))

// async function printRainbow() {
//     await rainbow();
//     console.log('END OF RAINBOW');
// }

// printRainbow();



// async function makeTwoRequests() {
//     let data1 = fakeRequest('www.google.co.uk');
//     console.log(data1);
// }

