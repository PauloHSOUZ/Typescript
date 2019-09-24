"use strict";
class Cliente {
    constructor() {
        this.nome = '';
    }
    saudar(sobrenome) {
        console.log(`Ola ${sobrenome}`);
    }
}
const meuCliente = new Cliente;
meuCliente.nome = 'Han';
meuCliente.saudar('Solo');
let potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstractABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
console.log(x);
console.log(y);
console.log(z);
x.log();
y.log();
z.log();
