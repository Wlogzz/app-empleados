package com.altunodev.backempleados.controlador;

import com.altunodev.backempleados.excepciones.ResourceNotFoundException;
import com.altunodev.backempleados.modelo.Empleado;
import com.altunodev.backempleados.repositorio.EmpleadoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200/")

public class EmpleadoControlador {

    @Autowired
    private EmpleadoRepositorio repositorio;

    @GetMapping("/empleados")
    public List<Empleado> listarEmpleados() {

        return repositorio.findAll();
    }


    @GetMapping("/empleados/{id}")
    public ResponseEntity<Empleado> listarEmpleadoId(@PathVariable Long id) {

        Empleado empleado = repositorio.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        ("No existe le empleado con ese ID: "+ id)));

        return ResponseEntity.ok(empleado);
    }


    @PostMapping("/empleados")
    public Empleado guardarEmpleado(@RequestBody Empleado empleado) {

        return repositorio.save(empleado);
    }


    @PutMapping("/empleados/{id}")
    public ResponseEntity<Empleado> actualizarEmpleado(@PathVariable Long id, @RequestBody Empleado detalleEmpleado){
        Empleado empleado = repositorio.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe le empleado con ese ID: "+ id));

        empleado.setNombre(detalleEmpleado.getNombre());
        empleado.setApellido(detalleEmpleado.getApellido());
        empleado.setEmail(detalleEmpleado.getEmail());

        Empleado empleadoActualizado = repositorio.save(empleado);

        return ResponseEntity.ok(empleadoActualizado);
    }


    @DeleteMapping("/empleados/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarEmpleado(@PathVariable Long id) {

        Empleado empleado = repositorio.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe le empleado con ese ID: "+ id));

        repositorio.delete(empleado);
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("ID 0"+id+" eliminado satisfactoriamente", Boolean.TRUE);

        return ResponseEntity.ok(respuesta);
    }


}
