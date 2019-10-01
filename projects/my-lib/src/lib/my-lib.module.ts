import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [MyLibComponent, LibraryComponent],
  imports: [
    LibraryComponent
  ],
  exports: [MyLibComponent, LibraryComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MyLibModule { }
