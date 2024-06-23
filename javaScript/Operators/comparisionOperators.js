//Comparision Operators
/*
==  equals true or false
=== equal value and equal type
!=  not equal to
!== not equal value and type
>   greater than
<   less than
>=  greater than or equal 
<=  less than or equal
?   ternary operator
*/


 let x = 10;
 let y = 20;

 let result = x == y
 console.log(result)

 let a = 10;
 let b = '10';

 let result1 = a == b
 console.log(result1)

 let c = 10;
 let v = '10';

 let result2 = c === v
 console.log(result2)

 let q = 10;
 let w = '10';

 let result3 = c !== v // or !=
 console.log(result3)

 /*Ternary Operator : like if-then-else
takes 3 arguments
condition ? value if true : value if else
 */

let ternaryResult = x > y ? true : false
console.log('ternary result : ' + ternaryResult);
