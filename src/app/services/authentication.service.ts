import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Utilities } from '../classes/utilities';
import { AuthenticationCredentials } from '../models/authentication-credentials.interface';
import {
  GoogleLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {}

  login(credentials: Partial<AuthenticationCredentials>) {
    if (
      this.validateEmail(credentials.email) &&
      credentials.password === 'P@ssw0rd123'
    ) {
      sessionStorage.setItem(
        'authentication',
        JSON.stringify({ authenticated: true })
      );
      sessionStorage.setItem('email', credentials.email!);
      this.router.navigate(['portal']);
    } else {
      Utilities.displayToast('error', 'Invalid credentials provided');
    }
  }

  validateEmail(email: string | undefined | null) {
    return email
      ? String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      : false;
  }

  signInWithGoogle(): void {
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['portal']))
      .catch((err) => {
        Utilities.displayToast('error');
      });
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
