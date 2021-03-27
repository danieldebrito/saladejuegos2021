import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/models/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public showErrors = false;

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(90)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern("[a-zA-Z ]{2,41}")]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern("[a-zA-Z ]{2,41}")]),
    dni: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(8), Validators.pattern("^[0-9]*$")]),
    role: new FormControl('', [Validators.required]),
  });


  constructor(private authSvc: AuthService, private router: Router) { }



  async onRegister() {

    if (this.registerForm.invalid) {
      this.showErrors = true;
    } else {
      const { email, password, nombre, apellido, dni, role } = this.registerForm.value;
      try {
        const user = await this.authSvc.register( email, password, nombre, apellido, dni, role );
        if (user) {
          this.checkUserIsVerified(user);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  private checkUserIsVerified(user: User) {
    if (user && user.emailVerified) {
      this.router.navigate(['/home']);
    } else if (user) {
      this.router.navigate(['/verification-email']);
    } else {
      this.router.navigate(['/register']);
    }
  }

  public resetError(){
      this.showErrors = false;
  }
}
