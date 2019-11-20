import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimerComponent } from './edit-timer.component';

describe('EditTimerComponent', () => {
  let component: EditTimerComponent;
  let fixture: ComponentFixture<EditTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
