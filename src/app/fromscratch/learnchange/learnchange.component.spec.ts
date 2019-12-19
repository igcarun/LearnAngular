import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnchangeComponent } from './learnchange.component';

describe('LearnchangeComponent', () => {
  let component: LearnchangeComponent;
  let fixture: ComponentFixture<LearnchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
