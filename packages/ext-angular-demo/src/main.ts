import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {AppModule} from "./app/app.module"

declare var Ext: any
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