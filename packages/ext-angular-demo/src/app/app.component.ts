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
      [layout]="'vbox'">
      <div #item data-qtip="'hi'" >root div<div>{{somedata}}</div></div>
      
      <button #item
        [flex]="'1'"
        [handler]="clickMe"
        [text]="somedata">
      </button>

      <button #item
      [flex]="'1'"
      [handler]="clickMe2.bind(this)"
      [text]="'clickMe2'">
    </button>

    </panel>
  `,
  styles: []
})
export class AppComponent {
  somedata = 'this is the original text'

  clickMe = (event) => {
    console.log('hey')
    console.log(event)
    this.somedata = 'now the text has changed ' + Date.now()
  }

  clickMe2(event) {
    console.log('hey from clickMe2')
    console.log(event)
    this.somedata = 'now the text has changed from clickMe2 ' + Date.now()
  }

}
