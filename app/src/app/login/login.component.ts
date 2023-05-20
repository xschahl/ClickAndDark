import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../http/http.service';
import { Router } from '@angular/router';

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

  constructor(private http: HttpService, private router: Router) {}

  signIn() {
    this.http.login(this.email.value, this.password.value).subscribe(
      () => this.router.navigate(['/shop']),
      error => console.log(error)
    )
  }

  signUp() {
    this.http.register(this.username.value, this.email.value, this.password.value).subscribe(
      () => this.router.navigate(['/shop']),
      error => console.log(error)
    )
  }
}
