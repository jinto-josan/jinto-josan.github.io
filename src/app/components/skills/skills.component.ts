import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { UtilityService } from '../../services/utility.service';
import { CommonModule } from '@angular/common';

type skill={name:string,value:number};
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatProgressBarModule,MatCardModule,CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  utility=inject(UtilityService)
  skillSet:{[key:string]:skill[]}={
    backend:[
      {name:'Java' ,value: 90},
      {name:'Spring' ,value: 70},
      {name:'C#' ,value: 80},
      {name:'.NET Core' ,value: 60},     
    ],
    frontend:[
      {name:'Typescript' ,value: 80},
      {name:'Angular' ,value: 80},
      {name:'SCSS' ,value: 90}, 
    ],
    devops:[
      {name:'Kubernetes' ,value: 60},
      {name:'Docker' ,value: 70},
      {name:'Biceps' ,value: 60}, 
      {name:'Powershell' ,value: 50}, 
      {name:'Bash' ,value: 80}, 
    ],
    cloud:[
      {name:'Azure Integration' ,value: 70},
      {name:'Azure Web' ,value: 50},
      {name:'Azure Storage' ,value: 80},
    ]
  }

}
