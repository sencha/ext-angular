import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">

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

      <p>
      <button 
        (tap)="clickMe($event)" 
        (ready)="readyButton($event)"
        [text]="'Example ExtAngular Button'"
      ></button>

    </div>
  `,
  styles: []
})
export class AppComponent {
  somedata = 'this is the original text'

  clickMe(event) {
    this.somedata = 'now the text has changed ' + Date.now()
  }

  readyButton(theButton) {
//    console.log('here')
  }


}

// <div>
// <h1>he</h1>
// </div>
// <div>the div</div>

// <button [text]="'hi'"></button>
// <button [text]="'hi'"></button>
// <container [html]="'<div>the div</div>'"></container>

// <items>
// <div>in items</div>
// <button [text]="'in items button'"></button>
// </items>
// <button [text]="'in panel not in items'"></button>