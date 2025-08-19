import { Injectable } from '@angular/core';
import {QuestionWithoutAnswer} from '../models/question.model';
import {QUESTION_BANK} from '../data/question-bank';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() {}

  getRandomQuestions(count: number): QuestionWithoutAnswer[] {
    return QUESTION_BANK.sort(() => Math.random() - 0.5).slice(0, count);
  }

  getAnswer(id: number): string[] | string | number | null | undefined {
    return QUESTION_BANK.find((x) => x.id === id)?.answer;
  }
}
