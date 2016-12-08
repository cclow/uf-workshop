import { Injectable } from "@angular/core";
@Injectable()
export class AuthService {
  private authenticated: boolean = false;
  private redirectUrl: string;

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  login(credentials) {
    this.authenticated = true;
  }

  logout() {
    this.authenticated = false;
  }

  getRedirectUrl() {
    return this.redirectUrl;
  }

  setRedirectUrl(url: string) {
    this.redirectUrl = url;
  }
}
