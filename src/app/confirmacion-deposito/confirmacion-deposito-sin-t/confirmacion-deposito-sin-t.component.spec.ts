import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionDepositoSinTComponent } from './confirmacion-deposito-sin-t.component';

describe('ConfirmacionDepositoSinTComponent', () => {
  let component: ConfirmacionDepositoSinTComponent;
  let fixture: ComponentFixture<ConfirmacionDepositoSinTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacionDepositoSinTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmacionDepositoSinTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
