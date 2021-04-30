import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './pages/alta/alta.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  { path: 'alta', component: AltaComponent },
  { path: 'listado', component: ListadoComponent },
  // { path: '**', component: ListadoComponent }
  { path: '', redirectTo: 'listado', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncuestasRoutingModule { }
