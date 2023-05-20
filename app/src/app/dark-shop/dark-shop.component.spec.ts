import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkShopComponent } from './dark-shop.component';

describe('DarkShopComponent', () => {
  let component: DarkShopComponent;
  let fixture: ComponentFixture<DarkShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
