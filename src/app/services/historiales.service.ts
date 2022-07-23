import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HistorialModelRequest } from '../models/historial.model';

@Injectable({
  providedIn: 'root'
})
export class HistorialesService {

  private url = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  crearHistorialMedico( historiaMedica : HistorialModelRequest){
    return this.http.post(`${this.url}/historialMedico`, historiaMedica);
  }

  getHistoriales(){
    return this.http.get(`${this.url}/historialesMedicos`);
  }

  getHistorialMedico(id: number){
    return this.http.get(`${this.url}/historialMedico/${id}`);
  }

  editarHistorialMedico(historiaMedica: HistorialModelRequest){
    return this.http.post(`${ this.url}/historialMedico/edit?id=${historiaMedica.id}`, historiaMedica);
  }

  inactivarHistorialMedico(id: number) {
    return this.http.delete(`${ this.url}/historialMedico/inhabilitar/${id}`);
  }
}
