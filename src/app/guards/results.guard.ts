import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AnswerSubmission} from '../models/question.model';

export const resultsGuard: CanActivateFn = _ => {
  const router = inject(Router)
  const state = router.getCurrentNavigation()?.extras?.state as { submission: AnswerSubmission[] };
  if (state != null && state.submission !== null) {
    return true
  } else {
    router.navigate(['/test']);
    return false;
  }
};
