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
import { HistorialComponent } from './pages/historial/historial.component';
import { ContactoComponent } from './pages/contacto/contacto.component'; 

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
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
