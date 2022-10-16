import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { ClarityModule } from '@clr/angular';
import { LoginFormComponent } from './login-form/login-form.component';
import { SocialLoginModule } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ClarityModule,
    ReactiveFormsModule,
    SocialLoginModule,
  ],
})
export class AuthenticationModule {}
