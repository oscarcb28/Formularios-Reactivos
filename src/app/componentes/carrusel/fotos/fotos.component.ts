import { Component, Input } from '@angular/core';
import { Futbolista } from '../../../models/futbolista';
import { DescripcionesComponent } from "../descripciones/descripciones.component";

@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [DescripcionesComponent],
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.css'
})
export class FotosComponent {
  @Input() futbolista: Futbolista | undefined;

  id_futbolista:number = 1;
  futbolistas:Futbolista[] =[];

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.futbolistas[i] = new Futbolista(i+1);
      
    }
  }

  antPj(){
    this.id_futbolista--;
    if (this.id_futbolista <= 0) {
      this.id_futbolista = 5;
    }
  }  

  sigPj(){
    this.id_futbolista++;
    if (this.id_futbolista >= 6) {
      this.id_futbolista = 1;
    }
  }
}
