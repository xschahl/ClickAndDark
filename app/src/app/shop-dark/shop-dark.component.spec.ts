import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDarkComponent } from './shop-dark.component';

describe('ShopDarkComponent', () => {
  let component: ShopDarkComponent;
  let fixture: ComponentFixture<ShopDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopDarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
