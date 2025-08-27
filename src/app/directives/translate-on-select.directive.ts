import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  inject,
  ViewContainerRef
} from '@angular/core';
import { TranslationPopupComponent } from '../components/translation-popup/translation-popup.component';
import {TranslationService} from '../services/translation.service';

@Directive({
  selector: '[appTranslateOnSelect]',
  standalone: true
})
export class TranslateOnSelectDirective {
  private el = inject(ElementRef);
  private viewContainer = inject(ViewContainerRef);
  private translationService = inject(TranslationService)

  private selectedText: string = '';
  private popupRef?: ComponentRef<TranslationPopupComponent>;

  @HostListener('mouseup')
  onMouseUp() {
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);
    const rect = range?.getBoundingClientRect();

    if (selection && selection.toString().trim().length > 0) {
      this.selectedText = selection.toString();
      this.popupRef?.destroy();

      this.popupRef = this.viewContainer.createComponent(TranslationPopupComponent);
      this.popupRef.setInput('position', {
        top: (rect?.top || 0) + window.scrollY - 45,
        left: (rect?.left || 0) + (rect?.width || 0) / 2 + window.scrollX - 16,
      });

      this.popupRef.instance.showPopup(true);
      this.popupRef.instance.clicked.subscribe(() => {
        this.popupRef?.instance.showPopup(false);
        setTimeout(() => { this.popupRef?.destroy() }, 300);
        this.translationService.translate(selection.toString())
          .then(result => {
            const elem = document.createElement("span");
            elem.innerText = result;
            elem.classList.add('translated');
            range?.deleteContents();
            range?.insertNode(elem);
            selection.removeAllRanges();
          });
      })
    } else {
      this.popupRef?.destroy();
      this.popupRef = undefined;
    }
  }

  // @HostListener('mouseleave')
  // onMouseLeave() {
  //   console.log('mouseleave');
  //   if (this.popupRef && !this.popupRef.instance.isHovered()) {
  //     this.popupRef.instance.showPopup(false);
  //   }
  // }
  //
  // @HostListener('mouseenter')
  // onMouseEnter() {
  //   console.log('mouseenter');
  //   this.popupRef?.instance.showPopup(true);
  // }
}
