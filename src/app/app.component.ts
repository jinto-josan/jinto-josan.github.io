import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BooksComponent } from './components/books/books.component';
import { CodingQuestionsComponent } from './components/coding-questions/coding-questions.component';
import { ProjectsComponent } from './components/projects/projects.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs'
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';




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
    AboutMeComponent,
    RouterLink,CommonModule
  ]
})
export class AppComponent implements AfterViewInit {
  isLightMode = false;
  icons:{[key:string]:string}={
    github:'https://github.com/jinto-josan',
    linkedin:'https://linkedin.com/in/jinto-josan'
  }
  links = ['profile', 'projects', 'books','code questions'];
  activeLink='';
  @ViewChild('profile') profile: ElementRef | undefined;
  @ViewChild('projects') projects: ElementRef | undefined;
  @ViewChild('books') books: ElementRef | undefined;
  @ViewChild('codeQuestions') codeQuestion: ElementRef | undefined;

  private observer: IntersectionObserver;
  constructor(private iconRegistry:MatIconRegistry, private sanitizer:DomSanitizer){
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    this.registerIcons();

    this.observer = new IntersectionObserver(this.onIntersectionChange.bind(this), options);
  }
  getKeys(obj:any){
    return Object.keys(obj);
  }

  registerIcons(){    
    Object.keys(this.icons).forEach(icon=>{
      this.iconRegistry.addSvgIcon(icon, 
        this.sanitizer.bypassSecurityTrustResourceUrl(`social-icons/${icon}.svg`));
    })
    

  }
  onIntersectionChange(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.activeLink = entry.target.id;
      }
    });
  }

  ngAfterViewInit(): void {
    // Start observing the sections after view initialization
    console.log(this.profile)
    if (this.profile) {
      this.observer.observe(this.profile.nativeElement);
    }
    if (this.projects) {
      this.observer.observe(this.projects.nativeElement);
    }
    if (this.books) {
      this.observer.observe(this.books.nativeElement);
    }
    if (this.codeQuestion) {
      this.observer.observe(this.codeQuestion.nativeElement);
    }
  }


  toggleTheme() {
    this.isLightMode = !this.isLightMode;
    document.body.classList.toggle('light-theme', this.isLightMode);
  }
}
