import { Component, Input } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet } from '@angular/router';
import { NavItems } from './model/navItems';
import { CommonModule } from '@angular/common';
import { itemsNav } from '../../../config/items-nav.config';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RippleModule, ButtonModule, RouterOutlet, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  @Input() logoURL: string = '';
  @Input() logoAlt: string = '';
  @Input() btnText: string = '';

  protected navItems: NavItems[] = itemsNav;
}
