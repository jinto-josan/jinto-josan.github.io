import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-horizontal-scroll-container',
  standalone: true,
  imports: [],
  templateUrl: './horizontal-scroll-container.component.html',
  styleUrl: './horizontal-scroll-container.component.scss'
})
export class HorizontalScrollContainerComponent {

  @ViewChild('scrollContainer') 
  scrollContainer: ElementRef=new ElementRef(null);


  scrollLeft() {
    const container = this.scrollContainer.nativeElement as HTMLElement;
    container.scrollLeft -= 250;  // Adjust scroll amount as necessary
  }

  // Scroll the container right
  scrollRight() {
    const container = this.scrollContainer.nativeElement as HTMLElement;
    container.scrollLeft += 250;  // Adjust scroll amount as necessary
  }

}


