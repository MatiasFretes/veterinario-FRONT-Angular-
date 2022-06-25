import { Component, OnInit } from '@angular/core';
import { PropietarioModel } from 'src/app/models/propietario.model';
import { NgForm } from '@angular/forms';
import { PropietariosService } from 'src/app/services/propietarios.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.css']
})
export class PropietarioComponent implements OnInit {

  propietario = new PropietarioModel();
  error: boolean;

  constructor(private propietarioService : PropietariosService, private route: ActivatedRoute) { 
    this.error = false;
  }

  ngOnInit(): void { 
    const id = this.route.snapshot.paramMap.get('id') || '';

    if( id !== 'nuevo' ) {
        this.propietarioService.getPropietario(Number(id))
        .subscribe( (resp: any) => {
          this.propietario = resp;
          this.propietario.id = Number(id);
        });
    }
  }

  guardar( form: NgForm){

    if(form.invalid){
      Object.values(form.controls).forEach(control => {
        control.markAllAsTouched();
      })
      return;
    }
    Swal.fire({
      title: 'Espere',
      text:'Guardando información',
      icon: 'info',
      allowOutsideClick:false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if ( this.propietario.id ) {
      peticion = this.propietarioService.editarPropietario( this.propietario );
    } else {
      peticion = this.propietarioService.crearPropietario( this.propietario );
    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.propietario.nombre + ' ' + this.propietario.apellido,
        text: 'Se actualizó correctamente',
        icon: 'success'
      });
    });
  }
}
