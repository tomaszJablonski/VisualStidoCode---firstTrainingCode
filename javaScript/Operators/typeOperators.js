//Type Operators

/* 
typeOf - returns the type of a variable

instanceof - return value boolean, returns true if an
             object is an instance of an object type
*/

let firstName = 'Thomas';
console.log(typeof firstName);
console.log(typeof 123);
console.log(typeof 123.12);
console.log(typeof true);
console.log(typeof NaN); // returns Number
console.log(typeof [1,2,3,4]); //returns Object
console.log(typeof {name:'Peter', age:25}); //returns Object
console.log(typeof new Date); //returns Object
console.log(typeof null); //returns Object
console.log(typeof function() {}); //returns function
console.log(typeof myClass); //returns undefined

let lastName = new String ('Grochowka')
console.log(lastName instanceof String);

let number1 = 123
console.log(number1 instanceof Number);

let number2 = new Number(123);
console.log(number2 instanceof Number);