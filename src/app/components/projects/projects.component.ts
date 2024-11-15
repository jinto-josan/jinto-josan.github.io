import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { UtilityService } from '../../services/utility.service';

type project={title:string, description:string, 
  technologies:string[], status:projectStatus,
  link:string, order:number}
  enum projectStatus{
    Ongoing="In Progress",
    Completed="Completed",
    Conceptualizing="Design Phase"
  }
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatButtonModule,CommonModule]
})
export class ProjectsComponent {

  projects:project[] = [
    {
      title: 'Chokanzu',
      description: 'An UI to maintain K8 cluster visually',
      technologies: ['Angular'],
      status: projectStatus.Conceptualizing,
      link: 'https://github.com/jinto-josan/chokanzu',
      order:2
    },
    {
      title: 'Mindara',
      description: 'A E2E testing framework to test a subsystem in absence of downstream system',
      technologies: ['Angular', 'Java', 'Spring Boot', 'Karate', 'Junit'],
      link: 'https://github.com/jinto-josan/E2EProduct',
      status: projectStatus.Ongoing,
      order:1
    }
  ].sort((a,b)=>a.order-b.order);
}
