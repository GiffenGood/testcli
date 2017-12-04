import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolTimerComponent } from './cool-timer.component';

describe('CoolTimerComponent', () => {
  let component: CoolTimerComponent;
  let fixture: ComponentFixture<CoolTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
