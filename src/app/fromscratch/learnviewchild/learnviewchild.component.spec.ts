import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnviewchildComponent } from './learnviewchild.component';

describe('LearnviewchildComponent', () => {
  let component: LearnviewchildComponent;
  let fixture: ComponentFixture<LearnviewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnviewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnviewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
