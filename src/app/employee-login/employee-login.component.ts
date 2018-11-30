import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent  {

  username = '';
  password = '';
  public logo = "assets/images/logo.png";
  constructor(private router: Router, private http: HttpClient, private authService: AuthService) {
  }

  tryLogin() {
    this.http.post("/employee_login", { username: this.username, password: this.password })
      .subscribe((data) => {
        if (data === true) {
          this.router.navigateByUrl('/dashboard');

        } else {
          alert('Incorrect username or password.')
          this.router.navigateByUrl('/');
        }
      });
  }
}