import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorRetiroSinTComponent } from './valor-retiro-sin-t.component';

describe('ValorRetiroSinTComponent', () => {
  let component: ValorRetiroSinTComponent;
  let fixture: ComponentFixture<ValorRetiroSinTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValorRetiroSinTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValorRetiroSinTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
