"use strict";
// Tipos implícitos
// string
var nomeI = 'Paulo app';
console.log(nomeI);
// numbers
var idadeI = 23;
console.log(idadeI);
// boolean
var possuiHobbiesI = true;
console.log(possuiHobbiesI);
// Tipos explícitos
// string
var nomeE = 'Paulo app';
console.log(nomeE);
// numbers
var idadeE = 23;
console.log(idadeE);
// boolean
var possuiHobbiesE = true;
console.log(possuiHobbiesE);
// Arrays
// Definindo tipos
var hobbies = ["Cozinhar"];
console.log(hobbies);
// Tuplas
var endereco = ['Travessa', 99];
console.log(endereco);
// Unums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Cinza;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
