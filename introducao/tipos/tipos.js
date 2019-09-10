"use strict";
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Paulo',
    contaBancaria: contaBancaria,
    contatos: ['23232', '23233']
};
