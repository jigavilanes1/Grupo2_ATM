import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositosConTarjetaComponent } from './depositos-con-tarjeta.component';

describe('DepositosConTarjetaComponent', () => {
  let component: DepositosConTarjetaComponent;
  let fixture: ComponentFixture<DepositosConTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositosConTarjetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepositosConTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
