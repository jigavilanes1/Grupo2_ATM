import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadDepositoContComponent } from './cantidad-deposito-cont.component';

describe('CantidadDepositoContComponent', () => {
  let component: CantidadDepositoContComponent;
  let fixture: ComponentFixture<CantidadDepositoContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CantidadDepositoContComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CantidadDepositoContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
