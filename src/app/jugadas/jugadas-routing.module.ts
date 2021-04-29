import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadasComponent } from './jugadas.component';

const routes: Routes = [
  { path: '', component: JugadasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JugadasRoutingModule { }
