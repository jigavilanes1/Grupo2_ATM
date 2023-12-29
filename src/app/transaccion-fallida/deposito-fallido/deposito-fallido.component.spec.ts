import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoFallidoComponent } from './deposito-fallido.component';

describe('DepositoFallidoComponent', () => {
  let component: DepositoFallidoComponent;
  let fixture: ComponentFixture<DepositoFallidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositoFallidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepositoFallidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
