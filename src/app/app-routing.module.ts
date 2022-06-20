import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './pages/animal/animal.component';
import { AnimalesComponent } from './pages/animales/animales.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { HomeComponent } from './pages/home/home.component';
import { PropietariosComponent } from './pages/propietarios/propietarios.component';
import { VeterinariosComponent } from './pages/veterinarios/veterinarios.component';

const routes: Routes = [
  {path: 'animales', component: AnimalesComponent},
  {path: 'animal/:id', component: AnimalComponent},
  {path: 'home', component: HomeComponent},
  {path: 'propietarios', component: PropietariosComponent},
  {path: 'veterinarios', component: VeterinariosComponent},
  {path: 'historial', component: HistorialComponent},
  {path: 'contacto', component: ContactoComponent},
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
