import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public url1: string = "../assets/iphone photo.jpeg";
  changeImage1(event:any){
    this.url1 = event.target.src;
  }
  public url2: string = "../assets/macbook air.jpg";
  changeImage2(event:any){
    this.url2 = event.target.src;
  }
  public url3: string = "../assets/apple watch.jpeg";
  changeImage3(event:any){
    this.url3 = event.target.src;
  }
  public url4: string = "../assets/téléchargement.jpeg";
  changeImage4(event:any){
    this.url4 = event.target.src;
  }


  constructor() { }

  ngOnInit(): void {
  }
}
