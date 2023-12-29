import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiroExitosoComponent } from './retiro-exitoso.component';

describe('RetiroExitosoComponent', () => {
  let component: RetiroExitosoComponent;
  let fixture: ComponentFixture<RetiroExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetiroExitosoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetiroExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
