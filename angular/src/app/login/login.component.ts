import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ConfigService } from '../core/services/config.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export class LoginModel {
  username: string
  password: string
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;
  loading: boolean = false;
  loginModel: LoginModel = new LoginModel();
  loginForm: FormGroup;
  constructor(private http: HttpClient, private router: Router, private config: ConfigService, private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      "username": ["", [Validators.required]],
      "password": ["", [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit() {


  }

  login() {
    this.loading = true;

    if (this.loginForm.invalid) {
      return;
    }

    let credentials = JSON.stringify(this.loginForm.value);
    let options = { headers: new HttpHeaders({ "Content-Type": "application/json" }) }

    const url = this.config.getApiUrl() + "/login"
    this.http.post(url, credentials, options).subscribe(
      response => {
        let token = (<any>response).token;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        this.loading = false;
        this.router.navigateByUrl("/admin/home"); // to home
      },
      error => {
        console.log(error.status);
        this.invalidLogin = false;
        setTimeout(() => { this.invalidLogin = true; }, 200);
        this.loading = false;
      }
    );
  }

}
