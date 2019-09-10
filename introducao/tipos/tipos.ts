type TContaBancaria = {
    saldo: number,
    depositar:  (valor: number) => void
}


type TCorrentista = {
    nome: string,
    contaBancaria: TContaBancaria,
    contatos: string[]
}

let contaBancaria: TContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

let correntista: TCorrentista = {
    nome: 'Paulo',
    contaBancaria: contaBancaria,
    contatos: ['23232', '23233']
}