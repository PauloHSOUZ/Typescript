// Metodos
function imprimir<T>(args: T[]) {
    args.forEach(element => console.log());
}

imprimir<number>([1,2,3]);
imprimir<string>(['1','2']);
imprimir<{nome: string, idade: number}>([{nome: 'Paulo', idade: 23}]);

type Aluno = {nome: string, idade: number};
imprimir<Aluno>([{nome: 'Paulo', idade: 23}]);



// Type generics
// const chamarEcho: <T>(data: T) => T 
type Echo = <T>(data: T) => T
// const chamarEcho: Echo = chamarEcho

// Classes
abstract class OperacaoBinaria<T,R> {
    constructor(public operando1: T, public operando2: T){}

    abstract executar(): R
}

class SomaBinaria extends OperacaoBinaria<number,number> {
    executar(): number {
        return this.operando1 + this.operando2;
    }
}

// console.log(new SomaBinaria(3,4).executar());


class DiferencaEntreData extends OperacaoBinaria<Data, string> { 

    getTime(data: Data): number {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getDate()
    }

    executar(): string {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca/dia)} dia(s)`;
    }
}

const t1 = new Data(1, 2, 2020);
const t2 = new Data(5, 2, 2020);
// console.log(new DiferencaEntreData(t1,t2).executar());

class Fila<T> {

    public fila: Array<T>;

    constructor(...args: T[]) {
        this.fila = args;
    }

    entrar(item: T) {
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

const fila = new Fila<string>('Paulo','Henrique');
fila.imprimir();
fila.entrar('Karen');
fila.imprimir();
fila.proximo();




type Par<C, V> = {chave: C, valor: V};

class Mapa<C,V> {

    public itens: Array<Par<C, V>> = new Array<Par<C, V>>();

    obter(chave: C): Par<C, V> | null {
        const resultado = this.itens.filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }

    colocar(par: Par<C, V>) {
        const encontrado = this.obter(par.chave);
        if (encontrado) 
            encontrado.valor = par.valor;
        else this.itens.push(par);
    }      

    imprimir() {
        console.log(this.itens);
    }

    limpar() {
        this.itens = new Array<Par<C, V>>();
    }
}

const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()