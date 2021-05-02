import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncuestasRoutingModule } from './encuestas-routing.module';
import { AltaComponent } from './pages/alta/alta.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { MaterialModule } from '../material.module';
import { DetalleComponent } from './components/detalle/detalle.component';


@NgModule({
  declarations: [AltaComponent, ListadoComponent, TablaComponent, DetalleComponent],
  imports: [
    CommonModule,
    EncuestasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class EncuestasModule { }
