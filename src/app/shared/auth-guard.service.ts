import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.checkLoggedin(state.url)
  }
  checkLoggedin(url: string) {
    console.log(url)
    if(this.authService.checkAuthStatus()){
      return true
    }
    this.authService.redirectToUrl = url
    this.router.navigate([''])
    return false
  }
}
