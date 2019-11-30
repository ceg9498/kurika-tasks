import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageNoticeComponent } from './message-display.component';

describe('MessageNoticeComponent', () => {
  let component: MessageNoticeComponent;
  let fixture: ComponentFixture<MessageNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
