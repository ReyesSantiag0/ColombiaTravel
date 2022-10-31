import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourGuideSessionComponent } from './tour-guide-session.component';

describe('TourGuideSessionComponent', () => {
  let component: TourGuideSessionComponent;
  let fixture: ComponentFixture<TourGuideSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourGuideSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourGuideSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
