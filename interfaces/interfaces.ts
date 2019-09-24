// Interface de class
interface Humano {
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void

}

class Cliente implements Humano {
    nome: string = ''

    saudar(sobrenome: string) {
        console.log(`Ola ${sobrenome}`);
    }
}

const meuCliente = new Cliente

meuCliente.nome = 'Han'
meuCliente.saudar('Solo')


// Interface funcao
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
    return base ** exp
}

// Herança

interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A,B {
    c(): void
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(){}
    b(){}
}

class RealABC implements ABC {
    a(){}
    b(){}
    c(){}
}


abstract class AbstractABD implements A, B {
    a(){}
    b(){}
}

Object.prototype.log = function () {
    console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

console.log(x);
console.log(y);
console.log(z);


x.log()
y.log()
z.log()