import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTdFixed]'
})
export class TdFixedDirective {

  constructor(private elf: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {
    const tdNode = this.elf.nativeElement;
    this.renderer2.addClass(tdNode, "td-fixed");
  };

}
