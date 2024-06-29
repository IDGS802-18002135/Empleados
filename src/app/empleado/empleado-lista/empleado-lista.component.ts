import { Component } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { IEmpleado } from '../interfaces/empleados';

@Component({
  selector: 'app-empleado-lista',
  
  templateUrl: './empleado-lista.component.html',
  styleUrl: './empleado-lista.component.css'
})
export class EmpleadoListaComponent {
  constructor (private empleadosService: EmpleadoService){}
  eliminarEmpleado(numero_empleado:number){
    this.empleadosService.eliminarEmpleado(numero_empleado);
    this.empleadosService.empleados;    

  }

  get empleados():IEmpleado[]{
    return this.empleadosService.empleados;
  }
}
