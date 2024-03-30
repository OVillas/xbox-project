import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected currentYear: number = new Date().getFullYear();

  @Input() logoURL: string = '';
  @Input() logoAlt: string = '';
  @Input() companyName: string = '';
}
