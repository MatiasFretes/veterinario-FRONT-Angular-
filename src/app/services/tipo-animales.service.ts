import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoAnimalesService {
  private url = environment.baseUrl;
  constructor( private http: HttpClient ) { }

  getTipoAnimales(){
    return this.http.get(`${this.url}/tiposAnimales`);
  }

  getTipoAnimal(id: number){
    return this.http.get(`${this.url}/tipoAnimal/${id}`);
  }

}
