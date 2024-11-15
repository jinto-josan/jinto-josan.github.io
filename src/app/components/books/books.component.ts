import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { UtilityService } from '../../services/utility.service';
import { MatChipsModule } from '@angular/material/chips';

type book={title:string, author:string, 
  genre:string, status:ReadingStatus,
  takeaway:string,
   order:number}
  enum ReadingStatus{
    reading,
    completed
  }
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  standalone: true,
  imports: [MatCardModule,CommonModule,MatIconModule,MatChipsModule,CommonModule]
})
export class BooksComponent {
  Status=ReadingStatus
  constructor(public util:UtilityService){
  }
  books:book[] = [
    { title: 'The Power of your subconscious mind', author: 'Joseph Murphy', genre:'psychology',
      status: ReadingStatus.reading, order:1, takeaway:''},
    { title: 'The Meditations of Marcus Aurelius', author: 'Marcus Aurelius', genre:'psychology',
      status: ReadingStatus.reading, order:2, takeaway:'' },
    { title: 'The Psychology of Money', author: 'Morgan Housel', genre:'psychology',
        status: ReadingStatus.reading, order:3, takeaway:'' }
  ];


  scrollLeft() {
    const container = document.querySelector('.books-container') as HTMLElement;
    container.scrollLeft -= 250;  // Adjust scroll amount as necessary
  }

  // Scroll the container right
  scrollRight() {
    const container = document.querySelector('.books-container') as HTMLElement;
    container.scrollLeft += 250;  // Adjust scroll amount as necessary
  }
}
