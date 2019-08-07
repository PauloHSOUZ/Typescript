// Tipos implícitos
// string
let nomeI = 'Paulo app'
console.log(nomeI);

// numbers
let idadeI = 23
console.log(idadeI);

// boolean
let possuiHobbiesI = true
console.log(possuiHobbiesI);

// Tipos explícitos
// string
let nomeE: string = 'Paulo app'
console.log(nomeE);

// numbers
let idadeE: number = 23
console.log(idadeE);

// boolean
let possuiHobbiesE: boolean = true
console.log(possuiHobbiesE);

// Arrays
// Definindo tipos
let hobbies: string[] = ["Cozinhar"]
console.log(hobbies);

// Tuplas
let endereco: [string,number] = ['Travessa', 99];
console.log(endereco);

// Unums
enum Cor {
    Cinza, // 0
    Verde = 100, // 100
    Azul = 10, // 10
    Laranja, // 11
    Amarelo, // 12
    Vermelho = 100
}

let minhaCor: Cor = Cor.Cinza

console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);


