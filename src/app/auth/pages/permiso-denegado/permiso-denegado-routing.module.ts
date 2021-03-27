import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermisoDenegadoComponent } from './permiso-denegado.component';

const routes: Routes = [
  { path: '', component: PermisoDenegadoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PermisoDenegadoRoutingModule { }
