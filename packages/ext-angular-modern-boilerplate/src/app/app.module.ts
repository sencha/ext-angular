declare var Ext: any
import {Component,NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { ExtAngularModernModule } from '@sencha/ext-angular-modern'
import { AppComponent } from './app.component';
import { ExtAngularService } from './ext-angular.service';

@Component({
  selector: 'app-root',
  template: ``,
})
export class App {
  constructor(private ExtAngularService: ExtAngularService) {
    this.ExtAngularService.appendComponentToViewport(AppComponent);
  }
}

@NgModule({
  imports: [BrowserModule, ExtAngularModernModule],
  declarations: [App, AppComponent],
  providers: [ExtAngularService],
  entryComponents: [ AppComponent, AppComponent],
  bootstrap: [App]
})
export class AppModule { }
