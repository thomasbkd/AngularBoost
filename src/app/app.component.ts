import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {AsyncPipe, NgClass} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {OperatorsService} from './services/operators.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, NgClass, MatIcon, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  router = inject(Router);
  operatorsService = inject(OperatorsService);

  title = 'AngularBoost';

  goToHome() {
    this.router.navigate(['/']);
  }

  goToLearn() {
    this.router.navigate(['/learn']);
  }

  goToTest() {
    this.router.navigate(['/test']);
  }
}
