import { Routes } from '@angular/router';
import { DayliUsdComponent } from './currency/dayli-usd/dayli-usd.component';

export const CURRENCY_ROUTES: Routes = [
     {
        path: '',
        component: DayliUsdComponent,
        pathMatch: 'full'
    },
];
