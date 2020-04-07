import { Component, ViewEncapsulation } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "ext-angular-root",
  styles: [
    `
      .router-flex {
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
  template: `
    <container
      #item
      [scrollable]="true"
      [padding]="30"
      [layout]="'fit'"
      fitToParent="true"
    >
      <router-outlet #item></router-outlet>
    </container>
  `,
})
export class AppComponent {}
