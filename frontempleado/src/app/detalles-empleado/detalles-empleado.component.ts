import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-detalles-empleado',
  templateUrl: './detalles-empleado.component.html',
  styleUrls: ['./detalles-empleado.component.css']
})
export class DetallesEmpleadoComponent implements OnInit {

  id:number;
  empleado:Empleado;

  constructor(private empleadoServicio : EmpleadoService, private route : ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoServicio.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.empleado;
    });
  }

}
