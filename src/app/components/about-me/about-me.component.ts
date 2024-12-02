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
    certifications: [{name:"Azure Administrator Associate", icon:"microsoft_ass_cert", link:"https://drive.google.com/file/d/1KlLLI9M4ct2KkSM4id6JMfWJUQSZTzMT/view?usp=drive_link&trk=public_profile_see-credential"}, 
      {name:"Azure Data Engineer Associate",icon:"microsoft_ass_cert", link:"https://drive.google.com/file/d/12BClxFAdZ1cpkyTynukbzCJ5TPh8M83O/view?usp=drive_link&trk=public_profile_see-credential"}],
    profilePicture: '../../my-pic.png', 
    contactInfo: 'jintojosan@gmail.com'
  };
  downloadResume(){
    const resumeUrl = 'resume/MoyalanJintoJosan.pdf';  // Path to the resume file
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = resumeUrl.split('/')[1];
    link.click();  // Simulate a click on the link
  }


}
