import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot): boolean {
    if (this.loginService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['login'], {queryParams: {returnUrl: activatedRoute.routeConfig.path}});
    return false;
  }
}
