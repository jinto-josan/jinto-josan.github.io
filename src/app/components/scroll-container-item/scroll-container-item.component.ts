import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { UtilityService } from '../../services/utility.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

export type Item={
  title:string,
  subtitle?:string,
  description?:string,
  chips?:string[],
  status:ItemStatus,
  actions?:{text:string, link:string}[],
  order?:number
}
export enum ItemStatus{
  ongoing,
  completed,
  conceptualizing,
  reading,
  completedReading
}
@Component({
  selector: 'app-scroll-container-item',
  standalone: true,
  imports: [MatCardModule,  MatIconModule, MatChipsModule,CommonModule,MatButtonModule],
  templateUrl: './scroll-container-item.component.html',
  styleUrl: './scroll-container-item.component.scss'
})
export class ScrollContainerItemComponent {
  ItemStatus=ItemStatus
  @Input() item:Item={title:'', description:'', chips:[], status:ItemStatus.ongoing, order:0};

  constructor(public util:UtilityService){}


}
