import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { QuestionItem } from '../models/questionItem';


@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  @Input() questions: QuestionItem[] = [];

  protected toggleAccordion(item: QuestionItem): void {
    item.expanded = !item.expanded;
  }
}
