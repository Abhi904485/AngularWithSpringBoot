import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, public loginService: LoginService) {
  }

  ngOnInit(): void {
    this.handleLogout();
  }

  handleLogout(): any {
    this.loginService.logout();
    this.router.navigate(['login']);
  }
}
