console.log('while')
/*tutaj waruenk jest na samym początku, 
jak nie będzie
spełniony to nawet w te pętle nie wejdzie */

let counter = 11;

while(counter <= 10) {
    console.log('counter : ' + counter)
    counter++ //counter = counter +1 the same
}

console.log('do while') 
// wykona się chociaż raz zanim sprawdzi warunek

 counter = 11
do {
    console.log('counter value is : ' + counter)
    counter ++
} while(counter <= 10)