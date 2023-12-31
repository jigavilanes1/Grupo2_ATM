import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadDepositoSintComponent } from './cantidad-deposito-sint.component';

describe('CantidadDepositoSintComponent', () => {
  let component: CantidadDepositoSintComponent;
  let fixture: ComponentFixture<CantidadDepositoSintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CantidadDepositoSintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CantidadDepositoSintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
