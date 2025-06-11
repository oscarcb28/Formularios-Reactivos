import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from "./componentes/register/register.component";
import { TestComponent } from './componentes/test/test.component';
import { SemaforoComponent } from "./componentes/semaforo/semaforo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SemaforoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Formularios-Reactivos';
}
