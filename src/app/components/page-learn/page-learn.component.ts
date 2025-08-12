import {Component, inject, OnInit} from '@angular/core';
import {OperatorsService} from '../../services/operators.service';
import {Operator} from '../../models/operator.model';
import {OperatorComponent} from './operator/operator.component';

@Component({
  selector: 'app-page-learn',
  standalone: true,
  imports: [
    OperatorComponent
  ],
  templateUrl: './page-learn.component.html',
  styleUrl: './page-learn.component.scss'
})

export class PageLearnComponent implements OnInit {
  title: string = "RxJS";
  operatorsService = inject(OperatorsService);
  operators?: Operator[]

  ngOnInit() {
    this.operators = this.operatorsService.listAll().sort((_) => { return Math.random() - 0.5; });
  }
}
