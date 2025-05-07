import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';
import { MatButtonModule } from '@angular/material/button';
import { Pregunta } from '../../models/pregunta';

@Component({
  selector: 'app-test-con-json',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatButtonModule],
  templateUrl: './test-con-json.component.html',
  styleUrl: './test-con-json.component.css'
})
export class TestConJsonComponent implements OnInit{
  preguntas: Pregunta[] = [];
  indicePreguntaActual = 0;
  respuestasCorrectas = 0;
  quizFinalizado = false;
  ultimoResultado: number | null = null;

  constructor(private preguntasService: PreguntasService) {}

  ngOnInit(): void {
    this.preguntasService.cargarPreguntas().subscribe(data => {
      this.preguntas = data;
      this.ultimoResultado = this.preguntasService.obtenerResultado();
    });
  }

  seleccionarRespuesta(indice: number): void {
    const pregunta = this.preguntas[this.indicePreguntaActual];
    if (indice === pregunta.indiceRespuestaCorrecta) {
      this.respuestasCorrectas++;
    }

    this.indicePreguntaActual++;
    if (this.indicePreguntaActual >= this.preguntas.length) {
      this.quizFinalizado = true;
    }
  }

  finalizarQuiz(): void {
    this.quizFinalizado = true;
    const puntaje = this.obtenerPuntuacion();
    this.preguntasService.guardarResultado(puntaje);
  }

  obtenerPuntuacion(): number {
    return (this.respuestasCorrectas / this.preguntas.length) * 100;
  }
}
