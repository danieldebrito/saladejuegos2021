import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPassIncorrectoRoutingModule } from './user-pass-incorrecto-routing.module';
import { PassUserIncorrectoComponent } from './pass-user-incorrecto.component';


@NgModule({
  declarations: [PassUserIncorrectoComponent],
  imports: [
    CommonModule,
    UserPassIncorrectoRoutingModule
  ]
})
export class UserPassIncorrectoModule { }
