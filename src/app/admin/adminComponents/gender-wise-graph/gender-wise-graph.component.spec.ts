import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderWiseGraphComponent } from './gender-wise-graph.component';

describe('GenderWiseGraphComponent', () => {
  let component: GenderWiseGraphComponent;
  let fixture: ComponentFixture<GenderWiseGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenderWiseGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenderWiseGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
