import { Component, OnInit } from '@angular/core';
import { HistorialModelResponse } from 'src/app/models/historial.model';
import { HistorialesService } from 'src/app/services/historiales.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  historiales: HistorialModelResponse[] = [];
  cargando = false;

  constructor( private historialesService : HistorialesService ) { }

  ngOnInit(): void {
    this.cargando = true;

    this.historialesService.getHistoriales().subscribe((resp: any) => {
      this.historiales = resp;
      this.cargando = false;
    });
  }

  inactivarHistorial(historial : HistorialModelResponse, i:number) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar el historial ${historial.id}`,
      icon:'question',
      showConfirmButton: true,
      showCancelButton:true 
    }).then(resp => {
      if(resp.value){
        this.historiales.splice(i, 1);
        this.historialesService.inactivarHistorialMedico(Number(historial.id)).subscribe();
      }
    });
  }
}
