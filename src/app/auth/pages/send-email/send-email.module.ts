import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SendEmailRoutingModule } from './send-email-routing.module';
import { AuthService } from './../../auth.service';
import { SendEmailComponent } from './send-email.component';

@NgModule({
  declarations: [
    SendEmailComponent
   ],
  imports: [
    CommonModule,
    SendEmailRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [
    AuthService
  ],
})
export class SendEmailModule { }
