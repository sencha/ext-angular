import { NgModule } from '@angular/core';
import { ExtButtonComponent } from './ext-button.component';
import { ExtContainerComponent } from './ext-container.component';

@NgModule({
  imports: [
  ],
  declarations: [
    ExtButtonComponent,
    ExtContainerComponent
  ],
  exports: [
    ExtButtonComponent,
    ExtContainerComponent
  ]
})
export class ExtAngularModernModule { }
