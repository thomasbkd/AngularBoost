import {Component, inject} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    MatIcon,
    MatButton
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})


export class NotFoundComponent {
  router = inject(Router);

  backToHome() {
    this.router.navigate(['/']);
  }
}
