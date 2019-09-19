"use strict";
// Atribuos e métodos estáticos
// Não é necessario instanciar a classe para acessar o metodo estatico
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
