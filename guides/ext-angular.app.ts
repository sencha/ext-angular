import {Component} from "@angular/core";
import {ExtAngularService} from "./ext-angular.service";
import {HelloComponent} from "../packages/angular-tutorial/src/app/app.component";

@Component({
  selector: "app-root",
  template: ``,
})
export class App {
  constructor(public EA: ExtAngularService) {
    this.EA.appendComponentToViewport(HelloComponent);
  }
}