import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor() {
  }

  authenticate(username: string, password: string): boolean {
    if (username === 'in28minutes' && password === 'novell') {
      sessionStorage.setItem('username', username);
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('username');
  }

  logout(): void {
    sessionStorage.removeItem('username');
  }


}
