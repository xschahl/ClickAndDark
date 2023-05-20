import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-dark',
  templateUrl: './access-dark.component.html',
  styleUrls: ['./access-dark.component.css']
})
export class AccessDarkComponent {
  public key: string = "SelimIsSleeping";
  public solution: FormControl = new FormControl('', [Validators.required]);

  constructor(private router: Router) { }

  onSubmit() {
    if (this.solution.value == this.key)
      this.router.navigate(['/shop-dark']);
  }

  shop() {
    this.router.navigate(['/shop']);
  }
}
