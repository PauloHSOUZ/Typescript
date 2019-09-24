namespace Geometria {
    export namespace Area {
        const PI = 3.24;

        export function circunferencia(raio: number): number {
            return PI * Math.pow(raio, 2);
        }
    }
}