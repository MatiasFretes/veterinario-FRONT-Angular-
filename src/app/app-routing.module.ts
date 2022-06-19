import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './pages/animal/animal.component';
import { AnimalesComponent } from './pages/animales/animales.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'animales', component: AnimalesComponent},
  {path: 'animal/:id', component: AnimalComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', pathMatch:'full', redirectTo:'home'}
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
