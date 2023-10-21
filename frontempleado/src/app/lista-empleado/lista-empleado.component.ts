import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent{
  
  empleados:Empleado[];

  constructor(private empleadoServicio:EmpleadoService, private router : Router) {}

  ngOnInit():void { 
    this.obtenerEmpleados();
  }

  private obtenerEmpleados(){
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    })
  }

  modificarEmpleado(id : number){
    this.router.navigate(['modificar-empleado',id]);
  }

  eliminarEmpleado(id : number){
    this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
      this.obtenerEmpleados();
    });
  }

  detalleEmpleado(id: number){
    this.router.navigate(['detalle-empleado',id]);
  }




}
