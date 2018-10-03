import { NgModule } from '@angular/core';
import { ExtButtonComponent } from './ext-button.component';
import { ExtGridComponent } from './ext-grid.component';
import { ExtClassComponent } from './ext-class.component';

@NgModule({
  imports: [
  ],
  declarations: [
    ExtButtonComponent,
    ExtGridComponent,
    ExtClassComponent
  ],
  exports: [
    ExtButtonComponent,
    ExtGridComponent,
    ExtClassComponent
  ]
})
export class ExtAngularModernModule { }
