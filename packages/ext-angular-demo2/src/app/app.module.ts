import { NgModule } from '@angular/core'
//import { ExtAngularModule } from 'ext-angular'
//import { NgxTabsLibModule } from 'ngx-tabs-libdemo'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
 //   NgxTabsLibModule
 //   ExtAngularModule
  ],
  declarations: [ AppComponent ],
  providers: []
})
export class AppModule {}
