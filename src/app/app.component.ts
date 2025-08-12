import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  router = inject(Router);
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
