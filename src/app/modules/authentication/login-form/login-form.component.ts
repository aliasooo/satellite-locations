import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { AuthenticationCredentials } from 'src/app/models/authentication-credentials.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  @Input() btnState = ClrLoadingState.DEFAULT;
  @Output() login = new EventEmitter<AuthenticationCredentials>();
  @Output() loginWithGoogle = new EventEmitter();
  public loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [(Validators.required, Validators.email)],
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });
  locale = localStorage.getItem('locale')
    ? localStorage.getItem('locale')
    : 'en-US';
  availableLocales = [
    { locale: 'en-US', description: 'English' },
    { locale: 'fr-FR', description: 'France' },
  ];

  constructor() {}

  changeLocale(evt: any) {
    localStorage.setItem('locale', evt.target.value);
  }
}
