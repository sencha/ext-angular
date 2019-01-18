declare var Ext: any
import { Component } from '@angular/core';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"

@Component({selector: 'launch',template: ''})
export class ExtAngularLaunchComponent {

   bootstrapModule(AppModule) {
     console.log('launch')
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

};

