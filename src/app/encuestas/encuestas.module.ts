import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncuestasRoutingModule } from './encuestas-routing.module';
import { AltaComponent } from './pages/alta/alta.component';
import { ListadoComponent } from './pages/listado/listado.component';


@NgModule({
  declarations: [AltaComponent, ListadoComponent],
  imports: [
    CommonModule,
    EncuestasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EncuestasModule { }
