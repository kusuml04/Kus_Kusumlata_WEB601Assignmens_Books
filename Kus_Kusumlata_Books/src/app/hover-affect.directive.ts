import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  @Input() affectStyle?: string;
  private originalBorder?: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.addStyles();
    this.originalBorder = this.elementRef.nativeElement.style.border;
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeStyles();
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', this.originalBorder);
  }

  private addStyles() {
    if (this.affectStyle === 'underline') {
      this.renderer.setStyle(this.elementRef.nativeElement, 'text-decoration', 'underline');
              //The elementRef.nativeElement provides a reference to the host element.
    } else if (this.affectStyle === 'bold') {
      this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
    }
  }

  private removeStyles() {
    if (this.affectStyle === 'underline') {
      this.renderer.removeStyle(this.elementRef.nativeElement, 'text-decoration');
    } else if (this.affectStyle === 'bold') {
      this.renderer.removeStyle(this.elementRef.nativeElement, 'font-weight');
}
}

}
