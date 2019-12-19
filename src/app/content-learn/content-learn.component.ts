import { Component, OnInit, AfterViewInit, AfterContentInit, ViewChild } from '@angular/core';
import { MyLibComponent } from 'projects/my-lib/src/public-api';

@Component({
  selector: 'app-content-learn',
  templateUrl: './content-learn.component.html',
  styleUrls: ['./content-learn.component.scss']
})
export class ContentLearnComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild(MyLibComponent) myLibComponent: MyLibComponent;

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    console.log(this.myLibComponent);
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
    console.log(this.myLibComponent);
  }

  constructor() { }

  ngOnInit() {
    console.log('OnInit');
    console.log(this.myLibComponent);
  }

}
