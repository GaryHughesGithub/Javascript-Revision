let days = ['Monday', 'Tuesday','Wednesday','Thursday','Friday']

// console.log(days[3])

// console.log(days.length)

// console.log(days.indexOf('Wednesday'))


//REPLACING AN ELEMENT WITHIN THE ARRAY
// days[4] = 'Saturday'
// console.log(days)

//JS WILL ALLOW YOU TO ADD AN ELEMENT TO A 
//NON EXISTENT POSITION BUT WILL ADD IN THE 
//EMPTY SLOTS IN BETWEEN
// days[10] = 'Saturday'
// days[20] = 'Sunday'
// console.log(days)
// console.log(days.length)


//PUSH APPEND AN ITEM TO THE END OF AN ARRAY
// days.push('testing1','testing2')
// console.log(days)

//POP REMOVES THE END ITEM FROM AN ARRAY, WHICH CAN THEN
//BE ASSIGNED TO ANOTHER VARIABLE!
// let test = days.pop()
// console.log(days)
// console.log(test)


//SHIFT REMOVES THE FIRST ELEMENT OF AN ARRAY, WHICH CAN 
//THEN BE SET TO A NEW VARIABLE
// let test = days.shift()
// console.log(days)
// console.log(test)


//UNSHIFT ADDS NEW ELEMENTS TO THE START OF AN ARRAY
// days.unshift('Sunday','Saturday')
// console.log(days)


//CONCAT JOINS 2 DIFFERENT ARRAYS INTO A NEW ARRAY, WHICH
//CAN THEN BE ASSIGNED TO A NEW VARIABLE
// let weekend = ['Saturday','Sunday']
// let fullWeek = days.concat(weekend)
// console.log(fullWeek)


//INCLUDES CHECKS IF THE PARAMETER IS PRESENT IN THE ARRAY
//RETURNS TRUE OR FALSE
// console.log(days.includes('Thursday'))
// console.log(days.includes('Sunday'))


//INDEXOF CHECK AT WHAT INDEX THE ARGUMENT APPEARS,
//IT HAS TO MATCH EXACTLY
// console.log('Monday'.indexOf('M'))
// console.log('Monday'.indexOf('n'))
// console.log('Monday'.indexOf('y'))
// console.log('Monday'.indexOf('N'))

// console.log(days.indexOf('Monday'))
// console.log(days.indexOf('monday'))


//REVERSE DOES AS ITS NAME SAKE, BUT THIS IS DESTRUCTIVE
//SO CHANGES IT IN PLACE
// console.log(days.reverse())
// console.log(days)



//SLICE ALLOWS YOU SELECT AN INDEXED SELECTION FROM THE ARRAY
//SPLICE LETS YOU INSERT OR REPLACE ELEMENTS
// (START POS,NUMBER OF ELEMENTS TO REPLACE,INSERTED ELEMENT)

// console.log(days.slice(3,5))
// console.log(days.slice(-2))

// days.splice(5,0,'Saturday');
// console.log(days)


//ACCESSING NESTED ARRAYS
// const gameBoard = [
//     ['X','O','X'],
//     ['O',null,'X'],
//     ['O','O','X']
// ]

// console.log(gameBoard)
// console.log(gameBoard[1][1])