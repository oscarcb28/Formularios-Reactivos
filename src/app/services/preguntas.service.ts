import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor(private http: HttpClient) { }

  cargarPreguntas(): Observable<any> {
    return this.http.get<any>('assets/preguntas.json')
  }

  guardarResultado(puntaje: number): void {
    localStorage.setItem('resultado', puntaje.toString());
  }

  obtenerResultado(): number | null {
    const valor = localStorage.getItem('resultado');
    return valor ? parseFloat(valor) : null;
  }
}
