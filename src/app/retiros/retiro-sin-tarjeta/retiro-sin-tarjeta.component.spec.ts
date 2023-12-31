import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiroSinTarjetaComponent } from './retiro-sin-tarjeta.component';

describe('RetiroSinTarjetaComponent', () => {
  let component: RetiroSinTarjetaComponent;
  let fixture: ComponentFixture<RetiroSinTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetiroSinTarjetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetiroSinTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
