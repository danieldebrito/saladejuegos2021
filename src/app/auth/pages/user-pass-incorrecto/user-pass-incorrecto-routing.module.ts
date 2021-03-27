import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassUserIncorrectoComponent } from './pass-user-incorrecto.component';

const routes: Routes = [
  { path: '', component: PassUserIncorrectoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPassIncorrectoRoutingModule { }
