import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/app.shared';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './app.signin.component.html'
})

export class AppSigninComponent {
  complexForm: FormGroup;
  constructor(fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
    this.complexForm = fb.group({
      'username' : [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])]
    });
  }

  authenticate(credentials) {
    this.authenticationService.login(credentials).then(success => {
      if (success) {
        this.router.navigate(['/tasks']);
      }
    });
  }
}
