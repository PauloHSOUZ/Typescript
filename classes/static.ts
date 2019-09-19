// Atribuos e métodos estáticos
// Não é necessario instanciar a classe para acessar o metodo estatico
class Matematica {

    static PI: number = 3.1416;

    static areaCirc(raio: number): number {
        return this.PI * raio * raio;
    }
}