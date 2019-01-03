import { Component, NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'

// import { environment } from '../environments';
// if (environment.production) {
//   import { ExtAngularModernModule } from './ext-angular-modern-prod/ext-angular-modern.module'
// }
// else {
//   import { ExtAngularModernModule } from '@sencha/ext-angular-modern'

// }

import { ExtAngularModernModule } from './ext-angular-modern-test/ext-angular-modern.module'
//import { ExtAngularModernModule } from '@sencha/ext-angular-modern'
import { ExtAngularService } from './ext-angular.service'
import { AppComponent } from './app.component'
//import { MjgComponent } from './mjg.component'
//import { AppComponent } from './example.component';

@Component({
  selector: 'app-root',
  template: ``,
})
export class App {
  constructor(private ExtAngularService: ExtAngularService) {
    this.ExtAngularService.appendComponentToViewport(AppComponent)
  }
}

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, ExtAngularModernModule ],
  declarations: [ App, AppComponent ],
  providers: [ ExtAngularService ],
  entryComponents: [ AppComponent],
  bootstrap: [ App ]
})
export class AppModule {}