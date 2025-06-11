import { Component, ViewEncapsulation } from '@angular/core';
import { Punto } from '../../models/puntos';

@Component({
  selector: 'app-coordenadas',
  standalone: true,
  imports: [],
  templateUrl: './coordenadas.component.html',
  styleUrl: './coordenadas.component.css'
})
export class CoordenadasComponent {

  @Component({    
    encapsulation: ViewEncapsulation.None,  
  })

  indiceA : number = 0;
  indiceB : number = 0;
  indiceC : number = 0;
  indiceD : number = 0;

  sumarA(): void {
    this.indiceA++;
    this.indiceC++;
  }

  sumarC(): void {
    this.indiceC++;
    this.indiceB++;
    this.indiceD++;
    this.indiceA++;
  }

  sumarByD(): void {
    this.indiceC++;
    this.indiceB++;
    this.indiceD++;
  }
}
