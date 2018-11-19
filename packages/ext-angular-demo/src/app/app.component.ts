import { Component } from '@angular/core'

@Component({
  selector: 'ext-angular-root',
  template: `
    <panel #item
      [title]="'Panel with children'"
      [shadow]="'true'"
      [layout]="'vbox'">
      <div #item>root div<div>{{somedata}}</div></div>
      <button #item 
        (tap)="clickMe($event)" 
        [text]="somedata">
      </button>
    </panel>
  `,
  styles: []
})
export class AppComponent {
  somedata = 'this is the original text'

  clickMe(event) {
    this.somedata = 'now the text has changed ' + Date.now()
  }

}
