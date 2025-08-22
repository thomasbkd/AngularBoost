import { Routes } from '@angular/router';
import {PageLearnComponent} from './components/page-learn/page-learn.component';
import {PageTestComponent} from './components/page-test/page-test.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {PageResultsComponent} from './components/page-results/page-results.component';

export const routes: Routes = [
  {
    path: 'learn',
    component: PageLearnComponent
  },
  {
    path: 'test',
    component: PageTestComponent
  },
  {
    path: 'results',
    component: PageResultsComponent
  },
  {
    path: '',
    redirectTo: 'learn',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

