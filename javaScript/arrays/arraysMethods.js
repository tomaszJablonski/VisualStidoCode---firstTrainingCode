let fruits = ['Apple','Strawberry','Banana']
console.log(fruits);

//remove last element
fruits.pop();
console.log(fruits);

//remove first element
fruits.shift();
console.log(fruits);

//add element in the end of the array
fruits.push('Grapes');
console.log(fruits);

//add element in the begining of the array
fruits.unshift('Pear');
console.log(fruits);

//delete element from position but space is there
delete fruits[2];
console.log(fruits);

//add element in position
fruits [2] = 'Orange';
console.log(fruits);

//Delete elements form 0 position to 1 position 
//position 2 is there
fruits.splice(0,2)
console.log(fruits);


//From position 1 to 2 add two new fruits
fruits.splice(2,0,'Lemon','Cherry')
console.log(fruits);

//This method moves from index 1 to 2 to new array
let citrusFruits = fruits.slice(0,2)
console.log(fruits);
console.log(citrusFruits);

//function concat link two arrays for one
let evenNumbers = [2,4,6];
let oddNumbers = [1,3,5];
let primeNumbers = [2,3,5]

let numbers = evenNumbers.concat(oddNumbers,primeNumbers);
console.log(numbers);
