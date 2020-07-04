import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  username: string;

  constructor(private router: Router, public loginService: LoginService) {
  }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
  }

  handleLogout(): any {
    this.loginService.logout();
    this.router.navigate(['login']);
  }

  // showTodos(): any {
  //   this.router.navigate(['todos']);
  // }
  //
  // showLogin(): any {
  //   this.router.navigate(['login']);
  // }

}
