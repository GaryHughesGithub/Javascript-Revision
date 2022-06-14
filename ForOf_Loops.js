const subreddits = ['books', 'gardening','construction','sports','opera']

//OLDER FOR LOOP METHOD
// for (let i = 0; i < subreddits.length;i++) {
//     console.log(i, subreddits[i])
// }

//NEWER FOR..OF LOOP METHOD, ALOT SIMPLER 
//WHEN THE INDEX IS NOT NEEDED
// for (let sub of subreddits) {
//     console.log(sub)
// }



const seatingChart = [
        ['Gary','Cassie' ,'Caiden'],
        ['Lucas' , 'Mason', 'Logan'],
        ['Ryan', 'Paige', 'Rhys']
]

//OLD METHOD
// for (let i = 0; i < seatingChart.length;i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length;j++) {
//         console.log(row[j])
//     }
// }


//NEW METHOD
// for (let row of seatingChart) {
//     for ( student of row) {
//         console.log(student);
//     }    
// }


// for ( let char of 'Hello World') {
//     console.log(char)
// }

//YOU CANNOT ITERATE OVER AN OBJECT LITERAL(DICTIONARY)
//WITH THESE LOOPS, YOU WOULD NEED TO USE FOR IN LOOP.


const midTerms = {
    danielle:96,
    thomas:78,
    gary:98,
    cassie:102,
};

// for ( let stu in midTerms) {
//     console.log(`${stu} scored ${midTerms[stu]}`)
// }

// console.log(Object.keys(midTerms))
// console.log(Object.values(midTerms))
// console.log(Object.entries(midTerms))