import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      if (email === 'test@test.at' && password === '12345678') {
        console.log('Login successful.');
      } else {
        console.log('Login failed.');
      }
    } else {
      console.log('Invalid form.');
    }
  }
}
