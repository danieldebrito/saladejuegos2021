import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminGuard } from './admin.guard';
import { UsuarioGuard } from './usuario.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AdminGuard,
    UsuarioGuard
  ],
})
export class GuardsModule { }
