"use strict";
// Somente leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-11', 'PT-ABC');
// turboHelice.modelo = ''  //gera erro
