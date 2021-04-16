import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JugadasListadoRoutingModule } from './jugadas-listado-routing.module';
import { JugadasListadoComponent } from './jugadas-listado.component';

import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [JugadasListadoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    JugadasListadoRoutingModule
  ]
})
export class JugadasListadoModule { }
