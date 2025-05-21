import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const CURRENCY_ROUTES: Routes = [
     {
        path: '',
        component: AppComponent,
        pathMatch: 'full'
    },
];
