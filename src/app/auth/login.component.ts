import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'demo-login',
  template: `
<md-card>
<md-card-actions>
<button md-button (click)="login()">Login</button>
</md-card-actions>
</md-card>
`
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) { }

  private login() {
    this.authService.login({});
    if (this.authService.isAuthenticated()) {
      let url = this.authService.getRedirectUrl() || '';
      this.router.navigate([url]);
    }
  }
}
