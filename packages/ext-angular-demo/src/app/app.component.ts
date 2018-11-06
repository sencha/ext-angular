import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">

      <panel #item
        [title]="'Panel with children'"
        [shadow]="'true'"
        [layout]="'hbox'">

        <div #item>in items<div>another {{somedata}} div</div></div>
        <button #item [text]="'in items button'"></button>

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
  somedata = 'mjg'

//  private onPivotgridPivotDone({matrix}) {
  clickMe(event) {
    console.log('hi')
    this.somedata = 'changed'
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