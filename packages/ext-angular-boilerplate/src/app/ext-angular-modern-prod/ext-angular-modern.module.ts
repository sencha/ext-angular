
  import { NgModule } from '@angular/core';
  import { ExtTitleComponent } from './ext-title.component';
import { ExtContainerComponent } from './ext-container.component';
import { ExtTitlebarComponent } from './ext-titlebar.component';
import { ExtButtonComponent } from './ext-button.component';
import { ExtSheetComponent } from './ext-sheet.component';
import { ExtPanelComponent } from './ext-panel.component';
import { ExtGridComponent } from './ext-grid.component';
import { ExtToolbarComponent } from './ext-toolbar.component';
import { ExtSearchfieldComponent } from './ext-searchfield.component';
import { ExtColumnComponent } from './ext-column.component';
import { ExtTreelistComponent } from './ext-treelist.component';

  @NgModule({
    imports: [
    ],
    declarations: [
      ExtTitleComponent,
    ExtContainerComponent,
    ExtTitlebarComponent,
    ExtButtonComponent,
    ExtSheetComponent,
    ExtPanelComponent,
    ExtGridComponent,
    ExtToolbarComponent,
    ExtSearchfieldComponent,
    ExtColumnComponent,
    ExtTreelistComponent,
  ],
    exports: [
      ExtTitleComponent,
    ExtContainerComponent,
    ExtTitlebarComponent,
    ExtButtonComponent,
    ExtSheetComponent,
    ExtPanelComponent,
    ExtGridComponent,
    ExtToolbarComponent,
    ExtSearchfieldComponent,
    ExtColumnComponent,
    ExtTreelistComponent,
  ]
  })
  export class ExtAngularModernModule { }
  