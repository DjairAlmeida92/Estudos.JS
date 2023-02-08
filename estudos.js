//1-declarando a variável
//let weight;

//2-tipo de dado da variável 
//console.log(typeof weight);
//undefined

//3-crie um objeto de  nome student com as propriedades name, age, weight e dê as propriedades os valores que desejar...;
/*let student1 = {
    name: "murilo",
    age: 13,
    weight: 53.7,
};

//4- crie um outro objeto e o coloque na posição 1 do Array abaixo:
let student2 = {
    name: "caua",
    age: 17,
    weight: 69.7,
};
delete student1.age

//console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg.`);

let students = [
    student1,
    student2
];

console.log(student1);*/

//Revisando functions.

/*function statement/declarção da função
function appOfPrases() {
    console.log('estudy is so good')
    console.log('estudy is so great')
    console.log('estudy is so welsome')
}
//call the function/ chamar a função
appOfPrases()
appOfPrases()
appOfPrases()
appOfPrases()

//function  expression
//number1 and number2 are the parameters
//593 and 339 are the arguments
//agruping code
const sum = function(number1, number2) {
   console.log(number1 + number2);
}

sum(593, 339);
sum(593, 339);
//reutilizando code
sum(593, 339);

//Function Scope
//>toda funçao que nao tem return, retorna undefined

let subject = "create video" 
function createThink(subject)  {
    subject =  "study"
    return subject
}
console.log(subject);
// return create video
console.log(createThink(subject));
// return study

//  Function Hoisting
//> chamamos a função antes de declarar e ela sofre o hoisting. Não funciona em função anonima.
sayMyName()
function sayMyName() {
    console.log("Myrelle");
}

// Arrow Function 
//> a palavra função é deletada e adicionamos uma seta entre os parenteses e o escopo.
const sayMyName = () => {
    console.log("Myrelle");
}
sayMyName()

// callback function
// > uma função que é passada para outra função como parametro
function sayMyName(name) {
    console.log("antes de executar a  callback")
    name()
    console.log("depois de executar a  callback")
}
sayMyName(
    () => {
        console.log("estou em uma callback");
    }
)

// funções construtoras
//são utilizadas para criar novos objetos com as mesmas funcionalidades e tem sua primeira letra maiúscula.

function Person(name) {
	this.name = name
	this.walk = function() {
		return this.name + "está andando"
	}
}
const myrelle = new Person("Myrelle")
const djair = new Person("Djair")

//  Estrutura de repetição  (loops)
//  break- se quisermos parar a execução do loop
// continue- se quisermos pular a execução do momento
for (let i = 0; i < 10; i++) {
    if(i === 5){
        break;
    }
    console.log(i)
}

// While
let i  = 0;
while(i > 10) {
    console.log(i)
    i++;
}
// enquanto o i for menor que 10 e maior que 0. ele retornara o numero +1

// For of
// pode ser usado em string e em array
let name = "Myrelle"
let  names  = ["Myrelle", "Djair"]
for (let char of name)  {
    console.log(char)
}
// vai retornar letra por letra
for (let name of names)  {
    console.log(names)
}
//  retorna um nome por vez

//  For in
let person = {
    name: 'Myrelle',
    age:  '22',
    weight: 60
}
for (let property in person) {
    console.log(property)
    console.log(person.name)
}

// Object
// dado estrutural
// possui propriedades/atributos e  funcionalidades/metodos
console.log({
    name: "Myrelle",
    age: '22',
    weight: 60
})

// Array
// Uma lista / agrupamento de dados
console.log([
    "leite",
    1,
    "ovos",
    6
])*/

/* Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F*/

/*const notas = (notasEscolares) => {
    if (notasEscolares >= 90) {
        console.log("nota A")
    } else if (notasEscolares >= 80 && notasEscolares <= 89) {
        console.log("nota B")
    } else if (notasEscolares >= 70 && notasEscolares <= 79) {
        console.log("nota C")
    } else if (notasEscolares >= 60 && notasEscolares <= 69) {
        console.log("nota D")
    } else if (notasEscolares >= 0 && notasEscolares <= 59) {
        console.log("nota F")
    } else {console.log("nota inválida")}
}

notas(-1);
notas(62);
notas(77);
notas(0);
notas(100);*/

/*Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.*/


let family = {
    receitas: [2000, 1500],
    despesas: [350, 500, 150],
};

let balanceFamily = () => {

}











