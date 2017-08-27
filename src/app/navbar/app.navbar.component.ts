import { Component } from '@angular/core';
import { CanActivateGuard } from '../shared/app.shared';
import { AuthenticationService } from '../shared/app.shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './app.navbar.component.html',
  styleUrls: ['./app.navbar.component.css']
})

export class ApppNavbarComponent {
  public valid: boolean;
  public userlsLoggedln: boolean;
  constructor(private canActivateGuard: CanActivateGuard,
              private authenticationService: AuthenticationService,
              private router: Router) {
    this.valid = this.canActivateGuard.valid;
    authenticationService.userlsloggedln.subscribe(isLoggedln => {
      this.userlsLoggedln = isLoggedln;
    });
  }

  logout($event): void {
    $event.preventDefault();
    this.authenticationService.logout().then(success => {
      if (success) {
        this.router.navigate(['/sign-in']);
      }
    });
  }
}
