import { Component, OnInit, OnChanges, ViewChild, AfterViewInit, AfterContentInit, ChangeDetectionStrategy } from '@angular/core';
import { LearnchangeComponent } from './learnchange/learnchange.component';

@Component({
  selector: 'app-fromscratch',
  templateUrl: './fromscratch.component.html',
  styleUrls: ['./fromscratch.component.scss']
})
export class FromscratchComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild(LearnchangeComponent, {static: true}) learnChangeComponent: LearnchangeComponent;

  name: string = 'arun';

  ngOnInit() {
    console.log('child view');
    console.log(this.learnChangeComponent);
  }

  ngAfterContentInit(): void {
    console.log('After content init');
    console.log(this.learnChangeComponent);
  }

  ngAfterViewInit(): void {
    console.log('After child view');
    console.log(this.learnChangeComponent);
  }

  updatedName(name: string): void {
    console.log(name);
  }

  updatedNames(): void {
    this.name = 'arunkumar';
  }
}
