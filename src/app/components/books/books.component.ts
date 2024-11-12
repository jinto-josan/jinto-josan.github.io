import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  standalone: true,
  imports: [MatCardModule,CommonModule]
})
export class BooksComponent {
  books = [
    { title: 'Clean Code', author: 'Robert C. Martin', status: 'Finished' },
    { title: 'The Pragmatic Programmer', author: 'Andrew Hunt', status: 'Reading' }
  ];
}
