// for, for/in - kieruje się po indeksach, 
//for/of wypisuje wszystko co jest w danej tablicy

let i;

for(i = 1; i < 5; i++){
    console.log('value of i is -->' + i )
}
console.log('')

let fruits = ['Apple','Banana','Grapes'];
console.log(fruits[0]);
console.log('')
let x;
for(x in fruits){
    console.log(fruits[x])
}

console.log('')
for(x of fruits){
    console.log(x)
}

//while,do while