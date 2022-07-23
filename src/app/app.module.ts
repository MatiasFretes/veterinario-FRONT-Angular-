import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalComponent } from './pages/animal/animal.component';
import { AnimalesComponent } from './pages/animales/animales.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PropietariosComponent } from './pages/propietarios/propietarios.component';
import { VeterinariosComponent } from './pages/veterinarios/veterinarios.component';
import { HistorialComponent } from './pages/historiales/historial.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PropietarioComponent } from './pages/propietario/propietario.component';
import { VeterinarioComponent } from './pages/veterinario/veterinario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HistorialMedicoComponent } from './pages/historial-medico/historial-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    AnimalesComponent,
    NavbarComponent,
    HomeComponent,
    PropietariosComponent,
    VeterinariosComponent,
    HistorialComponent,
    ContactoComponent,
    PropietarioComponent,
    VeterinarioComponent,
    HistorialMedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
