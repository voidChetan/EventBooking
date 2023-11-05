import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBookingsComponent } from './event-bookings.component';

describe('EventBookingsComponent', () => {
  let component: EventBookingsComponent;
  let fixture: ComponentFixture<EventBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventBookingsComponent]
    });
    fixture = TestBed.createComponent(EventBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
