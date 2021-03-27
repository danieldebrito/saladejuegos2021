import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminGuard } from './admin.guard';
import { PacienteGuard } from './alumno.guard';
import { ProfecionalGuard } from './profesor.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AdminGuard,
    PacienteGuard,
    ProfecionalGuard,
  ],
})
export class GuardsModule { }
