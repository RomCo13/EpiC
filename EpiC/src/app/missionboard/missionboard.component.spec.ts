import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionboardComponent } from './missionboard.component';

describe('MissionboardComponent', () => {
  let component: MissionboardComponent;
  let fixture: ComponentFixture<MissionboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
