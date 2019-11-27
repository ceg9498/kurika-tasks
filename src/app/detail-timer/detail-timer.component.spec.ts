import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTimerComponent } from './detail-timer.component';

describe('DetailTimerComponent', () => {
  let component: DetailTimerComponent;
  let fixture: ComponentFixture<DetailTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
