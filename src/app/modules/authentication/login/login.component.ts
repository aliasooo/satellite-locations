import { Component, OnInit } from '@angular/core';
import { ClrLoadingState } from '@clr/angular';
import { AuthenticationCredentials } from 'src/app/models/authentication-credentials.interface';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  btnState = ClrLoadingState.DEFAULT;

  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  login(credentials: AuthenticationCredentials) {
    this.authenticationService.login(credentials);
  }
}
