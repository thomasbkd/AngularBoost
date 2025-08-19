import {Component, Input} from '@angular/core';
import {AnswerSubmission, Question, QuestionWithoutAnswer} from '../../models/question.model';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {AbstractControl, FormArray, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatFormField, MatHint, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {MatSlider, MatSliderThumb} from '@angular/material/slider';
import {QuestionType} from '../../models/question-type.enum';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    FormsModule,
    MatCheckbox,
    MatFormField,
    MatHint,
    MatInput,
    MatLabel,
    MatRadioButton,
    MatRadioGroup,
    MatSlider,
    MatSliderThumb,
    ReactiveFormsModule
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  @Input() index: number = 0;
  @Input() question!: Question | QuestionWithoutAnswer;
  @Input() submission: AnswerSubmission | null = null;
  @Input() control: AbstractControl | null = new FormControl();

  resultsMode = this.submission !== null

  protected readonly QuestionType = QuestionType;


  getCheckboxControl(index: number): FormControl {
    return (this.control as FormArray).at(index) as FormControl;
  }

  protected readonly FormArray = FormArray;
}
