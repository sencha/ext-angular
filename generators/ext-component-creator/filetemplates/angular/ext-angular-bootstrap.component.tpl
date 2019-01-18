import { Component } from '@angular/core'
import { ExtAngularBootstrapService } from './ext-angular-bootstrap.service'

@Component({
  selector: 'app-root',
  template: ``,
})
export class ExtAngularBootstrapComponent {
  
  constructor(private extAngularService: ExtAngularBootstrapService) {
    //console.log("In App constructor")
    this.extAngularService.appendComponentToViewport()
  }

  //launch() {
  //  console.log('bootstrap launch')
  //}
}