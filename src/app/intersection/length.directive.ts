import { Directive, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appLength]'
})
export class LengthDirective {

  @Input() maxLength: string;
  elementRef: ElementRef;

  constructor(private ngModel: NgModel, el: ElementRef) {
    this.elementRef = el;
    // el.nativeElement.style.background = 'red';
  }

  @HostListener('keyup', ['$event']) onKeyUp(event: Event) {
    const value = this.ngModel.model;
    this.elementRef.nativeElement.style.borderColor = 'grey';
    this.ngModel.update.emit(value);
    console.log(event);
    console.log(this.maxLength);
  }

}
