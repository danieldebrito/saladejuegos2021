import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public error = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private authSvc: AuthService, private router: Router) { }

  async onGoogleLogin(): Promise<void> {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        this.checkUserIsVerified(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public cargarLogin(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('danieldebrito@outlook.com'),
      password: new FormControl('123456'),
    });
  }

  async onLogin(): Promise<void> {
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authSvc.login(email, password);
      if (user) {
        this.checkUserIsVerified(user);
      }
      else {
        this.error = true;
        // this.router.navigate(['/pass-email-incorrecto']);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private checkUserIsVerified(user: User): void {
    if (user && user.emailVerified) {
      this.router.navigate(['/home']);
    } else if (user) {
      this.router.navigate(['/verification-email']);
    } else {
      this.router.navigate(['/registro']);
    }
  }

  public errorFalse(): void {
    this.error = false;
  }
}
