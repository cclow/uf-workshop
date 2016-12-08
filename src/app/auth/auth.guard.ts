import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "./auth.service";
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot)
  : boolean {
    return this.verifyAuthenticated(state.url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot)
  : boolean {
    return this.verifyAuthenticated(state.url);
  }

  private verifyAuthenticated(url): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.authService.setRedirectUrl(url);
      this.router.navigate(['login']);
      return false;
    }
  }
}
