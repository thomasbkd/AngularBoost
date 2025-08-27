import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationPopupComponent } from './translation-popup.component';

describe('TranslationPopupComponent', () => {
  let component: TranslationPopupComponent;
  let fixture: ComponentFixture<TranslationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslationPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
