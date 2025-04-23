import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

interface Pregunta {
  enunciado: string;
  opciones: string[];
  indiceRespuestaCorrecta: number;
}


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})

export class TestComponent {
  preguntas: Pregunta[] = [
    {
      enunciado: '¿Cuál es la capital de Francia?',
      opciones: ['Madrid', 'París', 'Berlín', 'Londres'],
      indiceRespuestaCorrecta: 1
    },
    {
      enunciado: '¿Cuál es la capital de Argentina?',
      opciones: ['Montevideo', 'Santiago', 'Buenos Aires', 'Rosario'],
      indiceRespuestaCorrecta: 2
    },
    {
      enunciado: '¿Cuál es la capital de China?',
      opciones: ['Beijing', 'Tokio', 'Seúl', 'Shanghái'],
      indiceRespuestaCorrecta: 0
    },
    {
      enunciado: '¿Cuál es la capital de Catar?',
      opciones: ['Dubái', 'Doha', 'Riad', 'Abu Dabi'],
      indiceRespuestaCorrecta: 1
    },
    {
      enunciado: '¿Cuál es la capital de Kenia?',
      opciones: ['Mogadiscio', 'Pretoria', 'Abuya', 'Nairobi'],
      indiceRespuestaCorrecta: 3
    }
  ];

  indicePreguntaActual = 0;
  respuestasCorrectas = 0;
  quizFinalizado = false;

  seleccionarRespuesta(indice: number) {
    const pregunta = this.preguntas[this.indicePreguntaActual];
    if (indice === pregunta.indiceRespuestaCorrecta) {
      this.respuestasCorrectas++;
    }

    this.indicePreguntaActual++;

    if (this.indicePreguntaActual >= this.preguntas.length) {
      this.quizFinalizado = true;
    }
  }
  obtenerPuntuacion(): number {
    return (this.respuestasCorrectas / this.preguntas.length) * 100;
  }
}