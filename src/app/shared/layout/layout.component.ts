import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-layout-component',
  imports: [
    CommonModule,
    BaseLayoutComponent,
    NavBarComponent,
    FooterComponent,
  ],
  template: `
    <app-base-layout>
      <app-nav-bar
        navBar
        logoAlt="imagem do videogame"
        logoURL="assets/svg/logo-xbox.svg"
        btnText="ver disponibilidade"
      ></app-nav-bar>
      <app-footer
        footer
        logoURL="assets/svg/logo-xbox.svg"
        logoAlt="imagem do videogame"
        companyName="Microsoft"
      ></app-footer>
    </app-base-layout>
  `,
  styles: [``],
  standalone: true,
})
export class LayoutComponent {}
