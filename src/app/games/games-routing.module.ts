import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemorizaComponent } from './pages/memoriza/memoriza.component';

const routes: Routes = [
  { path: 'memoriza', component: MemorizaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
