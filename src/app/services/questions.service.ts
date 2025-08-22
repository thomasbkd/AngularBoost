import {Injectable} from '@angular/core';
import {QUESTION_BANK} from '../data/question-bank';
import {QuestionType} from '../models/question-type.enum';
import {AnswerSubmission, CheckQuestion, Question, QuestionWithoutAnswer, RadioQuestion, RangeQuestion, TextQuestion} from '../models/question.model';
import {CheckCorrection, Correction, RadioCorrection, RangeCorrection, TextCorrection} from '../models/correction.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() {}

  getRandomQuestions(count: number): QuestionWithoutAnswer[] {
    return QUESTION_BANK.sort(() => Math.random() - 0.5).slice(0, count);
  }

  getCorrection(submissions: AnswerSubmission[]): Correction[] {
    let correction: Correction[] = [];
    submissions.forEach(submission => {
      let question = this.getQuestion(submission.id)
      if (!question) return;
      switch (question.type) {
        case QuestionType.Radio:
          correction.push(this.correctRadio(question, submission));
          break;
        case QuestionType.Check:
          correction.push(this.correctCheck(question, submission));
          break;
        case QuestionType.Text:
          correction.push(this.correctText(question, submission));
          break;
        case QuestionType.Range:
          correction.push(this.correctRange(question, submission));
          break;
      }
    });
    return correction;
  }

  private getQuestion(id: number): Question | undefined {
    return QUESTION_BANK.find((x) => x.id === id);
  }

  private correctRadio(question: RadioQuestion, submission: AnswerSubmission): RadioCorrection {
    let correction: RadioCorrection = {
      ...question,
      correct: false,
      correction: [],
    };

    question.options.forEach((option) => {
      if (option == submission.answer && option == question.answer) {
        correction.correction.push({
            value: option,
            correct: true,
          }
        );
        correction.correct = true;
      } else if (option == submission.answer) {
        correction.correction.push({
          value: option,
          correct: false,
        });
      } else if (option == question.answer) {
        correction.correction.push({
          value: option,
          correct: null,
        });
      } else {
        correction.correction.push({
          value: option,
          correct: undefined,
        });
      }
    });

    return correction;
  }

  private correctCheck(question: CheckQuestion, submission: AnswerSubmission): CheckCorrection {
    const submit = submission.answer as string[];
    let correction: CheckCorrection = {
      ...question,
      correct: true,
      correction: [],
    };

    question.options.forEach((option) => {
      if (submit.includes(option) && question.answer.includes(option)) {
        correction.correction.push({
            value: option,
            correct: true,
          }
        );
      } else if (submit.includes(option)) {
        correction.correction.push({
          value: option,
          correct: false,
        });
        correction.correct = false;
      } else if (question.answer.includes(option)) {
        correction.correction.push({
          value: option,
          correct: null,
        });
        correction.correct = false;
      } else {
        correction.correction.push({
          value: option,
          correct: undefined,
        });
      }
    });

    return correction;
  }

  private correctText(question: TextQuestion, submission: AnswerSubmission): TextCorrection {
    const submit = submission.answer as string;
    let correction: TextCorrection = {
      ...question,
      correct: true,
      given: submit,
      correction: [],
    };

    question.answer.forEach((keyword) => {
      if (submit.includes(keyword)) {
        correction.correction.push({
            value: keyword,
            correct: true,
          }
        );
      } else {
        correction.correction.push({
          value: keyword,
          correct: false,
        });
        correction.correct = false;
      }
    });

    return correction;
  }

  private correctRange(question: RangeQuestion, submission: AnswerSubmission): RangeCorrection {
    return {
      ...question,
      correct: question.answer === null || question.answer == submission.answer,
      given: submission.answer as number,
      correction: question.answer,
    };
  }
}
