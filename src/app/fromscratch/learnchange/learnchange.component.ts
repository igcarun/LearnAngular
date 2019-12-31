import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-learnchange',
  templateUrl: './learnchange.component.html',
  styleUrls: ['./learnchange.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LearnchangeComponent implements OnChanges {

  @Input()
  name: string;

  @Output()
  sendValue: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('learnchanges');
    console.log(changes);
  }

}
