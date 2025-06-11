export class Punto {
    letra!: string;
    indice!: number;
    vecinos!: string[];

    constructor(letra: string, vecinos: string[] = []) {
        this.letra = letra;
        this.indice = 0;
        this.vecinos = vecinos;
    }

    sumar(): void{
        this.indice++;
        this.vecinos
    }

}