import { Component } from '@angular/core';
import { CanActivateGuard } from '../shared/app.shared';

@Component({
  selector: 'app-navbar',
  templateUrl: './app.navbar.component.html',
  styleUrls: ['./app.navbar.component.css']
})

export class ApppNavbarComponent {
  valid: boolean;
  constructor(private canActivateGuard: CanActivateGuard){
    this.valid = this.canActivateGuard.valid;
  }
}
