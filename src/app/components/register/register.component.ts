import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: RegisterInterface;
  constructor() { 
    this.user = {
      name:'',
      email:'',
      password: '',
      cpassword: '',
      agree: false
    };
  }

  ngOnInit() {
    
  };

  register(data){
    console.log(data)
  }

}
export class RegisterInterface {
  name: string;
  email: string;
  password: string;
  cpassword: string;
  agree: boolean;
}
