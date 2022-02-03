import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSetduration]'
})
export class SetdurationDirective {

  @Input("appSetduration") speed: string = ""

  constructor(private el: ElementRef) { }

  @HostListener("mouseenter") onMouseEnter(){
    
    (this.el.nativeElement as HTMLElement).style.transition = "all "+ this.speed +"s";
  }
}
