import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthenticationService {
  userlsloggedln: EventEmitter<boolean>;
  isAuthorized(): void {
    this.userlsloggedln.emit(false);
  }

  constructor() {
    this.userlsloggedln = new EventEmitter();
  }

  logout(): Promise<boolean> {
    return new Promise(resolve => {
      window.sessionStorage.removeItem('token');
      this.userlsloggedln.emit(false);
      resolve(true);
    });
  }

  login({username, password}): Promise<boolean> {
    return new Promise(resolve => {
      let validCredentials = false;

      if (username === 'test' && password === '123456') {
        validCredentials = true;
        window.sessionStorage.setItem('token', 'eyJhbGciOi');
      }else {
        this.userlsloggedln.emit(false);
      }
      this.userlsloggedln.emit(validCredentials);
      resolve(validCredentials);
    });
  }
}
