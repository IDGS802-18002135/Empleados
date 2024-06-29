import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { EmpleadoService } from './empleado.service';
import { EmpleadoListaComponent } from './empleado-lista/empleado-lista.component';
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from './cabecera/cabecera.component';
@NgModule({
  declarations: [
    AgregarEmpleadoComponent,
    
    EmpleadoListaComponent,CabeceraComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AgregarEmpleadoComponent,
    EmpleadoListaComponent,CabeceraComponent
  ],
  providers:[
    EmpleadoService
  ]
})
export class EmpleadoModule { }
