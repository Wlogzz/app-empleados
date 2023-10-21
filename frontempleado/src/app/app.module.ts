import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';
import { HeaderComponent } from './header/header.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroEmpleadoComponent } from './registro-empleado/registro-empleado.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { DetallesEmpleadoComponent } from './detalles-empleado/detalles-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadoComponent,
    HeaderComponent,
    DarkModeComponent,
    RegistroEmpleadoComponent,
    ActualizarEmpleadoComponent,
    DetallesEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
