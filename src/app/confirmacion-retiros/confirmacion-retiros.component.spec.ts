import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionRetirosComponent } from './confirmacion-retiros.component';

describe('ConfirmacionRetirosComponent', () => {
  let component: ConfirmacionRetirosComponent;
  let fixture: ComponentFixture<ConfirmacionRetirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacionRetirosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmacionRetirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
