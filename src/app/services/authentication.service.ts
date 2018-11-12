import { Injectable } from '@angular/core';
import { IUser } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser: IUser;

  constructor() { }

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'Jinran',
      lastName: 'Chen',
      email:'chenj@scfuels.com'
    }

    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

  isAuthenticated() {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      return true;
    }
    else return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
  }
}
