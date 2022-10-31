import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorSessionComponent } from './administrator-session.component';

describe('AdministratorSessionComponent', () => {
  let component: AdministratorSessionComponent;
  let fixture: ComponentFixture<AdministratorSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
