import { Component, EventEmitter, Output } from '@angular/core';
import { IEmpleado } from '../interfaces/empleados';
import { EmpleadoService } from '../empleado.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-agregar-empleado',
  
  
  templateUrl: './agregar-empleado.component.html',
  styleUrl: './agregar-empleado.component.css'
})
export class AgregarEmpleadoComponent {
  nuevo: IEmpleado={
    nombre:"",
    correo:"",
    FechaNac:"",
    numero_empleado:0,
    sexo:"",
    telefono:""
  }
  //definimos nuestra variabble de salida
  @Output()
  onNuevoEmpleado: EventEmitter<IEmpleado>=new EventEmitter();

  constructor (private empleadosService: EmpleadoService){}
  agregar(){
    //validaciones
        if(this.nuevo.nombre.trim().length===0)
           return;
       
        if(this.nuevo.numero_empleado===0)
           return;
       
       //emitir el nuevo evento para notificar el nuevo cliente
       // this.onNuevoCliente.emit(this.nuevo);
    
        //agregamos el nuevo cliente a traves del servicio
    
        this.empleadosService.agregarEmpleado(this.nuevo);
    
        this. nuevo={
          nombre:"",
          correo:"",
          FechaNac:"",
          numero_empleado:0,
          sexo:"",
          telefono:""
        }
       
       }
    
}
