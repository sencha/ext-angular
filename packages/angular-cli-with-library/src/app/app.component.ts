import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <ext-button [text]="'Example ExtAngular Button'"></ext-button>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'simple-angular';
}
