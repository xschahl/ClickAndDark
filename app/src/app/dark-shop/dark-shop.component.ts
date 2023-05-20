import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dark-shop',
  templateUrl: './dark-shop.component.html',
  styleUrls: ['./dark-shop.component.css']
})
export class DarkShopComponent implements OnInit {
  public url1: string = "../assets/image ak 1.jpg";
  changeImage1(event:any){
    this.url1 = event.target.src;
  }
  public url2: string = "../assets/image coc 1.webp";
  changeImage2(event:any){
    this.url2 = event.target.src;
  }
  public url3: string = "../assets/image tank 1.jpeg";
  changeImage3(event:any){
    this.url3 = event.target.src;
  }
  public url4: string = "../assets/poupée gonflable 3.webp";
  changeImage4(event:any){
    this.url4 = event.target.src;
  }

  constructor(private router: Router) { }

  logout() {
    this.router.navigate(['/login']);
  }

  darkMode() {
    this.router.navigate(['/access-dark']);
  }

  ngOnInit(): void {
  }
}

