import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {Operator} from '../../../models/operator.model';
import {MatChip} from '@angular/material/chips';
import {AsyncPipe, LowerCasePipe, NgClass} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {OperatorsService} from '../../../services/operators.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-operator',
  standalone: true,
  imports: [
    MatChip,
    NgClass,
    LowerCasePipe,
    MatIcon,
    AsyncPipe
  ],
  templateUrl: './operator.component.html',
  styleUrl: './operator.component.scss'
})
export class OperatorComponent {

  @Input() operator!: Operator;
  @Output() likedSection = new EventEmitter<number>();

  operatorsServices = inject(OperatorsService);

  toClipboard(codeExample: string | undefined) {
    if (codeExample) {
      navigator.clipboard.writeText(codeExample)
        .catch((e) => console.log(e));
    }
  }

  likeSection() {
    this.likedSection.emit(this.operator.id)
  }
}
