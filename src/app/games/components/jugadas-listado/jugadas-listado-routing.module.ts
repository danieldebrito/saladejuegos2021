import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugadasListadoComponent } from './jugadas-listado.component';

const routes: Routes = [
  {
    path: '',
    component: JugadasListadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JugadasListadoRoutingModule { }
