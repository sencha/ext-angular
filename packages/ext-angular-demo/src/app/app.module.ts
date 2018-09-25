import { NgModule } from '@angular/core'
//import { ExtAngularModule } from 'ext-angular-modern'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    //ExtAngularModule
  ],
  declarations: [ AppComponent ],
  providers: []
})
export class AppModule {}
