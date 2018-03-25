// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// // const name = person.name;
// // const age = person.age;
// // above can be done with destructuring
// const {name, age} = person;

// console.log(`${name} is ${age}.`);

// // nested objects can be destructured too and 
// // destructured variables can be renamed
// const { city, temp: temperature } = person.location;

// if (city && temperature ) {
//     console.log(`It's ${temperature} in ${city}.`);    
// }

// // undefined variables can have default values
// const { pet = 'A dog' } = person;

// console.log(`${pet} says woof!`);

// // challenge part

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'self-published' } = book.publisher; 

// console.log(`${publisherName}`); // Penguin, default = self-published

// array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// skip first and last variable in the list, 3rd item defaults to New York
const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);


// challenge part
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ menuItem, , mediumPrice ] = item;

// console.log(`A medium coffee (hot) costs $2.50.`);

console.log(`A medium ${menuItem} costs ${mediumPrice}.`);