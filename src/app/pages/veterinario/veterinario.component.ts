import { Component, OnInit } from '@angular/core';
import { VeterinarioModel } from 'src/app/models/veterinario.model';
import { VeterinariosService } from 'src/app/services/veterinarios.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent implements OnInit {

  veterinario = new VeterinarioModel();
  error: boolean;

  constructor(private veterinariosService : VeterinariosService,  private route: ActivatedRoute) { 
    this.error = false;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';

    if( id !== 'nuevo' ) {
        this.veterinariosService.getVeterinario(Number(id))
        .subscribe( (resp: any) => {
          this.veterinario = resp;
          this.veterinario.id = Number(id);
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

    if ( this.veterinario.id ) {
      peticion = this.veterinariosService.editarVeterinario( this.veterinario );
    } else {
      peticion = this.veterinariosService.crearVeterinario( this.veterinario );
    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.veterinario.nombre + ' ' + this.veterinario.apellido,
        text: 'Se actualizó correctamente',
        icon: 'success'
      });
    });
  }
}
