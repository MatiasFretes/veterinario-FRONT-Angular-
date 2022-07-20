import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AnimalModelRequest } from '../models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  private url = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  crearAnimal( animal : AnimalModelRequest){
    return this.http.post(`${this.url}/animal`, animal);
  }

  getAnimales(){
    return this.http.get(`${this.url}/animales`);
  }

  getAnimal(id: number){
    return this.http.get(`${this.url}/animal/${id}`);
  }

  editarAnimal(animal: AnimalModelRequest){
    return this.http.post(`${ this.url}/animal/edit?id=${animal.id}`, animal);
  }

  inactivarAnimal(id: number) {
    return this.http.delete(`${ this.url}/animal/inhabilitar/${id}`);
  }
}
