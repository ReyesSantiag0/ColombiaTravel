import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristActivityComponent } from './tourist-activity.component';

describe('TouristActivityComponent', () => {
  let component: TouristActivityComponent;
  let fixture: ComponentFixture<TouristActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
