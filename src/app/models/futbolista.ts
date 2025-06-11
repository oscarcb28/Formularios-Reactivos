export class Futbolista {
    imagen: string = "";
    nombre: string = "";

    constructor(id: number) {
        if (id == 1) {
            this.imagen = "assets/images/cubarsi.png";
            this.nombre = "Cubarsí";
        }

        if (id == 2) {
            this.imagen = "assets/images/lamine.png";
            this.nombre = "Lamine";
        }

        if (id == 3) {
            this.imagen = "assets/images/lewan.png";
            this.nombre = "Lewandowski";
        }

        if (id == 4) {
            this.imagen = "assets/images/pedri.png";
            this.nombre = "Pedri";
        }

        if (id == 5) {
            this.imagen = "assets/images/raphinha.png";
            this.nombre = "Raphinha";
        }
    }
}
