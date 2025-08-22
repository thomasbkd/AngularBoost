import {Component, Input, OnInit} from '@angular/core';
import {AnswerSubmission, Question, QuestionWithoutAnswer} from '../../models/question.model';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {AbstractControl, FormArray, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatFormField, MatHint, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {MatSlider, MatSliderThumb} from '@angular/material/slider';
import {QuestionType} from '../../models/question-type.enum';
import {Correction, RadioCorrection, TextCorrection} from '../../models/correction.model';
import {NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

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
    ReactiveFormsModule,
    NgIf,
    MatIcon
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent implements OnInit {
  @Input() index: number = 0;
  @Input() question!: QuestionWithoutAnswer;
  @Input() correction!: Correction;
  @Input() control: AbstractControl | null = new FormControl();
  @Input() resultsMode: boolean = false;

  protected readonly QuestionType = QuestionType;

  ngOnInit() {
    if (this.resultsMode) this.question = this.correction
    console.log(this.correction)
  }

  getCheckboxControl(index: number): FormControl {
    return this.resultsMode ? new FormControl() : (this.control as FormArray).at(index) as FormControl;
  }

  getResultChecked(result: boolean | null | undefined): boolean {
    return result === true || result === false;
  }

  getResultClass(result: boolean | null | undefined): string {
    switch (result) {
      case true:
        return "good given"
      case false:
        return "bad given"
      case null:
        return "good"
      default:
        return ""
    }
  }

  getResultTextParts(): any[] {
    const given = (this.correction as TextCorrection)
    const regex = new RegExp(`(${given.answer.join('|')})`, 'g');
    return given.given.split(regex);
  }

  isPartKeyword(part: string): boolean {
    return (this.correction as TextCorrection).answer.map(value => value.toLowerCase()).includes(part.toLowerCase());
  }

  getMissingKeywords(): string[] {
    return (this.correction as TextCorrection).correction
      .filter(correction => !correction.correct)
      .map(({value, correct}) => value)
  }

  protected readonly FormArray = FormArray;
}
