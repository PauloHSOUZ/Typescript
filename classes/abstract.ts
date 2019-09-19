// Classes abstratas
// Classes abastrada não podem ser instanciadas
// São utilizadas apenas para erdar metodos

abstract class Calculo {

    protected resultado: number = 0;

    abstract executar(...numeros: number[]): void;

    getResultado(): number {
        return this.resultado;
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]) {
        this.resultado = numeros.reduce((t, a) => t + a)
    };
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]) {
        this.resultado = numeros.reduce((t, a) => t * a)
    };
}

let c1: Calculo = new Soma()
c1.executar(2,3,4,5);
console.log(c1.getResultado());
