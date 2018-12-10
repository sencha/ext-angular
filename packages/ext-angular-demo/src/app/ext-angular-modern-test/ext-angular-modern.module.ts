import { NgModule } from '@angular/core';
import { ExtButtonComponent } from './ext-button.component';
import { ExtContainerComponent } from './ext-container.component';
import { ExtPanelComponent } from './ext-panel.component';
import { ExtTitlebarComponent } from './ext-titlebar.component';

@NgModule({
  imports: [
  ],
  declarations: [
    ExtButtonComponent,
    ExtContainerComponent,
    ExtPanelComponent,
    ExtTitlebarComponent
  ],
  exports: [
    ExtButtonComponent,
    ExtContainerComponent,
    ExtPanelComponent,
    ExtTitlebarComponent
  ]

})
export class ExtAngularModernModule { }
