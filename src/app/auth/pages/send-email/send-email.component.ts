import { AuthService } from 'src/app/auth/auth.service';
import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user.interface';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent {
  public user$: Observable<User> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService) {}

  onSendEmail(): void {
    this.authSvc.sendVerificationEmail();
  }

  ngOnDestroy() {
    this.authSvc.logout();
  }
}
