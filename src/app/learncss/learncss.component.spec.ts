import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearncssComponent } from './learncss.component';

describe('LearncssComponent', () => {
  let component: LearncssComponent;
  let fixture: ComponentFixture<LearncssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearncssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearncssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
