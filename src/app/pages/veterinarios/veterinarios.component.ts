import { Component, OnInit } from '@angular/core';
import { VeterinarioModel } from 'src/app/models/veterinario.model';
import { VeterinariosService } from 'src/app/services/veterinarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-veterinarios',
  templateUrl: './veterinarios.component.html',
  styleUrls: ['./veterinarios.component.css']
})
export class VeterinariosComponent implements OnInit {

  veterinarios: VeterinarioModel[] = [];
  cargando = false;
  
  constructor(private veterinariosService : VeterinariosService) { }

  ngOnInit(): void {
    this.cargando = true;

    this.veterinariosService.getVeterinarios().subscribe((resp: any) => {
      this.veterinarios = resp;
      this.cargando = false;
    });
  }

  inactivarVeterinario(veterinario: VeterinarioModel, i:number) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${veterinario.nombre} ${veterinario.apellido}`,
      icon:'question',
      showConfirmButton: true,
      showCancelButton:true 
    }).then(resp => {
      if(resp.value){
        this.veterinarios.splice(i, 1);
        this.veterinariosService.inactivarVeterinario(Number(veterinario.id)).subscribe();
      }
    });

  }
}
