import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropietarioModel } from '../models/propietario.model';
import { delay } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class PropietariosService {

  private url = 'http://localhost:8080/api/v1'

  constructor( private http: HttpClient ) { }

  crearPropietario( propietario: PropietarioModel ) {
    return this.http.post(`${ this.url}/propietario`, propietario);
  }

  getPropietarios(){
    return this.http.get(`${this.url}/propietarios`).pipe(delay(1000));
  }

  getPropietario(id: number){
    return this.http.get(`${ this.url}/propietario?id=${id}`)
  }

  editarPropietario(propietario: PropietarioModel){
    return this.http.post(`${ this.url}/propietario/edit?id=${propietario.id}`, propietario);
  }

  inactivarPropietario(id: number) {
    return this.http.delete(`${ this.url}/propietario/inhabilitar/${id}`);
  }

}
