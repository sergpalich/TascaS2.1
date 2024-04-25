function add(a,b){
    return a+b
}

console.log(add(5,6));

let add1 = (a,b) => a+b; 

console.log(add1(20,30));


let randomNumber = () => (Math.floor(Math.random()*100))

console.log(randomNumber());

class Person {
    constructor (name) {
        this.name = name;
    }

    greet = () => console.log(`Hola, ${this.name}`);

}

const person1 = new Person('Pedro');
console.log(person1.greet());


let perros = ['doberman', 'hasky', 'mastif', 'laika', 'rotweiler'];

let printNumbers = (a) => a.forEach((element) => console.log(element));