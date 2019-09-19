"use strict";
// O contrutor é privado para não permitir que a classe seja instanciada
// é retornado a instancia da classe para manter o controller de quatas instancias serao criadas
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
console.log(Unico.getInstance().agora);
