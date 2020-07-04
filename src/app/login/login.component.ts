import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  username = 'in28minutes';
  password = 'novell';
  returnUrl: string;

  constructor(private router: Router, public loginService: LoginService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.loginService.isLoggedIn() === true) {
      this.router.navigate(['todos']);
    }
  }

  handleLogin(): any {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || `/welcome/${this.username}`;
    if (this.loginService.authenticate(this.username, this.password)) {
      this.router.navigateByUrl(this.returnUrl);
    } else {
      this.router.navigate(['login']);
      this.invalidLogin = true;
    }
  }


}
