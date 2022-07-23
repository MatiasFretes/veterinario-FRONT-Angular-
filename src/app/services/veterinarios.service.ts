import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators'; 
import { VeterinarioModel } from '../models/veterinario.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VeterinariosService {

  private url = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  crearVeterinario( veterinario: VeterinarioModel ) {
    return this.http.post(`${ this.url}/veterinario`, veterinario);
  }

  getVeterinarios(){
    return this.http.get(`${this.url}/veterinarios`).pipe(delay(500));
  }

  getVeterinario(id: number){
    return this.http.get(`${ this.url}/veterinario?id=${id}`)
  }

  editarVeterinario(veterinario: VeterinarioModel){
    return this.http.post(`${ this.url}/veterinario/edit?id=${veterinario.id}`, veterinario);
  }

  inactivarVeterinario(id: number) {
    return this.http.delete(`${ this.url}/veterinario/inhabilitar/${id}`);
  }
}
