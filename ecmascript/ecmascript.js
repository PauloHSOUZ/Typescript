"use strict";
// // arrow function (sempre anonima)
// // hoisting
// const subtrair = (n1: number, n2: number) => n1 + n2;
// console.log(subtrair(1,2));
// // Funcao sem parametro
// const saudacao = () => console.log('Ola');
// console.log(saudacao());
// // Funcao com apenas 1 parametro
// const falarCom = (pessoa: string) => console.log('Ola' + pessoa);
// console.log(falarCom('Paulo'));
// // Rest & Spread
// const numbers = [1, 10, 99, -5];
// console.log(Math.max(...numbers)); // Spread
// const turmaA: string[] = ['Joao', 'Maria', 'Paulo'];
// const turmaB: string[] = ['Fernando', 'Mariao', 'Juliano', ...turmaA];
// console.log(turmaB);
// // SPREAD
// function retornaArray(...args: number[]): number[] {
//     return args;
// }
// const numeros = retornaArray(1,2,3,4,5,6);
// console.log(retornaArray(...numbers));
// // REST & SPREAD [TUPLA]
// const tuplas: [number, string, boolean] = [1, 'abc', false];
// function tuplaParam1(a: number, b: string, c: boolean): void {
//     console.log(a,b,c);
// }
// console.log(tuplaParam1(...tuplas));
// function tuplaParam2(...params: [number, string, boolean]): void {
//     console.log(params);
// }
// tuplaParam2(...tuplas)
// // destructuring array
// const caracteristicas = ['Motor 1.8', 2020];
// const [motor, ano] = caracteristicas;
// // destructuring objeto
// const item = {
//     nome: 'SSD 480g',
//     preco: 200
// }
// const { nome: n, preco } = item;
// // generators, simbolos, interators
//# sourceMappingURL=ecmascript.js.map