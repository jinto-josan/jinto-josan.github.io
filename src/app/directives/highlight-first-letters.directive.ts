import { Directive, ElementRef, Renderer2, HostBinding, OnInit, Input, SecurityContext, Inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Directive({
  selector: '[appHighlightFirstLetters]',
  standalone:true
})
export class HighlightFirstLettersDirective implements OnInit {

  @Input()
  appHighlightFirstLetters:string='green';

  @HostBinding('innerHTML') innerHTML: SafeHtml = ''; // Binding to the innerHTML of the host element

  constructor(private el: ElementRef, private sanitizer:DomSanitizer,
  ) {}

  ngOnInit() {
    // Structural directive dont give the innerStuffs
    console.log(this.el)
    const textContent = this.el.nativeElement.innerText.trim(); 

    if (textContent) {
      this.modifyContent(textContent); 
    }
  }

  
  private modifyContent(text: string) {
    // If text is longer than 3 characters, modify it
    if (text.length > 3) {
      const firstThreeLetters = text.substring(0, 3);  
      const remainingText = text.substring(3);
      let rawText = `<span style="color:${this.getPrimaryColor()}; font-weight: bold">${firstThreeLetters}</span>${remainingText}`;
      this.innerHTML = this.sanitizer.bypassSecurityTrustHtml(

        rawText
      );
    } else {
      this.innerHTML = text;
    }
  }

  private getPrimaryColor(): string {
    // Access the root element and get the primary color using CSS variables
    //its a crude approach maybe have to fix
    const root = document.documentElement;
    const primaryColor = getComputedStyle(root).getPropertyValue('--mdc-filled-button-container-color');
    return primaryColor.trim(); // Remove any excess whitespace
  }
}
