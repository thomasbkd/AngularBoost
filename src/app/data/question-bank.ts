import {Question} from '../models/question.model';
import {QuestionType} from '../models/question-type.enum';

export const QUESTION_BANK: Question[] = [
  {
    id: 1,
    type: QuestionType.Radio,
    question: "Which RxJS operator is used to transform emitted values?",
    options: ["map", "filter", "merge", "scan"],
    answer: "map"
  },
  {
    id: 2,
    type: QuestionType.Radio,
    question: "Which operator is commonly used to flatten inner Observables?",
    options: ["mergeMap", "switchMap", "concatMap", "exhaustMap"],
    answer: "switchMap"
  },
  {
    id: 3,
    type: QuestionType.Check,
    question: "Select all operators that can combine multiple Observables.",
    options: ["merge", "combineLatest", "zip", "forkJoin"],
    answer: ["merge", "combineLatest", "zip", "forkJoin"]
  },
  {
    id: 4,
    type: QuestionType.Check,
    question: "Which operators are used for filtering values?",
    options: ["filter", "take", "skip", "distinctUntilChanged"],
    answer: ["filter", "take", "skip", "distinctUntilChanged"]
  },
  {
    id: 5,
    type: QuestionType.Text,
    question: "Briefly explain what debounceTime does.",
    maxLength: 200,
    answer: ["delay", "wait", "pause"]
  },
  {
    id: 6,
    type: QuestionType.Text,
    question: "What is the purpose of the catchError operator?",
    maxLength: 200,
    answer: ["error", "handle", "fallback"]
  },
  {
    id: 7,
    type: QuestionType.Range,
    question: "How confident are you using RxJS operators?",
    min: 0,
    max: 10,
    answer: null
  },
  {
    id: 8,
    type: QuestionType.Range,
    question: "Rate your understanding of Observables.",
    min: 0,
    max: 10,
    answer: null
  },
  {
    id: 9,
    type: QuestionType.Radio,
    question: "Which operator ignores values for a specified duration?",
    options: ["debounceTime", "throttleTime", "delay", "timeout"],
    answer: "debounceTime"
  },
  {
    id: 10,
    type: QuestionType.Radio,
    question: "Which operator emits only the first value?",
    options: ["first", "take", "skip", "startWith"],
    answer: "first"
  },
  {
    id: 11,
    type: QuestionType.Check,
    question: "Select operators that deal with time-based emissions.",
    options: ["debounceTime", "throttleTime", "delay", "interval"],
    answer: ["debounceTime", "throttleTime", "delay", "interval"]
  },
  {
    id: 12,
    type: QuestionType.Check,
    question: "Which operators are used to transform streams?",
    options: ["map", "scan", "switchMap", "from"],
    answer: ["map", "scan", "switchMap"]
  },
  {
    id: 13,
    type: QuestionType.Text,
    question: "Describe the role of switchMap in handling HTTP requests.",
    maxLength: 200,
    answer: ["cancel", "latest", "request"]
  },
  {
    id: 14,
    type: QuestionType.Text,
    question: "What does the takeUntil operator do?",
    maxLength: 200,
    answer: ["unsubscribe", "stop", "complete"]
  },
  {
    id: 15,
    type: QuestionType.Range,
    question: "How familiar are you with Subjects in RxJS?",
    min: 0,
    max: 10,
    answer: null
  },
  {
    id: 16,
    type: QuestionType.Range,
    question: "Rate your experience with RxJS in Angular projects.",
    min: 0,
    max: 10,
    answer: null
  },
  {
    id: 17,
    type: QuestionType.Radio,
    question: "Which operator is used to emit values from multiple sources sequentially?",
    options: ["concat", "merge", "combineLatest", "zip"],
    answer: "concat"
  },
  {
    id: 18,
    type: QuestionType.Radio,
    question: "Which operator emits the latest value from each Observable?",
    options: ["combineLatest", "zip", "forkJoin", "merge"],
    answer: "combineLatest"
  },
  {
    id: 19,
    type: QuestionType.Check,
    question: "Select operators that help manage subscriptions.",
    options: ["takeUntil", "finalize", "unsubscribe", "share"],
    answer: ["takeUntil", "finalize", "share"]
  },
  {
    id: 20,
    type: QuestionType.Text,
    question: "Explain the difference between mergeMap and switchMap.",
    maxLength: 200,
    answer: ["parallel", "cancel", "inner"]
  }
];
