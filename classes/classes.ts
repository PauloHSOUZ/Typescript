// class Data {

//     public dia: number;
//     public mes: number;
//     public ano: number;

//     constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
//         this.dia = dia,
//         this.mes = mes;
//         this.ano = ano;
//     }
// }

// const aniversario = new Data(3, 11, 1991);

// aniversario.dia = 4;
// console.log(aniversario.dia);
// console.log(aniversario);

// const casamento = new Data
// casamento.ano = 2017
// console.log(casamento);


// class DataEsperta {
//     constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {

//     }
// }

// const aniversarioEsperto = new DataEsperta(3, 11, 1991);


class Produto {

    constructor(public nome: string, public preco: number, public desconto: number = 0){}

    public resumo(): string {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }

    public precoComDesconto(): number {
        return this.preco - (this.desconto * 100);
    }
}

// const carro = new Produto('Carro',37.000);
// const moto = new Produto('Moto',37000,0.5);
// console.log(moto.precoComDesconto());
// console.log(moto.resumo());

class Carro {

    private velocidadeAtual: number = 0;

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200){}

    private alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

        if (velocidadeValida) this.velocidadeAtual = novaVelocidade;
        else
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;

        return this.velocidadeAtual;
    }

    public acelerar(): number {
        return this.alterarVelocidade(5);
    }

    public frear(): number {
        return this.alterarVelocidade(-5);
    }
}

const carro1 = new Carro('Ford', 'Ka', 185);

Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());

