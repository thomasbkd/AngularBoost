import {Component, inject} from '@angular/core';
import {QuestionsService} from '../../services/questions.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {QuestionType} from '../../models/question-type.enum';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {MatSlider, MatSliderThumb} from '@angular/material/slider';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatHint, MatInput, MatLabel} from '@angular/material/input';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {AnswerSubmission, QuestionWithoutAnswer} from '../../models/question.model';
import {NgClass} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import {QuestionComponent} from '../question/question.component';

@Component({
  selector: 'app-page-test',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButton,
    QuestionComponent,
  ],
  templateUrl: './page-test.component.html',
  styleUrl: './page-test.component.scss'
})
export class PageTestComponent {
  questionsService = inject(QuestionsService);
  questions: QuestionWithoutAnswer[] = [];

  fb = inject(FormBuilder);
  form: FormGroup = this.fb.group({});
  private snackBar = inject(MatSnackBar);

  constructor() {
    this.questions = this.questionsService.getRandomQuestions(5);
    this.buildForm(this.questions)
  }

  private buildForm(questions: QuestionWithoutAnswer[]): void {
    const group: { [key: string]: any } = {};

    questions.forEach(question => {
      const key = `question_${question.id}`;

      switch (question.type) {
        case QuestionType.Radio:
        case QuestionType.Text:
          group[key] = new FormControl('', Validators.required);
          break;

        case QuestionType.Range:
          group[key] = new FormControl(
            null,
            [Validators.required, Validators.min(question.min), Validators.max(question.max)]
          );
          break;

        case QuestionType.Check:
          group[key] = new FormArray(
              question.options.map(() => new FormControl(false)),
              this.checkboxValidator()
          );
          break;
      }
    });

    this.form = this.fb.group(group);
  }

  private checkboxValidator(): Validators {
    return (formArray: FormArray) => {
      const isValid = formArray.controls.some(control => control.value);
      return isValid ? null : { required: true }
    }
  }

  onSubmit() {
    let submission: AnswerSubmission[] = []
    let completed = true;
    this.questions.forEach(question => {
      if (!completed) return;

      let answer = this.form.controls[`question_${question.id}`];
      if (answer == null || !answer.valid) {
        completed = false;
        return;
      }

      switch(question.type) {
        case QuestionType.Radio:
        case QuestionType.Text:
        case QuestionType.Range:
          submission.push({id: question.id, answer: answer.value});
          break;

        case QuestionType.Check:
          submission.push({id: question.id, answer: question.options.filter((_, index) => answer.value[index])});
          break;
      }
    })

    if (!completed) {
      this.snackBar.open("Please answer to each question.", "Close", {
        duration: 5000,
        verticalPosition: "top"
      });
      return;
    }

    console.log(submission);
  }
}
