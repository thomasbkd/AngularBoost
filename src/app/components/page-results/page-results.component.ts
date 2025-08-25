import {Component, inject, OnInit} from '@angular/core';
import {AnswerSubmission} from '../../models/question.model';
import {Router} from '@angular/router';
import {QuestionsService} from '../../services/questions.service';
import {Correction} from '../../models/correction.model';
import {QuestionComponent} from '../question/question.component';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import moment from 'moment';
import {DurationPipe} from '../../pipes/duration.pipe';

@Component({
  selector: 'app-page-results',
  standalone: true,
  imports: [
    QuestionComponent,
    FormsModule,
    MatButton,
    DurationPipe
  ],
  templateUrl: './page-results.component.html',
  styleUrl: './page-results.component.scss'
})
export class PageResultsComponent implements OnInit {
  router = inject(Router)
  questionsService = inject(QuestionsService);

  submission !: AnswerSubmission[];
  correction!: Correction[];
  startDate!: Date;
  endDate!: Date;

  ngOnInit() {
    this.submission = history.state.submission;
    this.startDate = history.state.startDate;
    this.endDate = history.state.endDate;
    this.correction = this.questionsService.getCorrection(this.submission)
  }

  getPoints(): number {
    return this.correction.filter(question => question.correct).length;
  }

  backHome() {
    this.router.navigate(['/']);
  }
}
