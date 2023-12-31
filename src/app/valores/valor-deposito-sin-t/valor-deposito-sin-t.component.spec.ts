import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorDepositoSinTComponent } from './valor-deposito-sin-t.component';

describe('ValorDepositoSinTComponent', () => {
  let component: ValorDepositoSinTComponent;
  let fixture: ComponentFixture<ValorDepositoSinTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValorDepositoSinTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValorDepositoSinTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
