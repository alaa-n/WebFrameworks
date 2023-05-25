import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  passwordMismatch: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      address: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    });

    this.signupForm.controls['confirmPassword'].valueChanges.subscribe(() => {
      this.passwordMismatch =
        this.signupForm.controls['password'].value !== this.signupForm.controls['confirmPassword'].value;
    });
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  toggleShowConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  register() {
    if (this.signupForm.valid && !this.passwordMismatch) {
      const email = this.signupForm.value.email;
      const password = this.signupForm.value.password;
      const confirmPassword = this.signupForm.value.confirmPassword;
      const address = this.signupForm.value.address;
      const postalCode = this.signupForm.value.postalCode;

      console.log('Registration submitted');
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
      console.log('Address:', address);
      console.log('Postal Code:', postalCode);
    } else {
      console.log('Invalid form.');
    }
  }

  restrictToNumbers(event: any) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    input.value = value.replace(/[^0-9]/g, '');
  }
}
