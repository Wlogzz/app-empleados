import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent {

  empleados: Empleado[];

  constructor(private empleadoServicio: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  private obtenerEmpleados() {
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    })
  }

  modificarEmpleado(id: number) {
    this.router.navigate(['modificar-empleado', id]);
  }

  eliminarEmpleado(id: number) {
    this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
      Swal.fire({
        title: 'Está seguro?',
        text: `Desea eliminar el registro del empleado seleccionado`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Eliminado!',
            text:'El registro se ha eliminado satisfactoriamente.',
            icon:'success',
            didClose: () => {
              this.obtenerEmpleados();
            }
        })
        }
      })
    });
  }

  detalleEmpleado(id: number) {
    this.router.navigate(['detalle-empleado', id]);
  }




}
