import { Component, OnInit, ContentChild, AfterContentInit, AfterViewInit, ViewChild } from '@angular/core';
import { AutocompleteComponent } from 'src/app/autocomplete/autocomplete.component';
import { FlexComponent } from 'src/app/flex/flex.component';
import { LibraryComponent } from './library/library.component';

@Component({
  selector: 'lib-my-lib',
  templateUrl: 'my-lib.component.html',
  styles: []
})
export class MyLibComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ContentChild(AutocompleteComponent, {static: false}) autocompleteComponent: AutocompleteComponent;
  @ContentChild(FlexComponent, {static: false}) flexComponent: FlexComponent;
  @ViewChild(LibraryComponent, {static: false}) libraryComponent: LibraryComponent;

  constructor() { }

  ngOnInit() {
    console.log('OnInit');
    console.log(this.autocompleteComponent);
    console.log(this.flexComponent);
    console.log(this.libraryComponent);
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    console.log(this.autocompleteComponent);
    console.log(this.flexComponent);
    console.log(this.libraryComponent);
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit');
    console.log(this.autocompleteComponent);
    console.log(this.flexComponent);
    console.log(this.libraryComponent);
  }

}
