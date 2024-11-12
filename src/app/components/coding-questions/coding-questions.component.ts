import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-coding-questions',
  templateUrl: './coding-questions.component.html',
  styleUrls: ['./coding-questions.component.scss'],
  standalone: true,
  imports: [
    // Import Angular Material components needed for the UI
    MatCardModule, MatChipsModule, MatButtonModule,CommonModule
  ]
})
export class CodingQuestionsComponent {
  codingQuestions = [
    { title: 'Two Sum', status: 'In Progress', difficulty: 'Easy', link: 'https://leetcode.com/problems/two-sum/' },
    { title: 'Longest Substring Without Repeating Characters', status: 'Solved', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' }
  ];
}
