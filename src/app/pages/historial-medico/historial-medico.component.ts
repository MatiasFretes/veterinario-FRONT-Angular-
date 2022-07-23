import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalModelResponse } from 'src/app/models/animal.model';
import { HistorialModelRequest, HistorialModelResponse } from 'src/app/models/historial.model';
import { VeterinarioModel } from 'src/app/models/veterinario.model';
import { AnimalesService } from 'src/app/services/animales.service';
import { HistorialesService } from 'src/app/services/historiales.service';
import { VeterinariosService } from 'src/app/services/veterinarios.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-historial-medico',
  templateUrl: './historial-medico.component.html',
  styleUrls: ['./historial-medico.component.css']
})
export class HistorialMedicoComponent implements OnInit {

  historialRequest = new HistorialModelRequest();
  historialResponse = new HistorialModelResponse();
  error: boolean;

  constructor( private historialService : HistorialesService,
    private animalService : AnimalesService,
    private veterinariosService : VeterinariosService,
    private route: ActivatedRoute ) {
    this.error = false;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';

    if(id === 'nuevo') { 
      this.animalService.getAnimales().subscribe((resp: any) => {
        CargarSelectAnimales(resp, 0);
      });
  
      this.veterinariosService.getVeterinarios().subscribe((resp: any) => {
        CargarSelectVeterinarios(resp, 0);
      });
    }

    if( id !== 'nuevo' ) {
        this.historialService.getHistorialMedico(Number(id))
        .subscribe( (resp: any) => {
          this.historialRequest = resp;
          this.historialRequest.id_animal = resp.animal.id;
          this.historialRequest.id_veterinario = resp.veterinario.id;
          this.historialResponse = resp;
          this.historialResponse.id = Number(id);

          var idAnimal : any = this.historialResponse.animal?.id; 
          this.animalService.getAnimales().subscribe((resp: any) => {
            CargarSelectAnimales(resp, idAnimal);
          });
      
          var idVeterinario : any = this.historialResponse.veterinario?.id;
          this.veterinariosService.getVeterinarios().subscribe((resp: any) => {
            CargarSelectVeterinarios(resp, idVeterinario);
          }); 
        });
    }
  }

  guardar( form: NgForm){
    console.log(form);
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

    if ( this.historialRequest.id ) {
      peticion = this.historialService.editarHistorialMedico( this.historialRequest );
    } else {
      peticion = this.historialService.crearHistorialMedico( this.historialRequest );
    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.historialRequest.id,
        text: 'Se actualizó correctamente',
        icon: 'success'
      });
    });
  }
}

function CargarSelectAnimales(variedades: AnimalModelResponse[] = [], idTipo:number){
  const select = document.querySelector('#animalSelect');
  variedades.forEach((variedad:any) => {        
      let opt = document.createElement('option');
      opt.value = variedad.id; 
      opt.text = variedad.nombre;

      if(variedad.id === idTipo)
        opt.selected = true;

      if(select != null)
        select.appendChild(opt)
  });
}

function CargarSelectVeterinarios(variedades: VeterinarioModel[] = [], idProp:number){
  const select = document.querySelector('#veterinarioSelect');
  variedades.forEach((variedad:any) => {        
      let opt = document.createElement('option');
      opt.value = variedad.id; 
      opt.text = variedad.matricula + " - " + variedad.apellido + ", " + variedad.nombre;
      
      if(variedad.id === idProp)
        opt.selected = true;

      if(select != null)
        select.appendChild(opt)
  });
}
