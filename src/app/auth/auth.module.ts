import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './auth.service';

import { LoginModule } from './pages/login/login.module';
import { ForgotPasswordModule } from './pages/forgot-password/forgot-password.module';
import { RegisterModule } from './pages/register/register.module';
import { SendEmailModule } from './pages/send-email/send-email.module';
import { UserPassIncorrectoModule } from './pages/user-pass-incorrecto/user-pass-incorrecto.module';
import { PermisoDenegadoModule } from './pages/permiso-denegado/permiso-denegado.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    ForgotPasswordModule,
    RegisterModule,
    SendEmailModule,
    UserPassIncorrectoModule,
    PermisoDenegadoModule
  ],
  exports: [
  ],
  providers: [
    AuthService
  ],
})
export class AuthModule { }
