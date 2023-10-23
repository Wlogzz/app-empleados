import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.component.html',
  styleUrls: ['./registro-empleado.component.css']
})
export class RegistroEmpleadoComponent {

  empleado : Empleado = new Empleado();

  constructor(private empleadoServicio : EmpleadoService, private router : Router){}
  
  ngOnInit(): void{  }

  
  guardarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato => {
      // console.log(dato);
      Swal.fire({
        title: 'Empleado registrado!',
        text: `El empleado ${this.empleado.nombre} ${this.empleado.apellido} ha sido agregado con exito`,
        icon: 'success',
        confirmButtonText: 'Ok',
        didClose: () => {
          this.retornarListaEmpleado();
        }
      })
    }, error => console.log(error));

  }

  onSubmit(){
    // console.log(this.empleado);
    this.guardarEmpleado();
  }

  retornarListaEmpleado(){
    this.router.navigate(['/empleados']);
  }


}
