
// O contrutor é privado para não permitir que a classe seja instanciada
// é retornado a instancia da classe para manter o controller de quatas instancias serao criadas

class Unico {

    private static instance: Unico = new Unico;
    private constructor(){}

    static getInstance(): Unico {
        return Unico.instance
    }

    agora() {
        return new Date
    }
}

console.log(Unico.getInstance().agora);
