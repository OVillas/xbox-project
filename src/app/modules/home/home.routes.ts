import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const APP_HOME_ROUTES: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
