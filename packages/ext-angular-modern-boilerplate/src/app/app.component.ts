import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<panel #item [title]=title [layout]="'hbox'" [fitToParent]="true">
  <button #item [text]="'click'" [cls]="'aStyle'"></button>
</container>
  `,
  styles: []
})
export class AppComponent {
  title = 'ext-angular-modern-boilerplate';
}
