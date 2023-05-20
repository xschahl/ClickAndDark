import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessDarkComponent } from './access-dark.component';

describe('AccessDarkComponent', () => {
  let component: AccessDarkComponent;
  let fixture: ComponentFixture<AccessDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessDarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
