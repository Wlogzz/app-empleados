import { EmpleadoService } from './../empleado.service';
import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent {

  empleados: Empleado[];

  id:number;
  empleado:Empleado = new Empleado();
  constructor(private EmpleadoService:EmpleadoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.EmpleadoService.obtenerEmpleadoPorId(this.id).subscribe(dato =>{
      this.empleado = dato;
    },error => console.log(error));
  }
  
  onSubmit(){
    this.EmpleadoService.actualizarEmpleado(this.id,this.empleado).subscribe(dato => {
      Swal.fire({
        title: 'Empleado actualizado!',
        text: `El empleado ${this.empleado.nombre} ha sido actualizado con exito`,
        icon: 'success',
        confirmButtonText: 'Ok',
        didClose: () => {
          this.listaEmpleados();
        },
      })
    },error => console.log(error));
  }
  
  listaEmpleados(){
    this.router.navigate(['/empleados']);
  }
}
