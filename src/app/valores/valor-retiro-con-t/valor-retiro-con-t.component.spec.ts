import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorRetiroConTComponent } from './valor-retiro-con-t.component';

describe('ValorRetiroConTComponent', () => {
  let component: ValorRetiroConTComponent;
  let fixture: ComponentFixture<ValorRetiroConTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValorRetiroConTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValorRetiroConTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
