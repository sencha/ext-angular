declare var Ext: any
import { Component } from '@angular/core';

// Ext.require([
//   'Ext.layout.Fit'
// ]);
@Component({
  selector: 'ext-angular-root',
  styles: [``],
  template: `
  <container
    [fullscreen]="true"
    html="<H1>hi</H1>">
  </container>
  `
})
export class AppComponent {
}
