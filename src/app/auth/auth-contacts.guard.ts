import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthContactsService } from './auth-contacts.service';

@Injectable({
  providedIn: 'root'
})

export class AuthContactsGuard implements CanActivate, CanActivateChild {


  constructor(private authContactsService: AuthContactsService) {}

  


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.authContactsService.isRoleAdmin()
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    return this.authContactsService.isAuthenticated()
  }
  
}
