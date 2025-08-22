import {QuestionType} from './question-type.enum';

export type Question =
  | RadioQuestion
  | CheckQuestion
  | TextQuestion
  | RangeQuestion;


export type QuestionWithoutAnswer =
  | Omit<RadioQuestion, 'answer'>
  | Omit<CheckQuestion, 'answer'>
  | Omit<TextQuestion, 'answer'>
  | Omit<RangeQuestion, 'answer'>;


export interface BaseQuestion {
  id: number;
  question: string;
  type: QuestionType
}

export interface RadioQuestion extends BaseQuestion {
  type: QuestionType.Radio;
  options: string[];
  answer: string;
}

export interface CheckQuestion extends BaseQuestion {
  type: QuestionType.Check;
  options: string[];
  answer: string[];
}

export interface TextQuestion extends BaseQuestion {
  type: QuestionType.Text;
  maxLength: number;
  answer: string[];
}

export interface RangeQuestion extends BaseQuestion {
  type: QuestionType.Range;
  min: number;
  max: number;
  answer: number | null;
}

export interface AnswerSubmission {
  id: number;
  answer: string | string[] | number | undefined | null;
}
