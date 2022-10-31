import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristActivitiesGuideComponent } from './tourist-activities-guide.component';

describe('TouristActivitiesGuideComponent', () => {
  let component: TouristActivitiesGuideComponent;
  let fixture: ComponentFixture<TouristActivitiesGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristActivitiesGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristActivitiesGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
