import { Directive, ElementRef, Renderer, OnInit, HostListener, Input } from "@angular/core";
@Directive({
  selector: '[demoMask]'
})
export class MaskDirective implements OnInit {
  @Input('demoMask') private color: string;
  private defaultColor = 'grey';

  constructor(private el: ElementRef, private renderer: Renderer) {}

  ngOnInit(): void {
    this.mask();
  }

  @HostListener('mouseover') private unmask() {
    this.setColors(null);
  }
  @HostListener('mouseleave') private mask() {
    this.setColors(this.color || this.defaultColor);
  }

  private setColors(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
    this.renderer.setElementStyle(this.el.nativeElement, 'background-color', color);
  }
}
