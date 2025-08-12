import {Component, input} from '@angular/core';
import {Operator} from '../../../models/operator.model';
import {MatChip} from '@angular/material/chips';
import {LowerCasePipe, NgClass} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-operator',
  standalone: true,
  imports: [
    MatChip,
    NgClass,
    LowerCasePipe,
    MatIcon
  ],
  templateUrl: './operator.component.html',
  styleUrl: './operator.component.scss'
})
export class OperatorComponent {
  operator = input<Operator>();

  toClipboard(codeExample: string | undefined) {
    if (codeExample) {
      navigator.clipboard.writeText(codeExample)
        .catch((e) => console.log(e));
    }
  }
}
