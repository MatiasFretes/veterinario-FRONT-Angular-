import { Component, OnInit } from '@angular/core';
import { PropietarioModel } from 'src/app/models/propietario.model';
import { PropietariosService } from 'src/app/services/propietarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styleUrls: ['./propietarios.component.css']
})
export class PropietariosComponent implements OnInit {

  propietarios: PropietarioModel[] = [];
  cargando = false;

  constructor( private propietarioService : PropietariosService) { }

  ngOnInit(): void {
    this.cargando = true;

    this.propietarioService.getPropietarios().subscribe((resp: any) => {
      this.propietarios = resp;
      this.cargando = false;
    });

  }

  inactivarPropietario(propietario: PropietarioModel, i:number) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${propietario.nombre} ${propietario.apellido}`,
      icon:'question',
      showConfirmButton: true,
      showCancelButton:true 
    }).then(resp => {
      if(resp.value){
        this.propietarios.splice(i, 1);
        this.propietarioService.inactivarPropietario(Number(propietario.id)).subscribe();
      }
    });

  }


}
