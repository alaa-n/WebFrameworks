import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder, private backendService: BackendService, private router: Router) {}

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

      this.backendService.login(email, password).subscribe((responseData) => {
        this.backendService.Token = responseData.Token;
        this.backendService.email = email;
        console.log(responseData.Token);

        this.router.navigate(['/start']);
      });

    } else {
      console.log('Invalid form.');
    }
  }
}
