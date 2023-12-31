import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FueraServicioComponent } from './fuera-servicio.component';

describe('FueraServicioComponent', () => {
  let component: FueraServicioComponent;
  let fixture: ComponentFixture<FueraServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FueraServicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FueraServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
