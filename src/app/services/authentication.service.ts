import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Utilities } from '../classes/utilities';
import { AuthenticationCredentials } from '../models/authentication-credentials.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private router: Router) {}

  login(credentials: Partial<AuthenticationCredentials>) {
    if (
      this.validateEmail(credentials.email) &&
      credentials.password === 'P@ssw0rd123'
    ) {
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
}
