import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimalModel } from '../models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  private url = 'http://localhost:8080/api/v1'

  constructor( private http: HttpClient ) { }

  crearAnimal( animal : AnimalModel){
    return this.http.post(`${this.url}/animal?imagen=${animal.imagen}`, animal);
  }
}
