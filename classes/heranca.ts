class Carro {

    private velocidadeAtual: number = 0;

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200){}

    // Metodos do tipo protected pode ser erdado apenas pelo 'filhos'
    // Nao pode ser acessar por outras classes
    protected alterarVelocidade(delta: number): number {
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

class Ferrari extends Carro {

    constructor(modelo: string, velocidadeMaxima: number){
        super('Ferrari', modelo, velocidadeMaxima);
    }

    public acelerar(): number {
        return this.alterarVelocidade(20);
    }

    public frear(): number {
        return this.alterarVelocidade(-15);
    }
}

const f40 = new Ferrari('F40',324);
f40.acelerar();