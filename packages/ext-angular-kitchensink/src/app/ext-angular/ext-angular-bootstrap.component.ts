import { Component } from '@angular/core';
import { ExtAngularBootstrapService } from './ext-angular-bootstrap.service';

@Component({
  selector: 'app-root',
  styles: [``],
  template: ``,
})
export class ExtAngularBootstrapComponent {

  constructor(private extAngularService: ExtAngularBootstrapService) {
    //console.log("In App constructor");
    this.extAngularService.appendComponentToViewport();
  }
}