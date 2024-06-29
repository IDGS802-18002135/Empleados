import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private _empleados:IEmpleado[]=[];

  //Creamos un metodo get para tener acceso a la lista de empleados
  get empleados():IEmpleado[]{
      return this._empleados
  }
  //metodo agregar empleado para agregar un nuevo empleado a la lista

  agregarEmpleado(empleado:IEmpleado){
    this._empleados.push(empleado)

    //Guardamos la lista de empleados en el localStorage
    localStorage.setItem('empleados',JSON.stringify(this._empleados))

  }
  eliminarEmpleado(numero_empleado:number){
    this._empleados = this._empleados.filter(empleado => empleado.numero_empleado !== numero_empleado);

  }

  constructor() { 
    //Recuperamos la lista del localstorage
    this._empleados=JSON.parse(localStorage.getItem('empleados')!)||[]
  }
}
