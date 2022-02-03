import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

 // @Input("appHighlight") speed: string = ""

  @Input("appHighlight") color: string = ""

  constructor(private el: ElementRef) { }

  @HostListener("mouseenter") onMouseEnter(){
    (this.el.nativeElement as HTMLElement).style.backgroundColor = this.color;
    //(this.el.nativeElement as HTMLElement).style.transition = "all "+ this.speed +"s";
  }

  @HostListener("mouseleave") onMouseLeave(){
    (this.el.nativeElement as HTMLElement).style.backgroundColor = "transparent";
  }

}
