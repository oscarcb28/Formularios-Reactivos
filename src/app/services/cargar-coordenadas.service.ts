import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargarCoordenadasService {

  private jsonURL = 'assets/puntosCoord.json';

  constructor(private http: HttpClient) {}

  getCiudades(): Observable<any> {
    return this.http.get<any>(this.jsonURL);
  }
}
