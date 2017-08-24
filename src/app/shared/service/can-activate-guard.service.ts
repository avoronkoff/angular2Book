import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class CanActivateGuard implements CanActivate {
  valid = false;
  constructor(private router: Router) {}

  canActivate() {
    return this.valid === true ? this.valid : (this.router.navigate(['/add-task']) && false);
  }

  validateForm(validate: boolean): void {
    this.valid = validate;
  }
}
