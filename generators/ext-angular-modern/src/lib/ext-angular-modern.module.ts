import { NgModule } from '@angular/core';
import { ExtButtonComponent } from './ext-button.component';
import { ExtGridComponent } from './ext-grid.component';

@NgModule({
  imports: [
  ],
  declarations: [
    ExtButtonComponent,
    ExtGridComponent
  ],
  exports: [
    ExtButtonComponent,
    ExtGridComponent
  ]
})
export class ExtAngularModernModule { }
