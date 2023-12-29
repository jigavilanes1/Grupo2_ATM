import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiroFallidoComponent } from './retiro-fallido.component';

describe('RetiroFallidoComponent', () => {
  let component: RetiroFallidoComponent;
  let fixture: ComponentFixture<RetiroFallidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetiroFallidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetiroFallidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
