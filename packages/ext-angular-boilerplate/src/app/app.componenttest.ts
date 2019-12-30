import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `
<ExtPanel title="Example Panel" bodyPadding="10" shadow="true">
  <ExtButton text="tap me" (tap)="tapButton($event)"></ExtButton>
  <router-outlet #extitem></router-outlet>
</ExtPanel>
    `,
    styles: []
})

export class AppComponent {
  tapButton(detail) {
    console.log(detail)
    window.location.hash = '#/about';



    console.log(window.location.hash)
  }
}