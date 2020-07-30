import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentstatusComponent } from './currentstatus.component';

describe('CurrentstatusComponent', () => {
  let component: CurrentstatusComponent;
  let fixture: ComponentFixture<CurrentstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
