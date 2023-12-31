import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaltaTarjetaComponent } from './falta-tarjeta.component';

describe('FaltaTarjetaComponent', () => {
  let component: FaltaTarjetaComponent;
  let fixture: ComponentFixture<FaltaTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaltaTarjetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaltaTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
