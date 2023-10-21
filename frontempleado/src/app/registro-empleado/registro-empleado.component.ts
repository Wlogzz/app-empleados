import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

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
      this.retornarListaEmpleado();
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
