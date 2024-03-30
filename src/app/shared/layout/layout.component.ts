import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
    selector: 'app-layout-component',
    imports: [CommonModule, BaseLayoutComponent, NavBarComponent],
    template: `
        <app-base-layout>
            <app-nav-bar navBar></app-nav-bar>
        </app-base-layout>
    `,
    styles: [``],
    standalone: true,
})
export class LayoutComponent {}
