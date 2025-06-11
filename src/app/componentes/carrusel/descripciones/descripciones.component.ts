import { Component, Input } from '@angular/core';
import { Futbolista } from '../../../models/futbolista';

@Component({
  selector: 'app-descripciones',
  standalone: true,
  imports: [],
  templateUrl: './descripciones.component.html',
  styleUrl: './descripciones.component.css'
})
export class DescripcionesComponent {

  @Input() futbolista!: Futbolista;

}
