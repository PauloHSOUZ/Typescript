"use strict";
// Metodos
function imprimir(args) {
    args.forEach(element => console.log());
}
imprimir([1, 2, 3]);
imprimir(['1', '2']);
imprimir([{ nome: 'Paulo', idade: 23 }]);
imprimir([{ nome: 'Paulo', idade: 23 }]);
// const chamarEcho: Echo = chamarEcho
// Classes
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
// console.log(new SomaBinaria(3,4).executar());
class DiferencaEntreData extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getDate();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const t1 = new Data(1, 2, 2020);
const t2 = new Data(5, 2, 2020);
// console.log(new DiferencaEntreData(t1,t2).executar());
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(item) {
        this.fila.push(item);
    }
    proximo() {
        const primeiro = this.fila[0];
        this.fila.splice(0, 2);
        return primeiro;
    }
    imprimir() {
        console.log(fila);
    }
}
const fila = new Fila('Paulo', 'Henrique');
fila.imprimir();
fila.entrar('Karen');
fila.imprimir();
fila.proximo();
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    obter(chave) {
        const resultado = this.itens.filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }
    colocar(par) {
        const encontrado = this.obter(par.chave);
        if (encontrado)
            encontrado.valor = par.valor;
        else
            this.itens.push(par);
    }
    imprimir() {
        console.log(this.itens);
    }
    limpar() {
        this.itens = new Array();
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
