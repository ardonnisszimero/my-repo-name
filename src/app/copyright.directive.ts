import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appCopyright]",
})
export class CopyrightDirective {
  constructor(elementRef: ElementRef) {
    const currentYear = new Date().getFullYear();
    const targetEl: HTMLElement = elementRef.nativeElement;
    targetEl.classList.add("copyright");
    targetEl.textContent = `Copyright ©${currentYear} All Rights Reserved`;
  }
}
