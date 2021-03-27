import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermisoDenegadoRoutingModule } from './permiso-denegado-routing.module';
import { PermisoDenegadoComponent } from './permiso-denegado.component';

@NgModule({
  declarations: [
    PermisoDenegadoComponent
   ],
  imports: [
    CommonModule,
    PermisoDenegadoRoutingModule,
  ],
  exports: [
    PermisoDenegadoComponent
  ],
})
export class PermisoDenegadoModule { }
