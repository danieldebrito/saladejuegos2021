import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { JugadasRoutingModule } from './jugadas-routing.module';
import { JugadasComponent } from './jugadas.component';


@NgModule({
  declarations: [JugadasComponent],
  imports: [
    CommonModule,
    JugadasRoutingModule,
    MaterialModule
  ],
  exports: [
    JugadasComponent
  ]
})
export class JugadasModule { }
