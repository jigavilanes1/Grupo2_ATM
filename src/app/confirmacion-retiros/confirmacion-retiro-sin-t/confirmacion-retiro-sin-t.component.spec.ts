import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionRetiroSinTComponent } from './confirmacion-retiro-sin-t.component';

describe('ConfirmacionRetiroSinTComponent', () => {
  let component: ConfirmacionRetiroSinTComponent;
  let fixture: ComponentFixture<ConfirmacionRetiroSinTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacionRetiroSinTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmacionRetiroSinTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
