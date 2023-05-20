import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username: FormControl = new FormControl('', [Validators.required]);
  public email: FormControl = new FormControl('', [Validators.required]);
  public password: FormControl = new FormControl('', [Validators.required]);
  public repassword: FormControl = new FormControl('', [Validators.required]);

  constructor() {}

  signIn() {
    console.log("Email: ", this.email.value);
    console.log("Password: ", this.password.value);
  }

  signUp() {
    console.log("Username: ", this.username.value);
    console.log("Email: ", this.email.value);
    console.log("Password: ", this.password.value);
    console.log("Repassword ", this.repassword.value);
  }
}
