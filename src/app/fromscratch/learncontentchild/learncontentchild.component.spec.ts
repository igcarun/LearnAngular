import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearncontentchildComponent } from './learncontentchild.component';

describe('LearncontentchildComponent', () => {
  let component: LearncontentchildComponent;
  let fixture: ComponentFixture<LearncontentchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearncontentchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearncontentchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
