//OBJECT LITERALS ARE JUST LIKE PYTHON DICTIONARIES

const person = {
    firstName:'Gary',
    lastName:'Hughes',
    favouriteColor:'green'
};

// console.log(person);

////////////////////////////////////

//ACCESSING DATA IN THE OBJECT LITERAL
// console.log(person['firstName']);
// console.log(person['lastName']);
//althought the key isnt a string, it has 
//to be inputted as so to access its value 
//from the object literal

// console.log(person.firstName);
// console.log(person.lastName);

////////////////////////////////////

const midTerms = {
    danielle:96,
    thomas:78,
};

//adding key value pairs to an object literal below:
// midTerms.thomas = 80;
// console.log(midTerms);

// midTerms.gary = 98;
// midTerms['cassie'] = 3;
// console.log(midTerms);

/////////////////////////////////////

const comments = [
    {userName:'Tammy',text:'lolololol',votes:9},
    {userName:'Gary',text:'Hello', votes:14},
]

//two method of accessing the 'hello' text in the array,
console.log(comments[1].text)
console.log(comments[1]['text'])