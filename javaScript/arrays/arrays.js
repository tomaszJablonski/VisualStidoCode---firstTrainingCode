let numbers = [1,2,3,4,5,6,7,8,9];

console.log(numbers);

let fruits = ['Apple','Banana','Strawberry']

console.log(fruits);

let cars = new Array ('Ford','Ferrari','BMW')

console.log(cars)

console.log(cars[1])

cars[1] = 'Peugeot'

console.log(cars[1])
console.log(cars)

fruits.push('Cherry')
console.log(fruits)
console.log(fruits.length)

let x;

for(x in fruits){
    console.log(fruits[x])
}
console.log()
for(x of fruits){
    console.log(x)
}