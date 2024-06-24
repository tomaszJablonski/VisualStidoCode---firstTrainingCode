/* 
Inheritance - process where one class acquires 
properties (methos and fields) from another class

Parent -> child
Super  -> subclass
Base   -> derived class (pochodna klasy)
*/

class Car {
    
    setName(name){
        this.name = name;
    }

    startEngine() {
        console.log ('Engine started for ' + this.name)
    }

    stopEngine(){
        console.log('Engine stopped for ' + this.name);
    }   
}

class Ferrari extends Car{
    
    topSpeed(speed){
        console.log('Top speed for ' + this.name + ' is ' + speed)
        }

}

let myFerrari = new Ferrari();
myFerrari.setName('Turbo');
myFerrari.startEngine();
myFerrari.stopEngine();
myFerrari.topSpeed(350);
