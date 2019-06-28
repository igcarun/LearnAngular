import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onmouseenter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }

  highlight(color: string) {
    this.el.nativeElement.style.background = color;
  }

}
