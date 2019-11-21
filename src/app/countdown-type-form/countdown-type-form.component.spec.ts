import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTypeFormComponent } from './countdown-type-form.component';

describe('CountdownTypeFormComponent', () => {
  let component: CountdownTypeFormComponent;
  let fixture: ComponentFixture<CountdownTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
