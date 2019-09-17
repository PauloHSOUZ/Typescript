class Data {

    public dia: number;
    public mes: number;
    public ano: number;

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia,
        this.mes = mes;
        this.ano = ano;
    }
}

const aniversario = new Data(3, 11, 1991);

aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data
casamento.ano = 2017
console.log(casamento);


class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {

    }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991);


class Produto {

    constructor(public nome: string, public preco: number, public desconto: number = 0){}

    public resumo(): string {
        return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% off)`;
    }
}

// const carro = new Produto('Carro',37.000);
const moto = new Produto('Moto',37.000,0.1);
console.log(moto.resumo());

