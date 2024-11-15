import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAfterBookingComponent } from './details-after-booking.component';

describe('DetailsAfterBookingComponent', () => {
  let component: DetailsAfterBookingComponent;
  let fixture: ComponentFixture<DetailsAfterBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsAfterBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsAfterBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
