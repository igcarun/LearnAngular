import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaLearnComponent } from './media-learn.component';

describe('MediaLearnComponent', () => {
  let component: MediaLearnComponent;
  let fixture: ComponentFixture<MediaLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
