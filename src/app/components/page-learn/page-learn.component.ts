import {Component, inject, model, OnInit} from '@angular/core';
import {LikeEvent, OperatorsService} from '../../services/operators.service';
import {Operator} from '../../models/operator.model';
import {OperatorComponent} from '../operator/operator.component';
import {MatFormField, MatInput, MatLabel, MatSuffix} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {DatePipe, NgForOf, NgStyle} from '@angular/common';
import {MatChip, MatChipSet} from '@angular/material/chips';

@Component({
  selector: 'app-page-learn',
  standalone: true,
  imports: [
    OperatorComponent,
    MatInput,
    FormsModule,
    MatSuffix,
    MatIconButton,
    MatIcon,
    MatFormField,
    MatLabel,
    MatButton,
    NgStyle,
    MatChip,
    NgForOf,
    DatePipe,
    MatChipSet
  ],
  templateUrl: './page-learn.component.html',
  styleUrl: './page-learn.component.scss'
})
export class PageLearnComponent implements OnInit {

  title: string = "RxJS";
  showLikes: boolean = true;
  operatorsService = inject(OperatorsService);
  likeEvents$ = this.operatorsService.getLikeEvents()
  operators?: Operator[]
  newLikes: LikeEvent[] = []

  search = model<string>("");

  ngOnInit() {
    this.operators = this.operatorsService.listAll().sort((_) => { return Math.random() - 0.5; });
    this.search.subscribe(this.updateOperators.bind(this));

    this.likeEvents$.subscribe((event) => {
      this.newLikes.push(event);
    })
  }

  updateOperators(search: string) {
    this.operators = this.operatorsService.searchByName(search)
  }

  addLike(id: number) {
    this.operatorsService.addLike(id)
  }
}
