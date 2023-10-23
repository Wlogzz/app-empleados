import { Empleado } from './../empleado';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-detalles-empleado',
  templateUrl: './detalles-empleado.component.html',
  styleUrls: ['./detalles-empleado.component.css']
})
export class DetallesEmpleadoComponent implements OnInit {

  id: number;
  empleado: Empleado;

  constructor(private empleadoServicio : EmpleadoService, private route : ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoServicio.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.empleado = dato;
      Swal.fire({
        title: 'Perfecto!',
        text: `Detalles del empleado ${this.empleado.nombre}  ${this.empleado.apellido}`,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    });
  }

}