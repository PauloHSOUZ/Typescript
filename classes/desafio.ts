// Classe
class Moto {
    public velocidade: number = 0;

    constructor(public nome: string){}

    public buzinar(): void {
        console.log('Toooooooooo')
    }

    public acelerar(delta: number): void {
        this.velocidade = this.velocidade + delta;
    }
}

const ducati = new Moto('Ducati')
ducati.buzinar();
ducati.acelerar(10);

// Herança

abstract class Objeto2D {
    constructor(public base: number, public altura: number){}
    abstract area(): number
}

class Retangulo extends Objeto2D {
    public area() {
        return this.base * this.altura;
    }
}

const calculo = new Retangulo(5,7)
console.log(calculo.area());

// Getters && Setter

class Estagiario {
    private _primeiroNome: string = '';

    get primeiroNome(): string {
        return this._primeiroNome;
    }

    set primeiroNome(nome: string) {
        if (nome.length >= 3) 
            this._primeiroNome = nome
        else this._primeiroNome = ''
    }
}

const estagiario = new Estagiario
estagiario.primeiroNome = 'Paulo'
console.log(estagiario.primeiroNome);
