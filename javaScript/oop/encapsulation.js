//Encapsulation getter and setters
class Testers {

    setTestersDetails(name,id,phoneNumber){
        this.name = name;
        this.id = id;
        this.phoneNumber = phoneNumber;
    }

    getTesterName(){
        return this.name;
    }

    getTesterId(){
        return this.id;
    }

    getTesterPhoneNumber(){
        return this.phoneNumber;
    }
}

let tester1 = new Testers();
tester1.setTestersDetails('Anna', 1001, 123456789);
console.log(tester1.getTesterName());
console.log(tester1.getTesterId());
console.log(tester1.getTesterPhoneNumber());