import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionDepositoConTComponent } from './confirmacion-deposito-con-t.component';

describe('ConfirmacionDepositoConTComponent', () => {
  let component: ConfirmacionDepositoConTComponent;
  let fixture: ComponentFixture<ConfirmacionDepositoConTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacionDepositoConTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmacionDepositoConTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
