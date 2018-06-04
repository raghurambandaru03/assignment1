import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: object;
  constructor(private router: Router) {
    this.loginForm = {
      username:"",
      password:""
    }
   }

  ngOnInit() {
  }
  login(data){
    console.log(data);
    this.router.navigate(["/dashboard"]);
  }
}
