import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isAuthorized = this.auth.isAuthenticated();
    if (isAuthorized && state.url.match(/^\/login$/)) {
      this.router.navigate(['main']);
      return false;
    } else if (!isAuthorized && state.url.match(/^\/main$/)) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}

