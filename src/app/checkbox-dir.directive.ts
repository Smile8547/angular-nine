import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCheckboxDir]'
})
export class CheckboxDirDirective {
  @Input() checkNum: string;
  @Input() tableList : any[];

  constructor(private elf: ElementRef, private renderer2: Renderer2) { }
  @HostListener('click', ['$event'])
  onClick(event: Event) {
    const node = this.renderer2.parentNode(this.elf.nativeElement);
    const trNode = this.renderer2.parentNode(node);
    const result = trNode.classList.contains("table-light");
    if (result) {
      this.renderer2.removeClass(trNode, "table-light");
      this.renderer2.addClass(trNode, "table-danger");
    } else {
      this.renderer2.removeClass(trNode, "table-danger");
      this.renderer2.addClass(trNode, "table-light");
    }
  }
}
