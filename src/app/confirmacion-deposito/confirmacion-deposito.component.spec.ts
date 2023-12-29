import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionDepositoComponent } from './confirmacion-deposito.component';

describe('ConfirmacionDepositoComponent', () => {
  let component: ConfirmacionDepositoComponent;
  let fixture: ComponentFixture<ConfirmacionDepositoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacionDepositoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmacionDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
