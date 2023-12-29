import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadDepositoComponent } from './cantidad-deposito.component';

describe('CantidadDepositoComponent', () => {
  let component: CantidadDepositoComponent;
  let fixture: ComponentFixture<CantidadDepositoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CantidadDepositoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CantidadDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
