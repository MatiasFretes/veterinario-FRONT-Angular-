import { Component, OnInit } from '@angular/core';
import { AnimalModelResponse } from 'src/app/models/animal.model';
import { AnimalesService } from 'src/app/services/animales.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

  animales: AnimalModelResponse[] = [];
  cargando = false;

  constructor(private animalService: AnimalesService) { }

  ngOnInit(): void {
    this.cargando = true;

    this.animalService.getAnimales().subscribe((resp: any) => {
      this.animales = resp;
      this.cargando = false;
    });
  }

  inactivarAnimal(animal: AnimalModelResponse, i:number) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${animal.nombre}`,
      icon:'question',
      showConfirmButton: true,
      showCancelButton:true 
    }).then(resp => {
      if(resp.value){
        this.animales.splice(i, 1);
        this.animalService.inactivarAnimal(Number(animal.id)).subscribe();
      }
    });
  }
}
