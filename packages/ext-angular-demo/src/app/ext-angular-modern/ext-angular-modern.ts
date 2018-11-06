import { NgModule } from '@angular/core';
import { ExtButtonComponent } from './ext-button.component';
import { ExtContainerComponent } from './ext-container.component';
import { ExtPanelComponent } from './ext-panel.component';

@NgModule({
  imports: [
  ],
  declarations: [
    ExtButtonComponent,
    ExtContainerComponent,
    ExtPanelComponent
  ],
  exports: [
    ExtButtonComponent,
    ExtContainerComponent,
    ExtPanelComponent
  ]
})
export class ExtAngularModernModule { }
