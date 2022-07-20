import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistorialesService {

  private url = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getHistoriales(){
    return this.http.get(`${this.url}/historialesMedicos`);
  }
}
