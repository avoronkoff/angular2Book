import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class CanActivateGuard implements CanActivate {
  valid = false;

  canActivate() {
    return this.valid;
  }

  validateForm(validate: boolean): void {
    this.valid = validate;
  }
}
