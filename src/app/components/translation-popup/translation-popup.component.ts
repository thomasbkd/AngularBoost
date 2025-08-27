import {Component, EventEmitter, Input, model, Output} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-translation-popup',
  standalone: true,
  imports: [
    MatIcon,
    NgStyle
  ],
  templateUrl: './translation-popup.component.html',
  styleUrl: './translation-popup.component.scss'
})
export class TranslationPopupComponent {
  @Input() position: {top: number, left: number} = {top: 0, left: 0}
  @Output() clicked = new EventEmitter<boolean>();
  isHovered = model(false);

  showPopup(show: boolean = true): void {
    if (show) document.getElementsByClassName('tooltip')[0]?.classList.add('show');
    else document.getElementsByClassName('tooltip')[0]?.classList.remove('show');
  }

  emitClick() {
    this.clicked.emit(true);
  }
}
