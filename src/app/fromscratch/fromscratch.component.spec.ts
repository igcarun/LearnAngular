import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromscratchComponent } from './fromscratch.component';

describe('FromscratchComponent', () => {
  let component: FromscratchComponent;
  let fixture: ComponentFixture<FromscratchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromscratchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromscratchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
