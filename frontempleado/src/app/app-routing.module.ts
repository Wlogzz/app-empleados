import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';
import { RegistroEmpleadoComponent } from './registro-empleado/registro-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { DetallesEmpleadoComponent } from './detalles-empleado/detalles-empleado.component';

const routes: Routes = [
  {path: 'empleados',component:ListaEmpleadoComponent},
  {path: '',redirectTo:'empleados',pathMatch:'full'},
  {path: 'registro-empleado',component:RegistroEmpleadoComponent},
  {path: 'modificar-empleado/:id',component:ActualizarEmpleadoComponent},
  {path: 'detalle-empleado/:id',component:DetallesEmpleadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
