import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAtmComponent } from './login-atm.component';

describe('LoginAtmComponent', () => {
  let component: LoginAtmComponent;
  let fixture: ComponentFixture<LoginAtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAtmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginAtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
