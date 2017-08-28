import { Component} from '@angular/core';
import { AuthenticationService } from '../shared/app.shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public userlsLoggedln: boolean;
  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
    authenticationService.userlsloggedln.subscribe(isLoggedln => {
      this.userlsLoggedln = isLoggedln;
    });
    if (!this.userlsLoggedln) {
      this.router.navigate(['/sign-in']);
    }
  }
}
