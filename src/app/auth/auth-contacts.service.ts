import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthContactsService {

  constructor() { }

  private isAdmin = true;
  private isLoggedIn = true;


  isAuthenticated() {
    return this.isLoggedIn;
  }

  isRoleAdmin() {
    return this.isAdmin;
  }


}
