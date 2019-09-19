"use strict";
// Classe
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        console.log('Toooooooooo');
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
const ducati = new Moto('Ducati');
ducati.buzinar();
ducati.acelerar(10);
// Herança
class Objeto2D {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const calculo = new Retangulo(5, 7);
console.log(calculo.area());
// Getters && Setter
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(nome) {
        if (nome.length >= 3)
            this._primeiroNome = nome;
        else
            this._primeiroNome = '';
    }
}
const estagiario = new Estagiario;
estagiario.primeiroNome = 'Paulo';
console.log(estagiario.primeiroNome);
