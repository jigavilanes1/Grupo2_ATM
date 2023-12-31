import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionRetiroConTComponent } from './confirmacion-retiro-con-t.component';

describe('ConfirmacionRetiroConTComponent', () => {
  let component: ConfirmacionRetiroConTComponent;
  let fixture: ComponentFixture<ConfirmacionRetiroConTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacionRetiroConTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmacionRetiroConTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
