import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositosSinTarjetaComponent } from './depositos-sin-tarjeta.component';

describe('DepositosSinTarjetaComponent', () => {
  let component: DepositosSinTarjetaComponent;
  let fixture: ComponentFixture<DepositosSinTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositosSinTarjetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepositosSinTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
