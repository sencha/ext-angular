import { Component } from '@angular/core'

/**
 *    <button #item 
        (tap)="clickMe($event)" 
        [text]="somedata">
      </button>

  Buttont takes up whole screen even if it is insde vbox    
 */
@Component({
  selector: 'ext-angular-root',
  template: `
    <panel #item
      [title]="'Panel with children'"
      [shadow]="'true'"
      [layout]="'vbox'">
      <div #item>root div<div>{{somedata}}</div></div>
      
      <div #item style="width: 150px;margin: 0 15px 0 0;color: white;padding: 5px 10px;text-align: center;cursor: default; background-color: #e91e63"
      data-qtip="This tip is inline" data-qshowOnTap="true">Inline Tip</div>
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
