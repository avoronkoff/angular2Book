import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class ActiveGuard implements CanActivate {
  valid: boolean = false;

  canActivate() {
    return this.valid;
  }

  validateForm(validate: boolean) :void {
    this.valid = validate;
  }
}
