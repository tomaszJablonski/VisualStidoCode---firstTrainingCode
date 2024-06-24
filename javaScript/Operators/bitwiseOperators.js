//Bitwise Operators 
/* Bitwise operators treat arg as 32-bit numbers
and work on the level of their binary representation /*

/* 
& AND
| OR
^ XOR
~ NOT
<< Left Shift
>> Right Shift
*/

/* 
AND - muszą być oba warunki spełnione czyli 1 1 a nie 1 0
A = 1 = 0001
B = 2 = 0010
      = 0000
*/

let A = 1;
let B = 2;
console.log(A & B);

/* 
OR - tutaj wystarczy, że jest tylko jedna 1 i jest 1
C = 1 = 0001
D = 2 = 0010
      = 0011
*/

let C = 1;
let D = 2;
console.log(C | D);

/* 
^ - dwie jedynie dają zero, jedynka i zero daje 1
E = 3 = 0011 
F = 5 = 0101
      = 0110
*/

let E = 3;
let F = 5;
console.log(E ^ F);

/* 
~ - odwraca znaczenie cyfr
G = 5 = 0101
~5    = 1010 
*/

let G = 5;
console.log(~5);

/* 
<< - przesówa w lewo i uzupełnia puste miejsca 0
>> - przesówa w prawo i uzupełnia puste miejsca 0
5<<1
     0101
     1010 = 10   
H
*/

let H = 5;
console.log( H<<1);