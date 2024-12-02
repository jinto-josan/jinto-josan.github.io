import { AfterViewInit, Component, ElementRef, inject, ViewChild, ViewChildren } from '@angular/core';
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
import { SkillsComponent } from './components/skills/skills.component';
import { UtilityService } from './services/utility.service';
import { HighlightFirstLettersDirective } from './directives/highlight-first-letters.directive';




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
    AboutMeComponent, SkillsComponent,
    HighlightFirstLettersDirective,
    RouterLink,CommonModule
  ]
})
export class AppComponent implements AfterViewInit {
  isLightMode = false;
  icons:{[key:string]:string}={
    github:'https://github.com/jinto-josan',
    linkedin:'https://linkedin.com/in/jinto-josan'
  }
  links = ['profile','skills', 'projects', 'books'];
  activeLink='';
  @ViewChildren('section') sections:ElementRef[]|undefined;
  utility=inject(UtilityService)


  private observer: IntersectionObserver;
  constructor( private util:UtilityService) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };
    util.registerIcons();

    this.observer = new IntersectionObserver(this.onIntersectionChange.bind(this), options);
  }

  // registerIcons(){    
  //   Object.keys(this.icons).forEach(icon=>{
  //     this.iconRegistry.addSvgIcon(icon, 
  //       this.sanitizer.bypassSecurityTrustResourceUrl(`social-icons/${icon}.svg`));
  //   })   

  // }
  onIntersectionChange(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      // console.log(entry.target, entry.isIntersecting)
      if (entry.isIntersecting) {
        this.activeLink = entry.target.id;
      }
    });
  }

  ngAfterViewInit(): void {
    this.sections?.forEach(section=>{
      this.observer.observe(section.nativeElement)
    })
  }


  toggleTheme() {
    this.isLightMode = !this.isLightMode;
    document.documentElement.classList.toggle('light-theme', this.isLightMode);
  }
}
