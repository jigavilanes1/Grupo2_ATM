import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorDepositoConTComponent } from './valor-deposito-con-t.component';

describe('ValorDepositoConTComponent', () => {
  let component: ValorDepositoConTComponent;
  let fixture: ComponentFixture<ValorDepositoConTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValorDepositoConTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValorDepositoConTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
