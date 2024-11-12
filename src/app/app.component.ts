import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BooksComponent } from './components/books/books.component';
import { CodingQuestionsComponent } from './components/coding-questions/coding-questions.component';
import { ProjectsComponent } from './components/projects/projects.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    ProjectsComponent,
    BooksComponent,
    CodingQuestionsComponent,
    AboutMeComponent  // Include About Me in the imports
  ]
})
export class AppComponent {
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }
}
