//Polymorphism - many forms
/* 
Poly = many
Morphs = forms

overloaded methods - nadpisywanie metod
super - dzięki temu możemy użyć metody 
z klasy rozszerzanej czyli pierwowzoru

Podsumowanie - Polimorfizm pozwala na stworzenie
zmiennej,funkcji lub obiektu który ma więcej niż 
jedną formę.
*/

class Animal {
    constructor(name) {
        this.name = name
    }

    eats(){
        console.log(this.name + ' eats food');
    }
}

let animal1 = new Animal("Cat");
animal1.eats();

class Aligator extends Animal {

    eats(){
        super.eats();
        console.log (this.name + ' eats fishes');
    }    
}

let aligator = new Aligator('Dundy');
aligator.eats();