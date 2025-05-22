import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'currency',
    loadChildren: () =>
      import('currencyAnalysis/routes').then((m) => m.CURRENCY_ROUTES),
  },
  {
    path: 'options',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        exposedModule: './routes',
      }).then((m) => m.POC_ROUTES),
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
