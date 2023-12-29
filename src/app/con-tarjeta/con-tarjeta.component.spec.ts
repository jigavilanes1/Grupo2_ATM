import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConTarjetaComponent } from './con-tarjeta.component';

describe('ConTarjetaComponent', () => {
  let component: ConTarjetaComponent;
  let fixture: ComponentFixture<ConTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConTarjetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
