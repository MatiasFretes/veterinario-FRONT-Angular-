import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AnimalModelRequest, AnimalModelResponse } from 'src/app/models/animal.model';
import { TipoAnimalModel } from 'src/app/models/tipoAnimal.model';
import { AnimalesService } from 'src/app/services/animales.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { TipoAnimalesService } from 'src/app/services/tipo-animales.service';
import { PropietariosService } from 'src/app/services/propietarios.service';
import { PropietarioModel } from 'src/app/models/propietario.model';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  animalRequest = new AnimalModelRequest();
  animalResponse = new AnimalModelResponse();
  error: boolean;

  constructor(private animalService : AnimalesService, private route: ActivatedRoute,
    private tipoAnimalesService : TipoAnimalesService,
    private propietarioService : PropietariosService) { 
    this.error = false;
  }

  ngOnInit(): void { 


    const id = this.route.snapshot.paramMap.get('id') || '';

    if(id === 'nuevo') { 
      this.tipoAnimalesService.getTipoAnimales().subscribe((resp: any) => {
        CargarSelectTipoAnimales(resp, 0);
      });
  
      this.propietarioService.getPropietarios().subscribe((resp: any) => {
        CargarSelectPropietarios(resp, 0);
      });
    }

    if( id !== 'nuevo' ) {
        this.animalService.getAnimal(Number(id))
        .subscribe( (resp: any) => {
          
          this.animalRequest = resp;
          this.animalRequest.id_tipoAnimal = resp.tipo.id;
          this.animalRequest.id_propietario = resp.propietario.id;
          this.animalResponse = resp;
          this.animalResponse.id = Number(id);

          var idTipoAnimal : any = this.animalResponse.tipo?.id; 
          this.tipoAnimalesService.getTipoAnimales().subscribe((resp: any) => {
            CargarSelectTipoAnimales(resp, idTipoAnimal);
          });
      
          var idPropietario : any = this.animalResponse.propietario?.id;
          this.propietarioService.getPropietarios().subscribe((resp: any) => {
            CargarSelectPropietarios(resp, idPropietario);
          }); 

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

    if ( this.animalRequest.id ) {
      console.log(this.animalRequest);
      peticion = this.animalService.editarAnimal( this.animalRequest );
    } else {
      peticion = this.animalService.crearAnimal( this.animalRequest );
    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.animalRequest.nombre,
        text: 'Se actualizó correctamente',
        icon: 'success'
      });
    });
  }
}

function CargarSelectTipoAnimales(variedades: TipoAnimalModel[] = [], idTipo:number){
  const select = document.querySelector('#tipoDeAnimalesSelect');
  variedades.forEach((variedad:any) => {        
      let opt = document.createElement('option');
      opt.value = variedad.id; 
      opt.text = variedad.descripcion;

      if(variedad.id === idTipo)
        opt.selected = true;

      if(select != null)
        select.appendChild(opt)
  });
}

function CargarSelectPropietarios(variedades: PropietarioModel[] = [], idProp:number){
  const select = document.querySelector('#propietariosSelect');
  variedades.forEach((variedad:any) => {        
      let opt = document.createElement('option');
      opt.value = variedad.id; 
      opt.text = variedad.documento + " - " + variedad.apellido + ", " + variedad.nombre;
      
      if(variedad.id === idProp)
        opt.selected = true;

      if(select != null)
        select.appendChild(opt)
  });
}