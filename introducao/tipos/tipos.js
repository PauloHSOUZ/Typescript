"use strict";
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Paulo',
    contaBancaria: contaBancaria,
    contatos: ['23232', '23233']
};
//# sourceMappingURL=tipos.js.map