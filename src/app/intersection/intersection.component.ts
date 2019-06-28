import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intersection',
  templateUrl: './intersection.component.html',
  styleUrls: ['./intersection.component.scss']
})
export class IntersectionComponent implements OnInit {

  name = 'arun';
  constructor() { }

  ngOnInit() {
  }

  parren(event: string): void {
    console.log(event);
  }
}
