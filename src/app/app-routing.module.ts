import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './pages/animal/animal.component';
import { AnimalesComponent } from './pages/animales/animales.component';

const routes: Routes = [
  {path: 'animales', component: AnimalesComponent},
  {path: 'animal/:id', component: AnimalComponent},
  {path: '**', pathMatch:'full', redirectTo:'animales'}
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
