//OOP Object Oriented Programming 

class Employee {

    //ten konstruktor jest wołany za 
    //każdnym razem kiedy wywołujemy klasę
    //let emp2 = new Employee('Peter',"1002");
    constructor(name, id){
        this.name = name
        this.id = id
    }

    //konstruktor
    //emp1.setDetails('John',1001);
    setDetails(name,id) {
        this.name = name
        this.id = id
    }
}

let emp1 = new Employee();
emp1.setDetails('John',1001);
console.log(emp1.name)
console.log(emp1.id)
let emp2 = new Employee('Peter',"1002");
console.log(emp2.name)
console.log(emp2.id)