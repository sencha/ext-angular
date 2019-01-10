import {
  Component,
  ElementRef,
  Renderer2
} from '@angular/core';
@Component({
  selector: 'mjg', 
  // providers: [
  //   //{provide: ElementRef, useExisting: forwardRef(() => ExtButtonComponent)},
  //   //{provide: ElementRef, useValue: new MockElementRef() },
  // ],
  template: ''
})
export class ExtMjgComponent {
  constructor(
    //private renderer: Renderer2,
    private eRef: ElementRef
  ) {
  }
}