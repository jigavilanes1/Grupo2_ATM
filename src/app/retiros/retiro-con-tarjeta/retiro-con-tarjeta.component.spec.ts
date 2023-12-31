import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiroConTarjetaComponent } from './retiro-con-tarjeta.component';

describe('RetiroConTarjetaComponent', () => {
  let component: RetiroConTarjetaComponent;
  let fixture: ComponentFixture<RetiroConTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetiroConTarjetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetiroConTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
