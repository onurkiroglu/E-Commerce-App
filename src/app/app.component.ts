import { Component } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private accountService:AccountService) { }
  title = 'E-Commerce-App';

  isLoggedIn() {
    return this.accountService.isLoggedIn();
  }

  logout() {
    this.accountService.logout();
  }
}
