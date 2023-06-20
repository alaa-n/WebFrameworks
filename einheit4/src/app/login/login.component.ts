import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  hide = false;
  isLoading = false;

  constructor(private fb: FormBuilder, private backendService: BackendService) { }

  ngOnInit(): void { }

  login(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.backendService.login(
        this.form["email"].value, 
        this.form["password"].value);
    }
  }

  get form(): { [key: string]: AbstractControl; } {
    return this.loginForm.controls;
  }
}
