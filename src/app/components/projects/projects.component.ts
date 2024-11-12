import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatButtonModule,CommonModule]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project A',
      description: 'Description of Project A.',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      link: 'https://github.com'
    },
    {
      title: 'Project B',
      description: 'Description of Project B.',
      technologies: ['React', 'Express', 'MySQL'],
      link: 'https://github.com'
    }
  ];
}
