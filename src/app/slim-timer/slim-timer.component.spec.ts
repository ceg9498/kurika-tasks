import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlimTimerComponent } from './slim-timer.component';

describe('SlimTimerComponent', () => {
  let component: SlimTimerComponent;
  let fixture: ComponentFixture<SlimTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlimTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlimTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
