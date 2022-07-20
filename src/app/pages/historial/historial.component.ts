import { Component, OnInit } from '@angular/core';
import { HistorialModel } from 'src/app/models/historial.model';
import { HistorialesService } from 'src/app/services/historiales.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  historiales: HistorialModel[] = [];

  constructor( private historialesService : HistorialesService ) { }

  ngOnInit(): void {

    this.historialesService.getHistoriales().subscribe((resp: any) => {
      this.historiales = resp;
    });
  }

}
