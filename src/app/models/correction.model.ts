import {CheckQuestion, BaseQuestion, RadioQuestion, RangeQuestion, TextQuestion} from './question.model';

export type Correction = RadioCorrection
  | CheckCorrection
  | TextCorrection
  | RangeCorrection

export interface BaseCorrection {
  correct: boolean;
  correction: any[] | any;
}

export interface RadioCorrection extends BaseCorrection, RadioQuestion {
  correction: {
    value: string;
    correct: boolean | null | undefined; // true: good answer, false: bad answer, null: not answered, undefined: neutral answer
  }[];
}

export interface CheckCorrection extends BaseCorrection, CheckQuestion {
  correction: {
    value: string;
    correct: boolean | null | undefined; // true: good answer, false: bad answer, null: not answered, undefined: neutral answer
  }[]
}

export interface TextCorrection extends BaseCorrection, TextQuestion {
  given: string;
  correction: {
    value: string;
    correct: boolean; // true: good keyword, false: missing keyword
  }[]
}

export interface RangeCorrection extends BaseCorrection, RangeQuestion {
  given: number;
  correction: number | null;
}

