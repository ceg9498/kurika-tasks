import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTypeFormComponent } from './schedule-type-form.component';

describe('ScheduleTypeFormComponent', () => {
  let component: ScheduleTypeFormComponent;
  let fixture: ComponentFixture<ScheduleTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
