
// Getters && Setter

class Pessoa {
    private _idade: number = 0;

    get idade(): number {
        return this._idade;
    }

    set idade(idade: number) {
        if (idade >= 0 && idade <= 120 ) this._idade = idade;
    }
}

const pessoa1 = new Pessoa

pessoa1.idade = 10;
console.log(pessoa1.idade);