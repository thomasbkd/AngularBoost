import { Routes } from '@angular/router';
import {PageLearnComponent} from './components/page-learn/page-learn.component';
import {PageTestComponent} from './components/page-test/page-test.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

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
    path: '',
    redirectTo: 'learn',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

