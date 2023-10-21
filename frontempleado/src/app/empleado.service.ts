import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  // Guardar link de dirección API el cual se obtiene el listado de empleados
  private baseURL = "http://localhost:9090/api/v1/empleados";

  constructor(private httpClient: HttpClient) { }

  // Metodo que obtiene la lista de empleados
  obtenerListaDeEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }

  // Método que registra los datos del fomulario
  registrarEmpleado(empleado: Empleado): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, empleado);
  }

  // Método para obtener datos del empleado por ID
  obtenerEmpleadoPorId(id: number): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseURL}/${id}`);
  }

  // Método para modificar datos del empleado por id
  actualizarEmpleado(id : number, empleado : Empleado) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, empleado);
  }

  // Método para eliminar datos del empleado
  eliminarEmpleado(id : number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
