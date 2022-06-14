//Nested changes of background color, so that they change after each other
//rather than triggering timers at the same time.

// document.body.style.backgroundColor = 'red';
// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange'
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'yellow'
//     },2000)
// },2000)


//Same effect but declared within a function

// const delayedColorChange = function(newColor,delay, doNext) {
//     setTimeout(function() {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     },delay)
// }


//function calling the same function, same effect calls after the time elapses
//rather than triggering at the same time
//the third passed in parameter is called callback, and is commonly used

// delayedColorChange('olive', 5000, () => {
//     delayedColorChange('teal', 2000, function() {
//         delayedColorChange('purple', 2000)
//     })
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

// fakeRequest('testing/test/test.com')
// .then((data) => {
//     console.log('REQUEST COMPLETED')
//     console.log('data is:',data)
// })
// .catch((err) => {
//     console.log('OH SHITE THERES AN ERROR!', err)
// })


//REWRITING THE COLOR CHANGE NESTED FUNCTIONS AS PROMISE

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

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

