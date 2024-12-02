import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { UtilityService } from '../../services/utility.service';
import { MatIconModule } from '@angular/material/icon';

type project={title:string, description:string, 
  technologies:string[], status:ProjectStatus,
  link:string, order:number}
  enum ProjectStatus{
    ongoing,
    completed,
    conceptualizing
  }
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatButtonModule,CommonModule, MatIconModule]
})
export class ProjectsComponent {
  Status=ProjectStatus
  constructor(public util:UtilityService){}
  projects:project[] = [
    {
      title: 'Chokanzu',
      description: 'An UI to maintain K8 cluster visually',
      technologies: ['Angular'],
      status: ProjectStatus.conceptualizing,
      link: 'https://github.com/jinto-josan/chokanzu',
      order:1
    },
    {
      title: 'OMS',
      description: 'A Full blown Order Management System which is reactive and scalable',
      technologies: ['Angular', '.NET', 'C#'],
      link: 'https://github.com/jinto-josan/OrderManagementSystem',
      status: ProjectStatus.ongoing,
      order:4
    },
    {
      title: 'Mindara',
      description: 'A E2E testing framework to test a subsystem in absence of downstream system',
      technologies: ['Angular', 'Java', 'Spring Boot', 'Karate', 'Junit'],
      link: 'https://github.com/jinto-josan/E2EProduct',
      status: ProjectStatus.ongoing,
      order:3
    },
    {
      title: 'ProfilePage',
      description: 'Its built on angular',
      technologies: ['Angular', 'Git Workflow'],
      link: 'https://github.com/jinto-josan/jinto-josan.github.io',
      status: ProjectStatus.completed,
      order:2
    }
  ].sort((a,b)=>b.order-a.order);
}
