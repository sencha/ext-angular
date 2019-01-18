declare var Ext: any;
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ExtAngularBootstrapService } from './ext-angular-bootstrap.service';

@Component({
  selector: 'app-root',
  template: ``,
})
export class ExtAngularBootstrapComponent {
  
  constructor(private extAngularService: ExtAngularBootstrapService) {
    //console.log("In App constructor")
    this.extAngularService.appendComponentToViewport()
  }

}

export function bootstrapModule(AppModule) {
  Ext.application({
    name: "$ExtAngularApp",
    quickTips: true,
    launch: () => {
      platformBrowserDynamic().bootstrapModule(AppModule)
        .catch((err) => {
          console.log(err)
        })
    }
  })
}