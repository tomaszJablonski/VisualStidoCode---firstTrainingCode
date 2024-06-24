//Prototype
/* 
In JS every function has a property called Prototype
*/

function myFun(){

}

myFun.prototype
/* every method have a property and by default
is empty. J can add propertis and method to it.
*/

// function EmpDetails(){

// }
//możemy stworzyć konstruktor bez klasy w JS
let EmpDetails = function(name, age){
    this.name = name;
    this.age = age;
};

EmpDetails.prototype.getName = function(){
    return this.name;
};

EmpDetails.prototype.getAge = function(){
    return this.age;
};

let emp1 = new EmpDetails('John', 30);
let emp2 = new EmpDetails('Peter', 40);
let emp3 = new EmpDetails('Sandra', 18);

console.log(emp1.getName());
console.log(emp2.getAge());
console.log(emp3.getName());

/*JS has prototype based Inheritance
Jeżeli jest funkcja X i 
stworzymy kolejną funkcje Y i 
która dziedziczy po funkcji X to może ona dzięki 
prototypowi każystać z metod funkcji X */