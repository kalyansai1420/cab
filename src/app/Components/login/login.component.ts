import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}

  formSubmit() {
    if (
      this.loginData.username == 'harsha' &&
      this.loginData.password == 'abc'
    ) {
      this.router.navigate(['admin']);
    }
    else if (
       this.loginData.username == '' &&
      this.loginData.password == ''
    ) {
      console.log('incorrect credentails');
    }
  }
}
