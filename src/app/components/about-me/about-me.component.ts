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
    skills: ['Java', 'Spring Boot', '.NET Core', 'Angular', 'Azure', 'SCSS', 'HTML', 'Typescript'],
    profilePicture: '../../my-pic.png', 
    contactInfo: 'jintojosan@gmail.com'
  };


}
