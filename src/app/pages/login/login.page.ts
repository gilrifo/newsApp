import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/services/user';
import { __values } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  public email!: FormControl;
  public password!: FormControl;

  public loginForm!: FormGroup;

  constructor(private readonly userSrv: User,private router:Router) {
    this.initForm();
   }

  ngOnInit() {}

  onLogin() {
    console.log('Login exitoso ');
    this.router.navigate(['/home']);  
  }
  public doLogin(){
    console.log(this.loginForm.value);
     this.userSrv.register(this.loginForm.value);
    this.loginForm.reset();
  }

  private initForm(){
    this.email = new FormControl('',[ Validators.required, Validators.email]);
    this.password = new FormControl('',[ Validators.required, Validators.minLength(3)]);

    this.loginForm = new FormGroup({
    email: this.email,
    password: this.password,
    })
  }



}
