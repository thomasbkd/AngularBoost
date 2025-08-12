import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLearnComponent } from './page-learn.component';

describe('PageLearnComponent', () => {
  let component: PageLearnComponent;
  let fixture: ComponentFixture<PageLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLearnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
