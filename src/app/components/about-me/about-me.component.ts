import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule,MatChipsModule]
})
export class AboutMeComponent {
  aboutMe = {
    name: 'Moyalan Jinto Josan',
    bio: 'Full Stack Developer with expertise in .NET, Java, Angular, Azure, DevOps, and design patterns, specializing in building scalable web applications and optimizing CI/CD pipelines for high-performance, cloud-based solutions.',
    skills: ['Java', 'Spring Boot', '.NET Core', 'Angular', 'Azure', 'SCSS', 'HTML', 'Typescript'],
    profilePicture: '../../my-pic.png', 
    contactInfo: 'jintojosan@gmail.com'
  };

  // // Placeholder for handling edit or view more actions
  // onEditClick() {
  //   console.log('Edit button clicked!');
  // }
}
