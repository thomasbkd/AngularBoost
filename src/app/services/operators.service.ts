import {Injectable} from '@angular/core';
import {Operator} from '../models/operator.model';
import {Category} from '../models/category.enum';
import {Observable, scan, startWith, Subject} from 'rxjs';

export interface LikeEvent {
  id: number;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

  private count = 0;
  private operators: Operator[] = [
    {
      id: this.count++,
      name: 'of',
      category: Category.Creation,
      description: 'Creates an Observable that emits the arguments you provide, then completes.',
      codeExample: 'of(1, 2, 3)'
    },
    {
      id: this.count++,
      name: 'from',
      category: Category.Creation,
      description: 'Converts various other objects and data types into Observables.',
      codeExample: 'from([10, 20, 30])'
    },
    {
      id: this.count++,
      name: 'map',
      category: Category.Transformation,
      description: 'Applies a given function to each value emitted by the source Observable.',
      codeExample: 'of(1, 2, 3).pipe(map(x => x * 2))'
    },
    {
      id: this.count++,
      name: 'filter',
      category: Category.Filtering,
      description: 'Emits only those items from the source Observable that pass a predicate test.',
      codeExample: 'of(1, 2, 3).pipe(filter(x => x % 2 === 0))'
    },
    {
      id: this.count++,
      name: 'merge',
      category: Category.Combination,
      description: 'Combines multiple Observables into one by merging their emissions.',
      codeExample: 'merge(of(1, 2), of(3, 4))'
    },
    {
      id: this.count++,
      name: 'switchMap',
      category: Category.Transformation,
      description: 'Maps each value to an Observable, then flattens all inner Observables using switch strategy.',
      codeExample: 'click$.pipe(switchMap(() => ajax("/data")))'
    },
    {
      id: this.count++,
      name: 'debounceTime',
      category: Category.Utility,
      description: 'Emits a value from the source Observable only after a particular time span has passed.',
      codeExample: 'input$.pipe(debounceTime(300))'
    },
    {
      id: this.count++,
      name: 'catchError',
      category: Category.ErrorHandling,
      description: 'Catches errors on the source Observable and returns a new Observable or throws an error.',
      codeExample: 'ajax("/api").pipe(catchError(err => of([])))'
    },
    {
      id: this.count++,
      name: 'take',
      category: Category.Filtering,
      description: 'Emits only the first N values emitted by the source Observable.',
      codeExample: 'of(1, 2, 3, 4).pipe(take(2))'
    },
    {
      id: this.count++,
      name: 'combineLatest',
      category: Category.Combination,
      description: 'Combines the latest values from multiple Observables whenever any of them emits.',
      codeExample: 'combineLatest([obs1$, obs2$])'
    }
    // Add more operators here...
  ];

  private likeEvents$ = new Subject<LikeEvent>();
  private likeCounts = new Map<number, number>();

  constructor() {
    this.likeEvents$.subscribe(like => {
      const current = this.likeCounts.get(like.id) ?? 0;
      this.likeCounts.set(like.id, current+1);
      this.saveLikeCounts();
    })

    const jsonOperators = localStorage.getItem("operators");
    if (jsonOperators) this.operators = JSON.parse(jsonOperators);

    const jsonLikeCounts = localStorage.getItem("likeCounts");
    if (jsonLikeCounts) {
      this.likeCounts = new Map<number, number>(
        Object.entries(JSON.parse(jsonLikeCounts)).map(
          ([id, count]) => [Number(id), Number(count)])
      );
    }
  }

  listAll(): Operator[] {
    return this.operators;
  }

  getCategories(): Category[] {
    return Object.values(Category)
  }

  getById(id: number): Operator | undefined {
    return this.operators.find(operator => operator.id === id);
  }

  searchByName(search: string): Operator[] {
    return this.operators
      .filter(operator => operator)
      .filter(operator => operator.name.toLowerCase().includes(search.toLowerCase()))
  }

  addLike(id: number) {
    this.likeEvents$.next(
      {
        id: id,
        timestamp: new Date(),
      }
    )
  }

  getLikeCount(id: number): number {
    return this.likeCounts.get(id) ?? 0;
  }

  getTotalLike(): number {
    let total = 0;
    this.likeCounts.forEach((count) => {
      total += count;
    })
    return total;
  }

  getLikeEvents(): Observable<LikeEvent> {
    return this.likeEvents$.pipe()
  }

  private saveLikeCounts() {
    const obj = Object.fromEntries(this.likeCounts);
    localStorage.setItem("likeCounts", JSON.stringify(obj));
  }
}
