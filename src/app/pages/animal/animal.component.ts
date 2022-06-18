import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AnimalModel } from 'src/app/models/animal.model';
import { AnimalesService } from 'src/app/services/animales.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  public previsualizacion : string = "";
  public archivos: any = [];
  animal = new AnimalModel();

  constructor( private animalService: AnimalesService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  guardar( form: NgForm){
    console.log(form);
    console.log(this.animal);

    this.animalService.crearAnimal( this.animal)
    .subscribe(resp => {
      console.log(resp);
    });
  }

  capturarFile(event : any): any {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);

    })
    this.archivos.push(archivoCapturado)
    // 
    // console.log(event.target.files);

  }

  extraerBase64 = async ($event: any) => new Promise((resolve) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      //return null;
    }
  })
}
