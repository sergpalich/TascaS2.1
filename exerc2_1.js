/* Exercici 1.1: Arrow functions */

function add(a,b){
    return a+b
}

console.log(add(5,6));

let add1 = (a,b) => a+b; 

console.log(add1(20,30));


let randomNumber = () => (Math.floor(Math.random()*100))

console.log(randomNumber());

/*  Ex 3 */

class Person {
    constructor (name) {
        this.name = name;
    }

    greet = () => console.log(`Hola, ${this.name}`);

}

const person1 = new Person('Pedro');
person1.greet()

/* Ex4 */
let perros = [1, 24, 477, 88,0];

function printNumbers (a) {
    a.forEach(element => console.log(element));
}

printNumbers(perros);


function waitThreeSec(message) {
    setTimeout(() => {
        console.log(message)
    }, 3000);
}

waitThreeSec("Great news to read!")


/* Exercici 1.2: Operador ternari */


function potConduir (edad) {
    (edad >= 18) ? console.log("Pots conduir") : console.log("No pots conduir");
}

potConduir(100)


function comparadorNums (num1, num2) {
    (num1 > num2) ? console.log('num1 és més gran') : console.log('num2 és més gran');  
}

comparadorNums(1000, 100);

function whatNumberIs (num) {
    let resultado =
        num < 0 ? "Un número és Negatiu" :
        num > 0 ? "Un número és Positiu" :
        "Un número és Zero";
    console.log(resultado);
}

whatNumberIs(5) 


function  trobarMaxim(a,b,c){
    let resultado =
    a > b && b > c ? "A es el numero mas grande" :
    a > c ? "A es el numero mas grande" :
    b > a && a > c ? "B es el numero mas grande" :
    b > c ? "B es el numero mas grande":
    c > b && b > a ? "C es el numero mas grande" :
    c > a ? "C es el numero mas grande" :
    "Son numero iguales";

    console.log(resultado);
}

trobarMaxim(101, 101,101);


/* const numeros = [2];
function parOImpar  (numeros) {
    numeros.forEach(numero => {
        let result = [] 
        result =
            numero % 2 === 0 ? result.push("Numero es par"):
            numero % 2 === 1 ? result.push("Numero es impar"):
        console.log(result);
    });
}
parOImpar(numeros);
 */




/* Exercici 1.3: Callbacks */

function saludar (nombre){
    console.log(`Hola ${nombre}!`);
}

function processar (nombre, callback){
    saludar(nombre);
}

processar ("Pedro");


/* Ex 2 */
function operation (num1, num2){
    console.log(num1 + num2);
}

function calculadora (num1, num2, callback){
    operation (num1, num2)
}

calculadora(2, 10);

/* Ex 3 */
function saludar1 (nombre){
    console.log(`Hola ${nombre}, me alegro verte!`);
}

function esperarISaludar (nombre, callback){
    setTimeout(() => {
        saludar1(nombre);
    }, 2000);
}

esperarISaludar("Ivan");

/* Ex 4*/

let frutas = ["banana", "lime", "avocado", "orange"];

function checkFruta (productos){
    productos.forEach(producto => {
        console.log("Es sano comer " + producto);
    })
}
function comerSano (producto, callback){
    checkFruta(producto);
}

comerSano(frutas);

/* Ex 5 */

let texto = "hello my favorite amigo";

function mayusculoTransform (phrase){
    console.log(phrase.toUpperCase());
};

function processarCadena (phrase, callback){
    mayusculoTransform(phrase);
};

processarCadena(texto);


/* Exercici 1.4: Rest & Spread operators */

/* Ex 1 */

const mesesVerano = ["junio", "julio", "agosto"];
const mesesFall = ["septembre", "octubre", "noviembre"];
mesesDeSeisAOnce = [ "junio", "julio", "agosto", ...mesesFall]
console.log(mesesDeSeisAOnce);

/* Ex 2 */

function suma2(...argumentos) {
    let total = 0;
    argumentos.forEach (arg => {
        total += arg;
    })
    return total;
  }
  
  console.log(suma2(1, 10, 22));

  /* Ex 3 */

let num10 = [12,13,14];
let num11 = [...num10];
console.log(num11);
num11.push(15);
console.log(num11);
console.log(num10);

/* Ex 4 */

[a, b, ...rest]  = [34, 12, 45, 66, 3, 18];
console.log("Edad Maria " + a);
console.log("Edad de su hija " + b);
console.log("Otros edades " + rest );

/* Ex 6 */

let nums1 = [100, 200,300, 1.1];
let flowers = ["rose", "peppermint", "jasmine"];
let mix = [...nums1, ...flowers];
console.log(mix);

/* Exercici 1.5: Array transformations */

/* Ej1  Quadrat */
const numInicials = [1,2,3,4];
const numQuadrats = numInicials.map(num => Math.pow(num, 2));
console.log(numQuadrats)

/* Ej2 Numeros pares */

const numPares = numInicials.filter (num => num%2 ===0);
console.log(numPares);

/* Ej3 Trobar num mayor de 10 */
const mayorDies = numInicials.find(num => num > 10);
console.log(mayorDies);

/* Ej4 Suma de num en array */
const numParaSumar = [13,7,8,21];
const suma = numParaSumar.reduce((acumulador, current) =>{
    return acumulador + current;
},0);

console.log(suma);

/* Ex 5 */

let numerosDistintos = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9];
function complex (datos){
    let resultComplex = datos.filter(data=> data>10).map(data=>data*2).reduce((accumulador, current) =>{return accumulador+current}, 0);
    console.log(resultComplex);
}

complex(numerosDistintos);

/* Ex 6 */

console.log([11, 12, 13, 14].every((elem) => elem > 10));
console.log([11, 12, 13, 14].some((elem) => elem > 10));

/* Exercici 1.6: Array loops */

/* Ex 1 */
let noms = ['Anna', 'Bernat', 'Clara'];
noms.forEach(nom => {
    console.log(nom);
})

/* Ex 2 */

for (let nom of noms){
    console.log(nom);
}

/* Ex 3 */

let numeros = [1, 2, 3, 4, 5, 6];
let parells = numeros.filter(numero => numero % 2===0);
console.log(parells);

/* Ex 4 */
let obj = { nom: "Ona", edat: 25, ciutat: 'Barcelona' };
for (let item in obj){
    console.log(`obj.${item} = ${obj[item]}`);
};

/* Ex 5 */
let numeros20 = [1, 2, 3, 4, 5, 6];
for (let num of numeros20) {
    console.log(num);
    if (num ===5){
        break;
    };
};

/* Ex 6 */
for (let nom of noms){
    console.log(noms.indexOf(nom) + ":"  + nom);
};
  
/* Exercici 1.7: Promises & Async/Await */

/* /* Ex 1 */
function greeting (){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Hola, mon!');
        }, 2000)
    })
}



/* Ex 2 */

greeting().then(data => {
    console.log(data);
});


/* Ex 3 */

function controlDeVisitantes(message){
    return new Promise ((resolve, reject) => {
        if (message !== 'Hola'){
            reject ('NO es hola!');
            console.log('NO es hola!');
        } else {
            setTimeout(() => {
                resolve('Welcome aboard');
                
                }, 2000);
            }
    })
}


controlDeVisitantes('Hola').then((data) => console.log(data));

/* Ex 4 */

async function makeMensajeGreet (){
    const mensajeGreet = await greeting();
    console.log(mensajeGreet);
}

makeMensajeGreet()

