"use strict";
// arrow function (sempre anonima)
// hoisting
const subtrair = (n1, n2) => n1 + n2;
console.log(subtrair(1, 2));
// Funcao sem parametro
const saudacao = () => console.log('Ola');
console.log(saudacao());
// Funcao com apenas 1 parametro
const falarCom = (pessoa) => console.log('Ola' + pessoa);
console.log(falarCom('Paulo'));
// Rest & Spread
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers)); // Spread
const turmaA = ['Joao', 'Maria', 'Paulo'];
const turmaB = ['Fernando', 'Mariao', 'Juliano', ...turmaA];
console.log(turmaB);
// SPREAD
function retornaArray(...args) {
    return args;
}
const numeros = retornaArray(1, 2, 3, 4, 5, 6);
console.log(retornaArray(...numbers));
// REST & SPREAD [TUPLA]
const tuplas = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(a, b, c);
}
console.log(tuplaParam1(...tuplas));
function tuplaParam2(...params) {
    console.log(params);
}
tuplaParam2(...tuplas);
//# sourceMappingURL=ecmascript.js.map